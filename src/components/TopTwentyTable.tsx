import type { DebtCountry } from "../data/countries";
import { getDebtPerSecondUsd, getDisplayDebtTrillions } from "../lib/debt";
import {
  formatCurrencyTrillions,
  formatDebtTrillions,
  formatDebtPerSecond,
  formatPercent,
} from "../lib/format";

export function TopTwentyTable({
  countries,
  selectedIso,
  onSelect,
}: {
  countries: DebtCountry[];
  selectedIso: string;
  onSelect: (country: DebtCountry) => void;
}) {
  return (
    <section className="table-mode">
      <div className="table-heading">
        <div>
          <p>当前显示 {countries.length} 个经济体</p>
          <h2>全球国债快照排行</h2>
        </div>
        <span>点击任意国家进入详情</span>
      </div>
      <div className="debt-table-wrap">
        <table className="debt-table">
          <thead>
            <tr>
              <th>排名</th>
              <th>国家</th>
              <th>GDP</th>
              <th>政府负债</th>
              <th>债务/GDP</th>
              <th>每秒负债增加</th>
              <th>财政余额/GDP</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => {
              const displayDebtTrillions = getDisplayDebtTrillions(country);
              const perSecond = getDebtPerSecondUsd(country);

              return (
                <tr
                  key={country.iso2}
                  className={country.iso2 === selectedIso ? "is-selected" : ""}
                  onClick={() => onSelect(country)}
                >
                  <td>#{country.rank}</td>
                  <td>
                    <span className="country-cell">
                      <span>{country.flag}</span>
                      {country.name}
                    </span>
                  </td>
                  <td>{formatCurrencyTrillions(country.gdpTrillionsUsd)}</td>
                  <td>{formatDebtTrillions(displayDebtTrillions)}</td>
                  <td>{formatPercent(country.debtToGdpPercent)}</td>
                  <td>-{formatDebtPerSecond(perSecond)}</td>
                  <td>{formatPercent(country.fiscalBalancePercentGdp)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
