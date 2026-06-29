import { BarChart3, Globe2, Table2 } from "lucide-react";
import { useMemo, useState } from "react";
import { DetailMode } from "./components/DetailMode";
import { GlobeDebtCard } from "./components/GlobeDebtCard";
import { GlobeScene } from "./components/GlobeScene";
import { TopTwentyTable } from "./components/TopTwentyTable";
import { DEFAULT_VISIBLE_COUNTRY_COUNT, countries } from "./data/countries";

type ViewMode = "globe" | "detail" | "table";
const MIN_VISIBLE_COUNTRIES = 10;

export default function App() {
  const [selectedIso, setSelectedIso] = useState("US");
  const [mode, setMode] = useState<ViewMode>("globe");
  const [showGlobeCard, setShowGlobeCard] = useState(false);
  const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE_COUNTRY_COUNT);

  const selectedCountry = useMemo(
    () => countries.find((country) => country.iso2 === selectedIso) ?? countries[0],
    [selectedIso],
  );

  const visibleCountries = useMemo(() => {
    const sorted = [...countries].sort((a, b) => b.debtTrillionsUsd - a.debtTrillionsUsd);
    const visible = sorted.slice(0, visibleCount);

    if (visible.some((country) => country.iso2 === selectedCountry.iso2)) {
      return visible;
    }

    return [...visible.slice(0, Math.max(0, visibleCount - 1)), selectedCountry];
  }, [selectedCountry, visibleCount]);

  return (
    <main className={`app app--${mode}`}>
      <section className="hero-shell" aria-label="全球国债交互统计图">
        {mode !== "globe" && (
          <div className="topbar">
            <div className="brand">
              <span className="brand__mark">GD</span>
              <div>
                <h1>全球国债轨道台</h1>
                <p>IMF 189 经济体 · 默认显示 80 · 每秒负债滚动估算</p>
              </div>
            </div>
            <nav className="mode-switcher" aria-label="视图切换">
              <button
                onClick={() => setMode("globe")}
                type="button"
                title="地球模式"
              >
                <Globe2 size={18} />
                <span>地球</span>
              </button>
              <button
                className={mode === "detail" ? "is-active" : ""}
                onClick={() => setMode("detail")}
                type="button"
                title="图表模式"
              >
                <BarChart3 size={18} />
                <span>图表</span>
              </button>
              <button
                className={mode === "table" ? "is-active" : ""}
                onClick={() => setMode("table")}
                type="button"
                title="排行表"
              >
                <Table2 size={18} />
                <span>排行</span>
              </button>
            </nav>
          </div>
        )}

        {mode === "globe" && (
          <div className="globe-nav-reveal">
            <div className="globe-controls">
              <nav className="mode-switcher globe-mode-switcher" aria-label="视图切换">
                <button className="is-active" onClick={() => setMode("globe")} type="button" title="地球模式">
                  <Globe2 size={18} />
                  <span>地球</span>
                </button>
                <button onClick={() => setMode("detail")} type="button" title="图表模式">
                  <BarChart3 size={18} />
                  <span>图表</span>
                </button>
                <button onClick={() => setMode("table")} type="button" title="排行表">
                  <Table2 size={18} />
                  <span>排行</span>
                </button>
              </nav>
              <label className="country-count-control">
                <span>显示 {visibleCount} / {countries.length}</span>
                <input
                  type="range"
                  min={MIN_VISIBLE_COUNTRIES}
                  max={countries.length}
                  value={visibleCount}
                  onChange={(event) => setVisibleCount(Number(event.target.value))}
                  aria-label="调整地球显示国家数量"
                />
              </label>
            </div>
          </div>
        )}

        {mode === "globe" && (
          <>
            <GlobeScene
              countries={visibleCountries}
              selectedIso={selectedCountry.iso2}
              onSelect={(country) => {
                setSelectedIso(country.iso2);
                setShowGlobeCard(true);
              }}
              onOpenDetail={(country) => {
                setSelectedIso(country.iso2);
                setMode("detail");
              }}
            />
            {showGlobeCard && (
              <GlobeDebtCard
                country={selectedCountry}
                onClose={() => setShowGlobeCard(false)}
                onOpenDetail={() => setMode("detail")}
              />
            )}
          </>
        )}

        {mode === "detail" && (
          <DetailMode
            countries={visibleCountries}
            country={selectedCountry}
            onSelect={(country) => setSelectedIso(country.iso2)}
            onBack={() => setMode("globe")}
          />
        )}

        {mode === "table" && (
          <TopTwentyTable
            countries={visibleCountries}
            selectedIso={selectedCountry.iso2}
            onSelect={(country) => {
              setSelectedIso(country.iso2);
              setMode("detail");
            }}
          />
        )}
      </section>
    </main>
  );
}
