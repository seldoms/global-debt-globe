import { Html, OrbitControls, Stars, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { DebtCountry } from "../data/countries";
import {
  calculateSubsolarPoint,
  formatSolarCoordinate,
  subsolarPointToVector,
  type SubsolarPoint,
} from "../lib/solar";

type GlobeSceneProps = {
  countries: DebtCountry[];
  selectedIso: string;
  onSelect: (country: DebtCountry) => void;
  onOpenDetail: (country: DebtCountry) => void;
};

const globeRadius = 1.82;

function latLngToVector3(latitude: number, longitude: number, radius: number) {
  const phi = (90 - latitude) * (Math.PI / 180);
  const theta = (longitude + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function DebtMarker({
  country,
  selected,
  onSelect,
  onOpenDetail,
}: {
  country: DebtCountry;
  selected: boolean;
  onSelect: (country: DebtCountry) => void;
  onOpenDetail: (country: DebtCountry) => void;
}) {
  const position = useMemo(
    () => latLngToVector3(country.latitude, country.longitude, globeRadius),
    [country.latitude, country.longitude],
  );
  const normal = useMemo(() => position.clone().normalize(), [position]);
  const height = 0.08 + Math.sqrt(country.debtTrillionsUsd) * 0.085;
  const midpoint = useMemo(
    () => position.clone().add(normal.clone().multiplyScalar(height / 2)),
    [height, normal, position],
  );
  const quaternion = useMemo(() => {
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
    return q;
  }, [normal]);
  const color = selected ? "#ffe66f" : "#30e3ff";

  return (
    <group>
      <mesh
        position={midpoint}
        quaternion={quaternion}
        onClick={(event) => {
          event.stopPropagation();
          onSelect(country);
        }}
        onDoubleClick={(event) => {
          event.stopPropagation();
          onOpenDetail(country);
        }}
      >
        <boxGeometry args={[selected ? 0.11 : 0.08, height, selected ? 0.11 : 0.08]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={selected ? 1.1 : 0.55}
          metalness={0.25}
          roughness={0.32}
        />
      </mesh>
      <mesh
        position={position.clone().add(normal.clone().multiplyScalar(0.006))}
        quaternion={quaternion}
      >
        <boxGeometry args={[selected ? 0.16 : 0.12, 0.012, selected ? 0.16 : 0.12]} />
        <meshStandardMaterial
          color={selected ? "#fff3a8" : "#71f1ff"}
          emissive={color}
          emissiveIntensity={selected ? 0.9 : 0.45}
          transparent
          opacity={0.72}
        />
      </mesh>
      {selected && (
        <Html
          position={position.clone().add(normal.clone().multiplyScalar(height + 0.16))}
          center
          className="globe-label"
        >
          <button type="button" onClick={() => onOpenDetail(country)}>
            <span>{country.flag}</span>
            {country.name}
          </button>
        </Html>
      )}
    </group>
  );
}

function RotatingGlobe({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.035;
    }
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
}

function Earth() {
  const [earthMap, cloudMap] = useTexture([
    `${import.meta.env.BASE_URL}textures/earth_atmos_2048.jpg`,
    `${import.meta.env.BASE_URL}textures/earth_clouds_1024.png`,
  ]);
  const cloudRef = useRef<THREE.Mesh>(null);

  earthMap.colorSpace = THREE.SRGBColorSpace;
  cloudMap.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, delta) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += delta * 0.018;
    }
  });

  return (
    <>
      <mesh>
        <sphereGeometry args={[globeRadius, 96, 96]} />
        <meshStandardMaterial
          map={earthMap}
          color="#d7f6ff"
          emissive="#061322"
          emissiveIntensity={0.22}
          metalness={0.1}
          roughness={0.74}
        />
      </mesh>
      <mesh ref={cloudRef}>
        <sphereGeometry args={[globeRadius + 0.018, 96, 96]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.32}
          depthWrite={false}
          roughness={0.86}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[globeRadius + 0.02, 96, 96]} />
        <meshStandardMaterial
          color="#37d5ff"
          transparent
          opacity={0.09}
          wireframe
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[globeRadius + 0.07, 96, 96]} />
        <meshBasicMaterial
          color="#55ddff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

function SolarLight({ point }: { point: SubsolarPoint }) {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const sunDirection = useMemo(() => subsolarPointToVector(point), [point]);
  const sunPosition = useMemo(
    () => sunDirection.clone().multiplyScalar(8),
    [sunDirection],
  );

  useFrame(() => {
    if (!lightRef.current) return;
    lightRef.current.position.lerp(sunPosition, 0.08);
    lightRef.current.target.position.set(0, 0, 0);
    lightRef.current.target.updateMatrixWorld();
  });

  return (
    <>
      <directionalLight
        ref={lightRef}
        position={sunPosition}
        intensity={3.2}
        color="#fff6d8"
      />
      <pointLight
        position={sunDirection.clone().multiplyScalar(9)}
        intensity={0.9}
        color="#ffd36f"
      />
    </>
  );
}

export function GlobeScene({
  countries,
  selectedIso,
  onSelect,
  onOpenDetail,
}: GlobeSceneProps) {
  const [subsolarPoint, setSubsolarPoint] = useState(() => calculateSubsolarPoint());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSubsolarPoint(calculateSubsolarPoint());
    }, 10_000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="globe-stage">
      <Canvas
        camera={{ position: [0, 0.42, 6.9], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#02040d"]} />
        <ambientLight intensity={0.42} />
        <SolarLight point={subsolarPoint} />
        <pointLight position={[-5, -2, -3]} intensity={0.55} color="#426cff" />
        <Stars radius={80} depth={55} count={4200} factor={4} fade speed={0.35} />
        <RotatingGlobe>
          <Earth />
          {countries.map((country) => (
            <DebtMarker
              key={country.iso2}
              country={country}
              selected={country.iso2 === selectedIso}
              onSelect={onSelect}
              onOpenDetail={onOpenDetail}
            />
          ))}
        </RotatingGlobe>
        <OrbitControls
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.62}
          minDistance={4.2}
          maxDistance={8.6}
        />
      </Canvas>
      <div className="solar-readout">
        <span>太阳直射点</span>
        <strong>
          {formatSolarCoordinate(subsolarPoint.latitude, "lat")} ·{" "}
          {formatSolarCoordinate(subsolarPoint.longitude, "lng")}
        </strong>
      </div>
      <div className="gesture-hint">拖拽旋转 · 滚轮缩放 · 双击国家进入图表</div>
    </div>
  );
}
