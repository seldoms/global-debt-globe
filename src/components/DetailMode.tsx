import { ArrowLeft, CircleDollarSign } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { DebtCountry } from "../data/countries";
import { dataSources } from "../data/countries";
import { getDebtPerSecondUsd, getDisplayDebtTrillions } from "../lib/debt";
import {
  formatCurrencyTrillions,
  formatDebtTrillions,
  formatDebtPerSecond,
  formatPercent,
} from "../lib/format";

const palette = ["#37e3ff", "#ffe66f", "#ff5c8a", "#8cff7a"];

export function DetailMode({
  country,
  countries,
  onSelect,
  onBack,
}: {
  country: DebtCountry;
  countries: DebtCountry[];
  onSelect: (country: DebtCountry) => void;
  onBack: () => void;
}) {
  const comparison = countries.slice(0, 10).map((item) => ({
    name: item.name,
    debt: -getDisplayDebtTrillions(item),
    gdp: item.gdpTrillionsUsd,
  }));
  const displayDebtTrillions = getDisplayDebtTrillions(country);
  const perSecond = getDebtPerSecondUsd(country);

  return (
    <section className="detail-mode">
      <div className="detail-header">
        <button className="icon-button" onClick={onBack} type="button" title="返回地球">
          <ArrowLeft size={19} />
        </button>
        <div>
          <p>{country.flag} #{country.rank} · {country.englishName}</p>
          <h2>{country.name}债务剖面</h2>
        </div>
        <select
          value={country.iso2}
          onChange={(event) => {
            const next = countries.find((item) => item.iso2 === event.target.value);
            if (next) onSelect(next);
          }}
          aria-label="选择国家"
        >
          {countries.map((item) => (
            <option key={item.iso2} value={item.iso2}>
              {item.flag} {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="detail-layout">
        <div className="stat-rail">
          <div>
            <span>政府负债总额</span>
            <strong>{formatDebtTrillions(displayDebtTrillions)}</strong>
          </div>
          <div>
            <span>GDP</span>
            <strong>{formatCurrencyTrillions(country.gdpTrillionsUsd)}</strong>
          </div>
          <div>
            <span>债务/GDP</span>
            <strong>{formatPercent(country.debtToGdpPercent)}</strong>
          </div>
          <div>
            <span>财政余额/GDP</span>
            <strong>{formatPercent(country.fiscalBalancePercentGdp)}</strong>
          </div>
          <div>
            <span>估算每秒负债增加</span>
            <strong>-{formatDebtPerSecond(perSecond)}</strong>
          </div>
        </div>

        <div className="chart-panel composition-panel">
          <div className="panel-title">
            <CircleDollarSign size={19} />
            <h3>债务构成</h3>
          </div>
          <div className="composition-bars">
            {country.composition.map((item, index) => (
              <div key={item.label}>
                <div className="composition-bars__label">
                  <span>
                    <i style={{ background: palette[index] }} />
                    {item.label}
                  </span>
                  <strong>{item.share}%</strong>
                </div>
                <div className="composition-bars__track">
                  <b
                    style={{
                      width: `${item.share}%`,
                      background: palette[index],
                    }}
                  />
                </div>
                <p>{formatDebtTrillions(item.amountTrillionsUsd)} · {item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-panel comparison-panel">
          <div className="panel-title">
            <h3>前 10 负债/GDP 对照</h3>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={comparison}>
              <CartesianGrid stroke="#17304a" vertical={false} />
              <XAxis dataKey="name" stroke="#8eb4d0" tick={{ fontSize: 12 }} />
              <YAxis stroke="#8eb4d0" tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value, name) => [
                  name === "负债" ? `${Number(value).toFixed(2)} 万亿美元` : `${value} 万亿美元`,
                  name,
                ]}
                contentStyle={{ background: "#07111f", border: "1px solid #25405f", borderRadius: 8 }}
              />
              <Bar dataKey="debt" fill="#ff5c8a" radius={[0, 0, 6, 6]} name="负债" />
              <Bar dataKey="gdp" fill="#ffe66f" radius={[6, 6, 0, 0]} name="GDP" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="methodology">
        {dataSources.map((source) => (
          <p key={source}>{source}</p>
        ))}
      </div>
    </section>
  );
}
