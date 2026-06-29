import type { DebtCountry } from '../countries';

export const generatedCountries: DebtCountry[] = [
  {
    "rank": 1,
    "name": "美国",
    "englishName": "United States",
    "iso2": "US",
    "flag": "🇺🇸",
    "latitude": 38.9,
    "longitude": -77,
    "gdpTrillionsUsd": 30.767075,
    "debtTrillionsUsd": 39.311023,
    "debtToGdpPercent": 127.8,
    "yearlyDebtDeltaTrillionsUsd": 1.6325,
    "populationMillions": 341.89,
    "debtPerCapitaUsd": 114981,
    "fiscalBalancePercentGdp": -6.8,
    "snapshotDate": "2026-06-25T00:00:00Z",
    "sourceYear": "USA Debt Clock page script + 2025 IMF WEO GDP context",
    "sourceNote": "US debt uses the USA Debt Clock page-script baseline labeled as US Treasury source; GDP remains the nominal current-dollar IMF context used for cross-country comparison.",
    "liveSource": {
      "provider": "USA Debt Clock",
      "url": "https://www.usadebtclock.com/",
      "sourceLabel": "United States National Debt, page title labels source as US Treasury",
      "baseDebtUsd": 39311022730162.44,
      "perSecondUsd": 51767.44,
      "snapshotDate": "2026-06-25T00:00:00Z"
    },
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 58,
        "amountTrillionsUsd": 22.8,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 24,
        "amountTrillionsUsd": 9.43,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 3.14,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 10,
        "amountTrillionsUsd": 3.93,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 2,
    "name": "中国",
    "englishName": "China",
    "iso2": "CN",
    "flag": "🇨🇳",
    "latitude": 39.9,
    "longitude": 116.4,
    "gdpTrillionsUsd": 19.626247,
    "debtTrillionsUsd": 19.469237,
    "debtToGdpPercent": 99.2,
    "yearlyDebtDeltaTrillionsUsd": 0.6991,
    "populationMillions": 1405.08,
    "debtPerCapitaUsd": 13856,
    "fiscalBalancePercentGdp": -7.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 55,
        "amountTrillionsUsd": 10.71,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 27,
        "amountTrillionsUsd": 5.26,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 5,
        "amountTrillionsUsd": 0.97,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 13,
        "amountTrillionsUsd": 2.53,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 3,
    "name": "德国",
    "englishName": "Germany",
    "iso2": "DE",
    "flag": "🇩🇪",
    "latitude": 52.5,
    "longitude": 13.4,
    "gdpTrillionsUsd": 5.048059,
    "debtTrillionsUsd": 3.175229,
    "debtToGdpPercent": 62.9,
    "yearlyDebtDeltaTrillionsUsd": 0.039,
    "populationMillions": 83.524,
    "debtPerCapitaUsd": 38016,
    "fiscalBalancePercentGdp": -2.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 58,
        "amountTrillionsUsd": 1.84,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 24,
        "amountTrillionsUsd": 0.76,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.25,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 10,
        "amountTrillionsUsd": 0.32,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 4,
    "name": "日本",
    "englishName": "Japan",
    "iso2": "JP",
    "flag": "🇯🇵",
    "latitude": 35.7,
    "longitude": 139.7,
    "gdpTrillionsUsd": 4.435163,
    "debtTrillionsUsd": 9.158612,
    "debtToGdpPercent": 206.5,
    "yearlyDebtDeltaTrillionsUsd": 0.055,
    "populationMillions": 123.291,
    "debtPerCapitaUsd": 74285,
    "fiscalBalancePercentGdp": -1.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 76,
        "amountTrillionsUsd": 6.96,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.73,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.73,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 8,
        "amountTrillionsUsd": 0.73,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 5,
    "name": "英国",
    "englishName": "United Kingdom",
    "iso2": "GB",
    "flag": "🇬🇧",
    "latitude": 51.5,
    "longitude": -0.1,
    "gdpTrillionsUsd": 4.003022,
    "debtTrillionsUsd": 4.095092,
    "debtToGdpPercent": 102.3,
    "yearlyDebtDeltaTrillionsUsd": 0.1005,
    "populationMillions": 69.487,
    "debtPerCapitaUsd": 58933,
    "fiscalBalancePercentGdp": -5.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 2.78,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.57,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.29,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.45,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 6,
    "name": "印度",
    "englishName": "India",
    "iso2": "IN",
    "flag": "🇮🇳",
    "latitude": 28.6,
    "longitude": 77.2,
    "gdpTrillionsUsd": 3.916312,
    "debtTrillionsUsd": 3.293618,
    "debtToGdpPercent": 84.1,
    "yearlyDebtDeltaTrillionsUsd": 0.1108,
    "populationMillions": 1463.866,
    "debtPerCapitaUsd": 2250,
    "fiscalBalancePercentGdp": -7.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 55,
        "amountTrillionsUsd": 1.81,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 27,
        "amountTrillionsUsd": 0.89,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 5,
        "amountTrillionsUsd": 0.16,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 13,
        "amountTrillionsUsd": 0.43,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 7,
    "name": "法国",
    "englishName": "France",
    "iso2": "FR",
    "flag": "🇫🇷",
    "latitude": 48.9,
    "longitude": 2.4,
    "gdpTrillionsUsd": 3.368925,
    "debtTrillionsUsd": 3.907953,
    "debtToGdpPercent": 116,
    "yearlyDebtDeltaTrillionsUsd": 0.0906,
    "populationMillions": 68.852,
    "debtPerCapitaUsd": 56759,
    "fiscalBalancePercentGdp": -5.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 2.66,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.55,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.27,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.43,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 8,
    "name": "俄罗斯",
    "englishName": "Russian Federation",
    "iso2": "RU",
    "flag": "🇷🇺",
    "latitude": 55.8,
    "longitude": 37.6,
    "gdpTrillionsUsd": 2.587938,
    "debtTrillionsUsd": 0.445125,
    "debtToGdpPercent": 17.2,
    "yearlyDebtDeltaTrillionsUsd": 0.0079,
    "populationMillions": 143.997,
    "debtPerCapitaUsd": 3091,
    "fiscalBalancePercentGdp": -3.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.33,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.04,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.07,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 9,
    "name": "意大利",
    "englishName": "Italy",
    "iso2": "IT",
    "flag": "🇮🇹",
    "latitude": 41.9,
    "longitude": 12.5,
    "gdpTrillionsUsd": 2.550111,
    "debtTrillionsUsd": 3.496202,
    "debtToGdpPercent": 137.1,
    "yearlyDebtDeltaTrillionsUsd": 0.0493,
    "populationMillions": 58.934,
    "debtPerCapitaUsd": 59324,
    "fiscalBalancePercentGdp": -3.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 76,
        "amountTrillionsUsd": 2.66,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.28,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.28,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 8,
        "amountTrillionsUsd": 0.28,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 10,
    "name": "加拿大",
    "englishName": "Canada",
    "iso2": "CA",
    "flag": "🇨🇦",
    "latitude": 45.4,
    "longitude": -75.7,
    "gdpTrillionsUsd": 2.3199,
    "debtTrillionsUsd": 2.633087,
    "debtToGdpPercent": 113.5,
    "yearlyDebtDeltaTrillionsUsd": 0.0215,
    "populationMillions": 41.602,
    "debtPerCapitaUsd": 63292,
    "fiscalBalancePercentGdp": -1.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 58,
        "amountTrillionsUsd": 1.53,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 24,
        "amountTrillionsUsd": 0.63,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.21,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 10,
        "amountTrillionsUsd": 0.26,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 11,
    "name": "巴西",
    "englishName": "Brazil",
    "iso2": "BR",
    "flag": "🇧🇷",
    "latitude": -15.8,
    "longitude": -47.9,
    "gdpTrillionsUsd": 2.279918,
    "debtTrillionsUsd": 2.127163,
    "debtToGdpPercent": 93.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0783,
    "populationMillions": 213.362,
    "debtPerCapitaUsd": 9970,
    "fiscalBalancePercentGdp": -8.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 55,
        "amountTrillionsUsd": 1.17,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 27,
        "amountTrillionsUsd": 0.57,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 5,
        "amountTrillionsUsd": 0.11,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 13,
        "amountTrillionsUsd": 0.28,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 12,
    "name": "西班牙",
    "englishName": "Spain",
    "iso2": "ES",
    "flag": "🇪🇸",
    "latitude": 40.4,
    "longitude": -3.7,
    "gdpTrillionsUsd": 1.903826,
    "debtTrillionsUsd": 1.911441,
    "debtToGdpPercent": 100.4,
    "yearlyDebtDeltaTrillionsUsd": 0.0217,
    "populationMillions": 49.721,
    "debtPerCapitaUsd": 38443,
    "fiscalBalancePercentGdp": -2.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 55,
        "amountTrillionsUsd": 1.05,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 27,
        "amountTrillionsUsd": 0.52,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 5,
        "amountTrillionsUsd": 0.1,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 13,
        "amountTrillionsUsd": 0.25,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 13,
    "name": "韩国",
    "englishName": "Korea",
    "iso2": "KR",
    "flag": "🇰🇷",
    "latitude": 37.6,
    "longitude": 127,
    "gdpTrillionsUsd": 1.872375,
    "debtTrillionsUsd": 0.979252,
    "debtToGdpPercent": 52.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0062,
    "populationMillions": 51.685,
    "debtPerCapitaUsd": 18947,
    "fiscalBalancePercentGdp": -1.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.67,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.14,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.07,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.11,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 14,
    "name": "澳大利亚",
    "englishName": "Australia",
    "iso2": "AU",
    "flag": "🇦🇺",
    "latitude": -35.3,
    "longitude": 149.1,
    "gdpTrillionsUsd": 1.839961,
    "debtTrillionsUsd": 0.93838,
    "debtToGdpPercent": 51,
    "yearlyDebtDeltaTrillionsUsd": 0.0119,
    "populationMillions": 27.73,
    "debtPerCapitaUsd": 33840,
    "fiscalBalancePercentGdp": -2.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 58,
        "amountTrillionsUsd": 0.54,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 24,
        "amountTrillionsUsd": 0.23,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.08,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 10,
        "amountTrillionsUsd": 0.09,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 15,
    "name": "墨西哥",
    "englishName": "Mexico",
    "iso2": "MX",
    "flag": "🇲🇽",
    "latitude": 19.4,
    "longitude": -99.1,
    "gdpTrillionsUsd": 1.832641,
    "debtTrillionsUsd": 1.132572,
    "debtToGdpPercent": 61.8,
    "yearlyDebtDeltaTrillionsUsd": 0.0252,
    "populationMillions": 133.367,
    "debtPerCapitaUsd": 8492,
    "fiscalBalancePercentGdp": -4.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 55,
        "amountTrillionsUsd": 0.62,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 27,
        "amountTrillionsUsd": 0.31,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 5,
        "amountTrillionsUsd": 0.06,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 13,
        "amountTrillionsUsd": 0.15,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 16,
    "name": "土耳其",
    "englishName": "Türkiye",
    "iso2": "TR",
    "flag": "🇹🇷",
    "latitude": 39.9,
    "longitude": 32.9,
    "gdpTrillionsUsd": 1.597301,
    "debtTrillionsUsd": 0.375366,
    "debtToGdpPercent": 23.5,
    "yearlyDebtDeltaTrillionsUsd": 0.0048,
    "populationMillions": 85.825,
    "debtPerCapitaUsd": 4374,
    "fiscalBalancePercentGdp": -2.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.28,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.03,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.06,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 17,
    "name": "印度尼西亚",
    "englishName": "Indonesia",
    "iso2": "ID",
    "flag": "🇮🇩",
    "latitude": -6.2,
    "longitude": 106.8,
    "gdpTrillionsUsd": 1.445642,
    "debtTrillionsUsd": 0.592713,
    "debtToGdpPercent": 41,
    "yearlyDebtDeltaTrillionsUsd": 0.0078,
    "populationMillions": 284.439,
    "debtPerCapitaUsd": 2084,
    "fiscalBalancePercentGdp": -2.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.4,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.08,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.04,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.07,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 18,
    "name": "荷兰",
    "englishName": "Netherlands",
    "iso2": "NL",
    "flag": "🇳🇱",
    "latitude": 52.4,
    "longitude": 4.9,
    "gdpTrillionsUsd": 1.33224,
    "debtTrillionsUsd": 0.57686,
    "debtToGdpPercent": 43.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0047,
    "populationMillions": 18.044,
    "debtPerCapitaUsd": 31970,
    "fiscalBalancePercentGdp": -1.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.39,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.08,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.04,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.06,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 19,
    "name": "沙特阿拉伯",
    "englishName": "Saudi Arabia",
    "iso2": "SA",
    "flag": "🇸🇦",
    "latitude": 24.7,
    "longitude": 46.7,
    "gdpTrillionsUsd": 1.276943,
    "debtTrillionsUsd": 0.404791,
    "debtToGdpPercent": 31.7,
    "yearlyDebtDeltaTrillionsUsd": 0.0107,
    "populationMillions": 36.006,
    "debtPerCapitaUsd": 11242,
    "fiscalBalancePercentGdp": -5.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.3,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.03,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.06,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 20,
    "name": "瑞士",
    "englishName": "Switzerland",
    "iso2": "CH",
    "flag": "🇨🇭",
    "latitude": 46.9,
    "longitude": 7.4,
    "gdpTrillionsUsd": 1.043544,
    "debtTrillionsUsd": 0.411156,
    "debtToGdpPercent": 39.4,
    "yearlyDebtDeltaTrillionsUsd": 0.0025,
    "populationMillions": 9.026,
    "debtPerCapitaUsd": 45552,
    "fiscalBalancePercentGdp": 0.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 58,
        "amountTrillionsUsd": 0.24,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 24,
        "amountTrillionsUsd": 0.1,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.03,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 10,
        "amountTrillionsUsd": 0.04,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 21,
    "name": "波兰",
    "englishName": "Poland",
    "iso2": "PL",
    "flag": "🇵🇱",
    "latitude": 52,
    "longitude": 20,
    "gdpTrillionsUsd": 1.035586,
    "debtTrillionsUsd": 0.608925,
    "debtToGdpPercent": 58.8,
    "yearlyDebtDeltaTrillionsUsd": 0.0194,
    "populationMillions": 36.497,
    "debtPerCapitaUsd": 16684,
    "fiscalBalancePercentGdp": -7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.41,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.09,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.04,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.07,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 22,
    "name": "中国台湾",
    "englishName": "Taiwan Province of China",
    "iso2": "TW",
    "flag": "🇹🇼",
    "latitude": 25,
    "longitude": 121.6,
    "gdpTrillionsUsd": 0.92005,
    "debtTrillionsUsd": 0.206091,
    "debtToGdpPercent": 22.4,
    "yearlyDebtDeltaTrillionsUsd": 0.002,
    "populationMillions": 23.299,
    "debtPerCapitaUsd": 8845,
    "fiscalBalancePercentGdp": -2.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.15,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 23,
    "name": "比利时",
    "englishName": "Belgium",
    "iso2": "BE",
    "flag": "🇧🇪",
    "latitude": 50.8333,
    "longitude": 4,
    "gdpTrillionsUsd": 0.724917,
    "debtTrillionsUsd": 0.770587,
    "debtToGdpPercent": 106.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0186,
    "populationMillions": 11.883,
    "debtPerCapitaUsd": 64848,
    "fiscalBalancePercentGdp": -5.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 58,
        "amountTrillionsUsd": 0.45,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 24,
        "amountTrillionsUsd": 0.19,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.06,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 10,
        "amountTrillionsUsd": 0.08,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 24,
    "name": "爱尔兰",
    "englishName": "Ireland",
    "iso2": "IE",
    "flag": "🇮🇪",
    "latitude": 53,
    "longitude": -8,
    "gdpTrillionsUsd": 0.71814,
    "debtTrillionsUsd": 0.236268,
    "debtToGdpPercent": 32.9,
    "yearlyDebtDeltaTrillionsUsd": 0.0016,
    "populationMillions": 5.497,
    "debtPerCapitaUsd": 42981,
    "fiscalBalancePercentGdp": 1.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.17,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.04,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 25,
    "name": "阿根廷",
    "englishName": "Argentina",
    "iso2": "AR",
    "flag": "🇦🇷",
    "latitude": -34,
    "longitude": -64,
    "gdpTrillionsUsd": 0.681485,
    "debtTrillionsUsd": 0.547232,
    "debtToGdpPercent": 80.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0033,
    "populationMillions": 47.474,
    "debtPerCapitaUsd": 11527,
    "fiscalBalancePercentGdp": -0.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.37,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.08,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.04,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.06,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 26,
    "name": "瑞典",
    "englishName": "Sweden",
    "iso2": "SE",
    "flag": "🇸🇪",
    "latitude": 62,
    "longitude": 15,
    "gdpTrillionsUsd": 0.668999,
    "debtTrillionsUsd": 0.233481,
    "debtToGdpPercent": 34.9,
    "yearlyDebtDeltaTrillionsUsd": 0.0015,
    "populationMillions": 10.676,
    "debtPerCapitaUsd": 21870,
    "fiscalBalancePercentGdp": -1.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.17,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 27,
    "name": "以色列",
    "englishName": "Israel",
    "iso2": "IL",
    "flag": "🇮🇱",
    "latitude": 31.47,
    "longitude": 35.13,
    "gdpTrillionsUsd": 0.610778,
    "debtTrillionsUsd": 0.418383,
    "debtToGdpPercent": 68.5,
    "yearlyDebtDeltaTrillionsUsd": 0.0099,
    "populationMillions": 10.123,
    "debtPerCapitaUsd": 41330,
    "fiscalBalancePercentGdp": -5.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.28,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.06,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.03,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.05,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 28,
    "name": "新加坡",
    "englishName": "Singapore",
    "iso2": "SG",
    "flag": "🇸🇬",
    "latitude": 1.3,
    "longitude": 103.8,
    "gdpTrillionsUsd": 0.60387,
    "debtTrillionsUsd": 1.034429,
    "debtToGdpPercent": 171.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0197,
    "populationMillions": 6.077,
    "debtPerCapitaUsd": 170220,
    "fiscalBalancePercentGdp": 4.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 76,
        "amountTrillionsUsd": 0.79,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.08,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.08,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 8,
        "amountTrillionsUsd": 0.08,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 29,
    "name": "奥地利",
    "englishName": "Austria",
    "iso2": "AT",
    "flag": "🇦🇹",
    "latitude": 47.3333,
    "longitude": 13.3333,
    "gdpTrillionsUsd": 0.579928,
    "debtTrillionsUsd": 0.466842,
    "debtToGdpPercent": 80.5,
    "yearlyDebtDeltaTrillionsUsd": 0.0095,
    "populationMillions": 9.182,
    "debtPerCapitaUsd": 50843,
    "fiscalBalancePercentGdp": -4.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.32,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.07,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.03,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.05,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 30,
    "name": "泰国",
    "englishName": "Thailand",
    "iso2": "TH",
    "flag": "🇹🇭",
    "latitude": 15,
    "longitude": 100,
    "gdpTrillionsUsd": 0.57701,
    "debtTrillionsUsd": 0.373325,
    "debtToGdpPercent": 64.7,
    "yearlyDebtDeltaTrillionsUsd": 0.0032,
    "populationMillions": 71.62,
    "debtPerCapitaUsd": 5213,
    "fiscalBalancePercentGdp": -1.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.25,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.05,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.03,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.04,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 31,
    "name": "阿联酋",
    "englishName": "United Arab Emirates",
    "iso2": "AE",
    "flag": "🇦🇪",
    "latitude": 24,
    "longitude": 54,
    "gdpTrillionsUsd": 0.571643,
    "debtTrillionsUsd": 0.196074,
    "debtToGdpPercent": 34.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0046,
    "populationMillions": 11.38,
    "debtPerCapitaUsd": 17230,
    "fiscalBalancePercentGdp": 5.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.15,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 32,
    "name": "挪威",
    "englishName": "Norway",
    "iso2": "NO",
    "flag": "🇳🇴",
    "latitude": 62,
    "longitude": 10,
    "gdpTrillionsUsd": 0.530756,
    "debtTrillionsUsd": 0.23884,
    "debtToGdpPercent": 45,
    "yearlyDebtDeltaTrillionsUsd": 0.0101,
    "populationMillions": 5.618,
    "debtPerCapitaUsd": 42513,
    "fiscalBalancePercentGdp": 9.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.16,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.03,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 33,
    "name": "越南",
    "englishName": "Vietnam",
    "iso2": "VN",
    "flag": "🇻🇳",
    "latitude": 16.1667,
    "longitude": 107.8333,
    "gdpTrillionsUsd": 0.494046,
    "debtTrillionsUsd": 0.149696,
    "debtToGdpPercent": 30.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0015,
    "populationMillions": 102.3,
    "debtPerCapitaUsd": 1463,
    "fiscalBalancePercentGdp": -2.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.11,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 34,
    "name": "菲律宾",
    "englishName": "Philippines",
    "iso2": "PH",
    "flag": "🇵🇭",
    "latitude": 13,
    "longitude": 122,
    "gdpTrillionsUsd": 0.487161,
    "debtTrillionsUsd": 0.289374,
    "debtToGdpPercent": 59.4,
    "yearlyDebtDeltaTrillionsUsd": 0.0053,
    "populationMillions": 114.086,
    "debtPerCapitaUsd": 2536,
    "fiscalBalancePercentGdp": -4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.2,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.04,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 35,
    "name": "马来西亚",
    "englishName": "Malaysia",
    "iso2": "MY",
    "flag": "🇲🇾",
    "latitude": 2.5,
    "longitude": 112.5,
    "gdpTrillionsUsd": 0.472193,
    "debtTrillionsUsd": 0.33384,
    "debtToGdpPercent": 70.7,
    "yearlyDebtDeltaTrillionsUsd": 0.0053,
    "populationMillions": 33.852,
    "debtPerCapitaUsd": 9862,
    "fiscalBalancePercentGdp": -3.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.23,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.05,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.04,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 36,
    "name": "丹麦",
    "englishName": "Denmark",
    "iso2": "DK",
    "flag": "🇩🇰",
    "latitude": 56,
    "longitude": 10,
    "gdpTrillionsUsd": 0.461718,
    "debtTrillionsUsd": 0.126972,
    "debtToGdpPercent": 27.5,
    "yearlyDebtDeltaTrillionsUsd": 0.0017,
    "populationMillions": 5.993,
    "debtPerCapitaUsd": 21187,
    "fiscalBalancePercentGdp": 2.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.09,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 37,
    "name": "孟加拉国",
    "englishName": "Bangladesh",
    "iso2": "BD",
    "flag": "🇧🇩",
    "latitude": 24,
    "longitude": 90,
    "gdpTrillionsUsd": 0.457904,
    "debtTrillionsUsd": 0.19232,
    "debtToGdpPercent": 42,
    "yearlyDebtDeltaTrillionsUsd": 0.0025,
    "populationMillions": 173.736,
    "debtPerCapitaUsd": 1107,
    "fiscalBalancePercentGdp": -2.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.13,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.03,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 38,
    "name": "哥伦比亚",
    "englishName": "Colombia",
    "iso2": "CO",
    "flag": "🇨🇴",
    "latitude": 4,
    "longitude": -72,
    "gdpTrillionsUsd": 0.45741,
    "debtTrillionsUsd": 0.273989,
    "debtToGdpPercent": 59.9,
    "yearlyDebtDeltaTrillionsUsd": 0.0071,
    "populationMillions": 53.048,
    "debtPerCapitaUsd": 5165,
    "fiscalBalancePercentGdp": -5.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.19,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.04,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 39,
    "name": "罗马尼亚",
    "englishName": "Romania",
    "iso2": "RO",
    "flag": "🇷🇴",
    "latitude": 46,
    "longitude": 25,
    "gdpTrillionsUsd": 0.427941,
    "debtTrillionsUsd": 0.259332,
    "debtToGdpPercent": 60.6,
    "yearlyDebtDeltaTrillionsUsd": 0.009,
    "populationMillions": 18.832,
    "debtPerCapitaUsd": 13771,
    "fiscalBalancePercentGdp": -7.6,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.18,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.04,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 40,
    "name": "Hong Kong",
    "englishName": "Hong Kong SAR",
    "iso2": "HK",
    "flag": "🇭🇰",
    "latitude": 22.267,
    "longitude": 114.188,
    "gdpTrillionsUsd": 0.42731,
    "debtTrillionsUsd": 0.05085,
    "debtToGdpPercent": 11.9,
    "yearlyDebtDeltaTrillionsUsd": 0.0011,
    "populationMillions": 7.511,
    "debtPerCapitaUsd": 6770,
    "fiscalBalancePercentGdp": -4.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.04,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 41,
    "name": "南非",
    "englishName": "South Africa",
    "iso2": "ZA",
    "flag": "🇿🇦",
    "latitude": -29,
    "longitude": 24,
    "gdpTrillionsUsd": 0.427141,
    "debtTrillionsUsd": 0.335733,
    "debtToGdpPercent": 78.6,
    "yearlyDebtDeltaTrillionsUsd": 0.0089,
    "populationMillions": 63.101,
    "debtPerCapitaUsd": 5321,
    "fiscalBalancePercentGdp": -5.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.23,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.05,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.04,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 42,
    "name": "巴基斯坦",
    "englishName": "Pakistan",
    "iso2": "PK",
    "flag": "🇵🇰",
    "latitude": 30,
    "longitude": 70,
    "gdpTrillionsUsd": 0.407786,
    "debtTrillionsUsd": 0.296868,
    "debtToGdpPercent": 72.8,
    "yearlyDebtDeltaTrillionsUsd": 0.0073,
    "populationMillions": 240.49,
    "debtPerCapitaUsd": 1234,
    "fiscalBalancePercentGdp": -5.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.2,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.04,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 43,
    "name": "捷克",
    "englishName": "Czech Republic",
    "iso2": "CZ",
    "flag": "🇨🇿",
    "latitude": 49.75,
    "longitude": 15.5,
    "gdpTrillionsUsd": 0.38902,
    "debtTrillionsUsd": 0.173503,
    "debtToGdpPercent": 44.6,
    "yearlyDebtDeltaTrillionsUsd": 0.0016,
    "populationMillions": 10.904,
    "debtPerCapitaUsd": 15912,
    "fiscalBalancePercentGdp": -2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.12,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 44,
    "name": "伊朗",
    "englishName": "Iran",
    "iso2": "IR",
    "flag": "🇮🇷",
    "latitude": 32,
    "longitude": 53,
    "gdpTrillionsUsd": 0.371196,
    "debtTrillionsUsd": 0.138456,
    "debtToGdpPercent": 37.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0036,
    "populationMillions": 87.057,
    "debtPerCapitaUsd": 1590,
    "fiscalBalancePercentGdp": -5.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.09,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 45,
    "name": "埃及",
    "englishName": "Egypt",
    "iso2": "EG",
    "flag": "🇪🇬",
    "latitude": 27,
    "longitude": 30,
    "gdpTrillionsUsd": 0.36464,
    "debtTrillionsUsd": 0.316508,
    "debtToGdpPercent": 86.8,
    "yearlyDebtDeltaTrillionsUsd": 0.0095,
    "populationMillions": 107.9,
    "debtPerCapitaUsd": 2933,
    "fiscalBalancePercentGdp": -6.6,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.22,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.04,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 46,
    "name": "智利",
    "englishName": "Chile",
    "iso2": "CL",
    "flag": "🇨🇱",
    "latitude": -30,
    "longitude": -71,
    "gdpTrillionsUsd": 0.355346,
    "debtTrillionsUsd": 0.148535,
    "debtToGdpPercent": 41.8,
    "yearlyDebtDeltaTrillionsUsd": 0.0019,
    "populationMillions": 20.037,
    "debtPerCapitaUsd": 7413,
    "fiscalBalancePercentGdp": -2.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.1,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 47,
    "name": "葡萄牙",
    "englishName": "Portugal",
    "iso2": "PT",
    "flag": "🇵🇹",
    "latitude": 39.5,
    "longitude": -8,
    "gdpTrillionsUsd": 0.346412,
    "debtTrillionsUsd": 0.311424,
    "debtToGdpPercent": 89.9,
    "yearlyDebtDeltaTrillionsUsd": 0.0019,
    "populationMillions": 10.77,
    "debtPerCapitaUsd": 28916,
    "fiscalBalancePercentGdp": 0.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.21,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.04,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 48,
    "name": "秘鲁",
    "englishName": "Peru",
    "iso2": "PE",
    "flag": "🇵🇪",
    "latitude": -10,
    "longitude": -76,
    "gdpTrillionsUsd": 0.341025,
    "debtTrillionsUsd": 0.10299,
    "debtToGdpPercent": 30.2,
    "yearlyDebtDeltaTrillionsUsd": 0.0011,
    "populationMillions": 34.409,
    "debtPerCapitaUsd": 2993,
    "fiscalBalancePercentGdp": -2.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.08,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 49,
    "name": "芬兰",
    "englishName": "Finland",
    "iso2": "FI",
    "flag": "🇫🇮",
    "latitude": 64,
    "longitude": 26,
    "gdpTrillionsUsd": 0.31686,
    "debtTrillionsUsd": 0.282956,
    "debtToGdpPercent": 89.3,
    "yearlyDebtDeltaTrillionsUsd": 0.005,
    "populationMillions": 5.612,
    "debtPerCapitaUsd": 50420,
    "fiscalBalancePercentGdp": -3.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.19,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.04,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 50,
    "name": "哈萨克斯坦",
    "englishName": "Kazakhstan",
    "iso2": "KZ",
    "flag": "🇰🇿",
    "latitude": 48,
    "longitude": 68,
    "gdpTrillionsUsd": 0.302746,
    "debtTrillionsUsd": 0.074476,
    "debtToGdpPercent": 24.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 20.38,
    "debtPerCapitaUsd": 3654,
    "fiscalBalancePercentGdp": -3.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.05,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 51,
    "name": "尼日利亚",
    "englishName": "Nigeria",
    "iso2": "NG",
    "flag": "🇳🇬",
    "latitude": 10,
    "longitude": 8,
    "gdpTrillionsUsd": 0.290491,
    "debtTrillionsUsd": 0.103124,
    "debtToGdpPercent": 35.5,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 237.577,
    "debtPerCapitaUsd": 434,
    "fiscalBalancePercentGdp": -1.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.07,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 52,
    "name": "阿尔及利亚",
    "englishName": "Algeria",
    "iso2": "DZ",
    "flag": "🇩🇿",
    "latitude": 28,
    "longitude": 3,
    "gdpTrillionsUsd": 0.285724,
    "debtTrillionsUsd": 0.154577,
    "debtToGdpPercent": 54.1,
    "yearlyDebtDeltaTrillionsUsd": 0.0072,
    "populationMillions": 47.251,
    "debtPerCapitaUsd": 3271,
    "fiscalBalancePercentGdp": -10.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.11,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 53,
    "name": "希腊",
    "englishName": "Greece",
    "iso2": "GR",
    "flag": "🇬🇷",
    "latitude": 39,
    "longitude": 22,
    "gdpTrillionsUsd": 0.280476,
    "debtTrillionsUsd": 0.408654,
    "debtToGdpPercent": 145.7,
    "yearlyDebtDeltaTrillionsUsd": 0.0025,
    "populationMillions": 10.372,
    "debtPerCapitaUsd": 39400,
    "fiscalBalancePercentGdp": 1.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 76,
        "amountTrillionsUsd": 0.31,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.03,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.03,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 8,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 54,
    "name": "伊拉克",
    "englishName": "Iraq",
    "iso2": "IQ",
    "flag": "🇮🇶",
    "latitude": 33,
    "longitude": 44,
    "gdpTrillionsUsd": 0.264167,
    "debtTrillionsUsd": 0.142386,
    "debtToGdpPercent": 53.9,
    "yearlyDebtDeltaTrillionsUsd": 0.0041,
    "populationMillions": 45.521,
    "debtPerCapitaUsd": 3128,
    "fiscalBalancePercentGdp": -6.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.1,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 55,
    "name": "新西兰",
    "englishName": "New Zealand",
    "iso2": "NZ",
    "flag": "🇳🇿",
    "latitude": -41,
    "longitude": 174,
    "gdpTrillionsUsd": 0.258832,
    "debtTrillionsUsd": 0.141581,
    "debtToGdpPercent": 54.7,
    "yearlyDebtDeltaTrillionsUsd": 0.0025,
    "populationMillions": 5.324,
    "debtPerCapitaUsd": 26593,
    "fiscalBalancePercentGdp": -3.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.1,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 56,
    "name": "匈牙利",
    "englishName": "Hungary",
    "iso2": "HU",
    "flag": "🇭🇺",
    "latitude": 47,
    "longitude": 20,
    "gdpTrillionsUsd": 0.246891,
    "debtTrillionsUsd": 0.185662,
    "debtToGdpPercent": 75.2,
    "yearlyDebtDeltaTrillionsUsd": 0.004,
    "populationMillions": 9.56,
    "debtPerCapitaUsd": 19421,
    "fiscalBalancePercentGdp": -4.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.13,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.03,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 57,
    "name": "卡塔尔",
    "englishName": "Qatar",
    "iso2": "QA",
    "flag": "🇶🇦",
    "latitude": 25.5,
    "longitude": 51.25,
    "gdpTrillionsUsd": 0.221229,
    "debtTrillionsUsd": 0.091589,
    "debtToGdpPercent": 41.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 3.175,
    "debtPerCapitaUsd": 28847,
    "fiscalBalancePercentGdp": -1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.06,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 58,
    "name": "乌克兰",
    "englishName": "Ukraine",
    "iso2": "UA",
    "flag": "🇺🇦",
    "latitude": 49,
    "longitude": 32,
    "gdpTrillionsUsd": 0.212927,
    "debtTrillionsUsd": 0.231452,
    "debtToGdpPercent": 108.7,
    "yearlyDebtDeltaTrillionsUsd": 0.0245,
    "populationMillions": 32.762,
    "debtPerCapitaUsd": 7065,
    "fiscalBalancePercentGdp": -23.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.16,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.03,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.03,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 59,
    "name": "摩洛哥",
    "englishName": "Morocco",
    "iso2": "MA",
    "flag": "🇲🇦",
    "latitude": 32,
    "longitude": -5,
    "gdpTrillionsUsd": 0.182587,
    "debtTrillionsUsd": 0.122516,
    "debtToGdpPercent": 67.1,
    "yearlyDebtDeltaTrillionsUsd": 0.0019,
    "populationMillions": 37.712,
    "debtPerCapitaUsd": 3249,
    "fiscalBalancePercentGdp": -3.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.08,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 60,
    "name": "科威特",
    "englishName": "Kuwait",
    "iso2": "KW",
    "flag": "🇰🇼",
    "latitude": 29.5,
    "longitude": 45.75,
    "gdpTrillionsUsd": 0.157835,
    "debtTrillionsUsd": 0.023044,
    "debtToGdpPercent": 14.6,
    "yearlyDebtDeltaTrillionsUsd": 0.003,
    "populationMillions": 5.112,
    "debtPerCapitaUsd": 4508,
    "fiscalBalancePercentGdp": 28.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 61,
    "name": "斯洛伐克",
    "englishName": "Slovak Republic",
    "iso2": "SK",
    "flag": "🇸🇰",
    "latitude": 48.6667,
    "longitude": 19.5,
    "gdpTrillionsUsd": 0.154442,
    "debtTrillionsUsd": 0.095136,
    "debtToGdpPercent": 61.6,
    "yearlyDebtDeltaTrillionsUsd": 0.0022,
    "populationMillions": 5.419,
    "debtPerCapitaUsd": 17556,
    "fiscalBalancePercentGdp": -5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.06,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 62,
    "name": "乌兹别克斯坦",
    "englishName": "Uzbekistan",
    "iso2": "UZ",
    "flag": "🇺🇿",
    "latitude": 41,
    "longitude": 64,
    "gdpTrillionsUsd": 0.147069,
    "debtTrillionsUsd": 0.042062,
    "debtToGdpPercent": 28.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 38.237,
    "debtPerCapitaUsd": 1100,
    "fiscalBalancePercentGdp": -1.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.03,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 63,
    "name": "安哥拉",
    "englishName": "Angola",
    "iso2": "AO",
    "flag": "🇦🇴",
    "latitude": -12.5,
    "longitude": 18.5,
    "gdpTrillionsUsd": 0.141728,
    "debtTrillionsUsd": 0.072706,
    "debtToGdpPercent": 51.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0014,
    "populationMillions": 39.212,
    "debtPerCapitaUsd": 1854,
    "fiscalBalancePercentGdp": -4.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.05,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 64,
    "name": "肯尼亚",
    "englishName": "Kenya",
    "iso2": "KE",
    "flag": "🇰🇪",
    "latitude": 1,
    "longitude": 38,
    "gdpTrillionsUsd": 0.136455,
    "debtTrillionsUsd": 0.094563,
    "debtToGdpPercent": 69.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0028,
    "populationMillions": 53.354,
    "debtPerCapitaUsd": 1772,
    "fiscalBalancePercentGdp": -6.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.06,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 65,
    "name": "保加利亚",
    "englishName": "Bulgaria",
    "iso2": "BG",
    "flag": "🇧🇬",
    "latitude": 43,
    "longitude": 25,
    "gdpTrillionsUsd": 0.131024,
    "debtTrillionsUsd": 0.035508,
    "debtToGdpPercent": 27.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 6.263,
    "debtPerCapitaUsd": 5669,
    "fiscalBalancePercentGdp": -3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.03,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 66,
    "name": "厄瓜多尔",
    "englishName": "Ecuador",
    "iso2": "EC",
    "flag": "🇪🇨",
    "latitude": -2,
    "longitude": -77.5,
    "gdpTrillionsUsd": 0.130321,
    "debtTrillionsUsd": 0.070895,
    "debtToGdpPercent": 54.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 18.104,
    "debtPerCapitaUsd": 3916,
    "fiscalBalancePercentGdp": -2.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.05,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 67,
    "name": "多明尼加",
    "englishName": "Dominican Republic",
    "iso2": "DO",
    "flag": "🇩🇴",
    "latitude": 19,
    "longitude": -70.6667,
    "gdpTrillionsUsd": 0.127895,
    "debtTrillionsUsd": 0.075458,
    "debtToGdpPercent": 59,
    "yearlyDebtDeltaTrillionsUsd": 0.0012,
    "populationMillions": 10.885,
    "debtPerCapitaUsd": 6932,
    "fiscalBalancePercentGdp": -3.6,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.05,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 68,
    "name": "波多黎各",
    "englishName": "Puerto Rico",
    "iso2": "PR",
    "flag": "🇵🇷",
    "latitude": 18.25,
    "longitude": -66.5,
    "gdpTrillionsUsd": 0.126525,
    "debtTrillionsUsd": 0.022775,
    "debtToGdpPercent": 18,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 3.175,
    "debtPerCapitaUsd": 7173,
    "fiscalBalancePercentGdp": -0.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 69,
    "name": "危地马拉",
    "englishName": "Guatemala",
    "iso2": "GT",
    "flag": "🇬🇹",
    "latitude": 15.5,
    "longitude": -90.25,
    "gdpTrillionsUsd": 0.121113,
    "debtTrillionsUsd": 0.032943,
    "debtToGdpPercent": 27.2,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 18.664,
    "debtPerCapitaUsd": 1765,
    "fiscalBalancePercentGdp": -1.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 70,
    "name": "加纳",
    "englishName": "Ghana",
    "iso2": "GH",
    "flag": "🇬🇭",
    "latitude": 8,
    "longitude": -2,
    "gdpTrillionsUsd": 0.114708,
    "debtTrillionsUsd": 0.055978,
    "debtToGdpPercent": 48.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 35.064,
    "debtPerCapitaUsd": 1596,
    "fiscalBalancePercentGdp": -1.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.04,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 71,
    "name": "埃塞俄比亚",
    "englishName": "Ethiopia",
    "iso2": "ET",
    "flag": "🇪🇹",
    "latitude": 8,
    "longitude": 38,
    "gdpTrillionsUsd": 0.109109,
    "debtTrillionsUsd": 0.047026,
    "debtToGdpPercent": 43.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 110.6,
    "debtPerCapitaUsd": 425,
    "fiscalBalancePercentGdp": -1.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.03,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 72,
    "name": "阿曼",
    "englishName": "Oman",
    "iso2": "OM",
    "flag": "🇴🇲",
    "latitude": 21,
    "longitude": 57,
    "gdpTrillionsUsd": 0.106127,
    "debtTrillionsUsd": 0.037993,
    "debtToGdpPercent": 35.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 5.307,
    "debtPerCapitaUsd": 7159,
    "fiscalBalancePercentGdp": 1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.03,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 73,
    "name": "克罗地亚",
    "englishName": "Croatia",
    "iso2": "HR",
    "flag": "🇭🇷",
    "latitude": 45.1667,
    "longitude": 15.5,
    "gdpTrillionsUsd": 0.106055,
    "debtTrillionsUsd": 0.059285,
    "debtToGdpPercent": 55.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 3.874,
    "debtPerCapitaUsd": 15303,
    "fiscalBalancePercentGdp": -2.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.04,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 74,
    "name": "哥斯达黎加",
    "englishName": "Costa Rica",
    "iso2": "CR",
    "flag": "🇨🇷",
    "latitude": 10,
    "longitude": -84,
    "gdpTrillionsUsd": 0.102902,
    "debtTrillionsUsd": 0.062153,
    "debtToGdpPercent": 60.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 5.37,
    "debtPerCapitaUsd": 11574,
    "fiscalBalancePercentGdp": -3.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.04,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 75,
    "name": "卢森堡",
    "englishName": "Luxembourg",
    "iso2": "LU",
    "flag": "🇱🇺",
    "latitude": 49.75,
    "longitude": 6.1667,
    "gdpTrillionsUsd": 0.1011,
    "debtTrillionsUsd": 0.027297,
    "debtToGdpPercent": 27,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.682,
    "debtPerCapitaUsd": 40025,
    "fiscalBalancePercentGdp": -1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 76,
    "name": "塞尔维亚",
    "englishName": "Serbia",
    "iso2": "RS",
    "flag": "🇷🇸",
    "latitude": 44,
    "longitude": 21,
    "gdpTrillionsUsd": 0.099953,
    "debtTrillionsUsd": 0.04238,
    "debtToGdpPercent": 42.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 6.54,
    "debtPerCapitaUsd": 6480,
    "fiscalBalancePercentGdp": -2.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.03,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 77,
    "name": "委内瑞拉",
    "englishName": "Venezuela",
    "iso2": "VE",
    "flag": "🇻🇪",
    "latitude": 8,
    "longitude": -66,
    "gdpTrillionsUsd": 0.099661,
    "debtTrillionsUsd": 0.307654,
    "debtToGdpPercent": 308.7,
    "yearlyDebtDeltaTrillionsUsd": 0.0081,
    "populationMillions": 26.674,
    "debtPerCapitaUsd": 11534,
    "fiscalBalancePercentGdp": -5.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 76,
        "amountTrillionsUsd": 0.23,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.02,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.02,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 8,
        "amountTrillionsUsd": 0.02,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 78,
    "name": "科特迪瓦",
    "englishName": "Côte d'Ivoire",
    "iso2": "CI",
    "flag": "🇨🇮",
    "latitude": 8,
    "longitude": -5,
    "gdpTrillionsUsd": 0.098885,
    "debtTrillionsUsd": 0.055672,
    "debtToGdpPercent": 56.3,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 32.897,
    "debtPerCapitaUsd": 1692,
    "fiscalBalancePercentGdp": -3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.04,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 79,
    "name": "立陶宛",
    "englishName": "Lithuania",
    "iso2": "LT",
    "flag": "🇱🇹",
    "latitude": 56,
    "longitude": 24,
    "gdpTrillionsUsd": 0.094927,
    "debtTrillionsUsd": 0.037781,
    "debtToGdpPercent": 39.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 2.891,
    "debtPerCapitaUsd": 13068,
    "fiscalBalancePercentGdp": -2.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.03,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 80,
    "name": "民主刚果",
    "englishName": "Congo",
    "iso2": "CD",
    "flag": "🇨🇩",
    "latitude": 0,
    "longitude": 25,
    "gdpTrillionsUsd": 0.092833,
    "debtTrillionsUsd": 0.018752,
    "debtToGdpPercent": 20.2,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 106.552,
    "debtPerCapitaUsd": 176,
    "fiscalBalancePercentGdp": -2.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 81,
    "name": "白俄罗斯",
    "englishName": "Belarus",
    "iso2": "BY",
    "flag": "🇧🇾",
    "latitude": 53,
    "longitude": 28,
    "gdpTrillionsUsd": 0.092766,
    "debtTrillionsUsd": 0.030706,
    "debtToGdpPercent": 33.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 9.087,
    "debtPerCapitaUsd": 3379,
    "fiscalBalancePercentGdp": 0.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 82,
    "name": "巴拿马",
    "englishName": "Panama",
    "iso2": "PA",
    "flag": "🇵🇦",
    "latitude": 9,
    "longitude": -80,
    "gdpTrillionsUsd": 0.090463,
    "debtTrillionsUsd": 0.051202,
    "debtToGdpPercent": 56.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 4.566,
    "debtPerCapitaUsd": 11214,
    "fiscalBalancePercentGdp": -3.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.03,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 83,
    "name": "坦桑尼亚",
    "englishName": "Tanzania",
    "iso2": "TZ",
    "flag": "🇹🇿",
    "latitude": -6,
    "longitude": 35,
    "gdpTrillionsUsd": 0.087344,
    "debtTrillionsUsd": 0.04341,
    "debtToGdpPercent": 49.7,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 67.619,
    "debtPerCapitaUsd": 642,
    "fiscalBalancePercentGdp": -3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.03,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 84,
    "name": "乌拉圭",
    "englishName": "Uruguay",
    "iso2": "UY",
    "flag": "🇺🇾",
    "latitude": -33,
    "longitude": -56,
    "gdpTrillionsUsd": 0.085575,
    "debtTrillionsUsd": 0.056223,
    "debtToGdpPercent": 65.7,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 3.486,
    "debtPerCapitaUsd": 16128,
    "fiscalBalancePercentGdp": -3.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.04,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 85,
    "name": "缅甸",
    "englishName": "Myanmar",
    "iso2": "MM",
    "flag": "🇲🇲",
    "latitude": 22,
    "longitude": 98,
    "gdpTrillionsUsd": 0.0824,
    "debtTrillionsUsd": 0.042766,
    "debtToGdpPercent": 51.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 54.851,
    "debtPerCapitaUsd": 780,
    "fiscalBalancePercentGdp": -4.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.03,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 86,
    "name": "斯洛文尼亚",
    "englishName": "Slovenia",
    "iso2": "SI",
    "flag": "🇸🇮",
    "latitude": 46.1167,
    "longitude": 14.8167,
    "gdpTrillionsUsd": 0.079603,
    "debtTrillionsUsd": 0.052458,
    "debtToGdpPercent": 65.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 2.131,
    "debtPerCapitaUsd": 24617,
    "fiscalBalancePercentGdp": -2.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.04,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 87,
    "name": "土库曼斯坦",
    "englishName": "Turkmenistan",
    "iso2": "TM",
    "flag": "🇹🇲",
    "latitude": 40,
    "longitude": 60,
    "gdpTrillionsUsd": 0.077398,
    "debtTrillionsUsd": 0.002941,
    "debtToGdpPercent": 3.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 6.68,
    "debtPerCapitaUsd": 440,
    "fiscalBalancePercentGdp": 0.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 88,
    "name": "阿塞拜疆",
    "englishName": "Azerbaijan",
    "iso2": "AZ",
    "flag": "🇦🇿",
    "latitude": 40.5,
    "longitude": 47.5,
    "gdpTrillionsUsd": 0.075938,
    "debtTrillionsUsd": 0.015264,
    "debtToGdpPercent": 20.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 10.372,
    "debtPerCapitaUsd": 1472,
    "fiscalBalancePercentGdp": 2.6,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 89,
    "name": "乌干达",
    "englishName": "Uganda",
    "iso2": "UG",
    "flag": "🇺🇬",
    "latitude": 1,
    "longitude": 32,
    "gdpTrillionsUsd": 0.066014,
    "debtTrillionsUsd": 0.03578,
    "debtToGdpPercent": 54.2,
    "yearlyDebtDeltaTrillionsUsd": 0.0012,
    "populationMillions": 48.022,
    "debtPerCapitaUsd": 745,
    "fiscalBalancePercentGdp": -7.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 90,
    "name": "玻利维亚",
    "englishName": "Bolivia",
    "iso2": "BO",
    "flag": "🇧🇴",
    "latitude": -17,
    "longitude": -65,
    "gdpTrillionsUsd": 0.06425,
    "debtTrillionsUsd": 0.054484,
    "debtToGdpPercent": 84.8,
    "yearlyDebtDeltaTrillionsUsd": 0.0029,
    "populationMillions": 12.582,
    "debtPerCapitaUsd": 4330,
    "fiscalBalancePercentGdp": -11.6,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.04,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 91,
    "name": "约旦",
    "englishName": "Jordan",
    "iso2": "JO",
    "flag": "🇯🇴",
    "latitude": 31,
    "longitude": 36,
    "gdpTrillionsUsd": 0.061692,
    "debtTrillionsUsd": 0.051081,
    "debtToGdpPercent": 82.8,
    "yearlyDebtDeltaTrillionsUsd": 0.0015,
    "populationMillions": 11.521,
    "debtPerCapitaUsd": 4434,
    "fiscalBalancePercentGdp": -6.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.03,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 92,
    "name": "喀麦隆",
    "englishName": "Cameroon",
    "iso2": "CM",
    "flag": "🇨🇲",
    "latitude": 6,
    "longitude": 12,
    "gdpTrillionsUsd": 0.059282,
    "debtTrillionsUsd": 0.02395,
    "debtToGdpPercent": 40.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 29.879,
    "debtPerCapitaUsd": 802,
    "fiscalBalancePercentGdp": -2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 93,
    "name": "突尼斯",
    "englishName": "Tunisia",
    "iso2": "TN",
    "flag": "🇹🇳",
    "latitude": 34,
    "longitude": 9,
    "gdpTrillionsUsd": 0.057589,
    "debtTrillionsUsd": 0.04682,
    "debtToGdpPercent": 81.3,
    "yearlyDebtDeltaTrillionsUsd": 0.0011,
    "populationMillions": 12.349,
    "debtPerCapitaUsd": 3791,
    "fiscalBalancePercentGdp": -5.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.03,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 94,
    "name": "津巴布韦",
    "englishName": "Zimbabwe",
    "iso2": "ZW",
    "flag": "🇿🇼",
    "latitude": -20,
    "longitude": 30,
    "gdpTrillionsUsd": 0.053474,
    "debtTrillionsUsd": 0.023422,
    "debtToGdpPercent": 43.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 17.36,
    "debtPerCapitaUsd": 1349,
    "fiscalBalancePercentGdp": 0.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 95,
    "name": "巴拉圭",
    "englishName": "Paraguay",
    "iso2": "PY",
    "flag": "🇵🇾",
    "latitude": -23,
    "longitude": -58,
    "gdpTrillionsUsd": 0.049358,
    "debtTrillionsUsd": 0.018805,
    "debtToGdpPercent": 38.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 6.417,
    "debtPerCapitaUsd": 2931,
    "fiscalBalancePercentGdp": -1.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 96,
    "name": "柬埔寨",
    "englishName": "Cambodia",
    "iso2": "KH",
    "flag": "🇰🇭",
    "latitude": 13,
    "longitude": 105,
    "gdpTrillionsUsd": 0.049288,
    "debtTrillionsUsd": 0.013061,
    "debtToGdpPercent": 26.5,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 17.848,
    "debtPerCapitaUsd": 732,
    "fiscalBalancePercentGdp": -1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 97,
    "name": "拉脱维亚",
    "englishName": "Latvia",
    "iso2": "LV",
    "flag": "🇱🇻",
    "latitude": 57,
    "longitude": 25,
    "gdpTrillionsUsd": 0.048591,
    "debtTrillionsUsd": 0.022789,
    "debtToGdpPercent": 46.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 1.861,
    "debtPerCapitaUsd": 12246,
    "fiscalBalancePercentGdp": -4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 98,
    "name": "巴林",
    "englishName": "Bahrain",
    "iso2": "BH",
    "flag": "🇧🇭",
    "latitude": 26,
    "longitude": 50.55,
    "gdpTrillionsUsd": 0.047538,
    "debtTrillionsUsd": 0.070166,
    "debtToGdpPercent": 147.6,
    "yearlyDebtDeltaTrillionsUsd": 0.0041,
    "populationMillions": 1.62,
    "debtPerCapitaUsd": 43312,
    "fiscalBalancePercentGdp": -13,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 76,
        "amountTrillionsUsd": 0.05,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 8,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 99,
    "name": "爱沙尼亚",
    "englishName": "Estonia",
    "iso2": "EE",
    "flag": "🇪🇪",
    "latitude": 59,
    "longitude": 26,
    "gdpTrillionsUsd": 0.047004,
    "debtTrillionsUsd": 0.011375,
    "debtToGdpPercent": 24.2,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 1.369,
    "debtPerCapitaUsd": 8309,
    "fiscalBalancePercentGdp": -1.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 100,
    "name": "尼泊尔",
    "englishName": "Nepal",
    "iso2": "NP",
    "flag": "🇳🇵",
    "latitude": 28,
    "longitude": 84,
    "gdpTrillionsUsd": 0.04481,
    "debtTrillionsUsd": 0.021554,
    "debtToGdpPercent": 48.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 29.645,
    "debtPerCapitaUsd": 727,
    "fiscalBalancePercentGdp": -1.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 101,
    "name": "塞浦路斯",
    "englishName": "Cyprus",
    "iso2": "CY",
    "flag": "🇨🇾",
    "latitude": 35,
    "longitude": 33,
    "gdpTrillionsUsd": 0.041019,
    "debtTrillionsUsd": 0.022684,
    "debtToGdpPercent": 55.3,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.983,
    "debtPerCapitaUsd": 23076,
    "fiscalBalancePercentGdp": 3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 102,
    "name": "苏丹",
    "englishName": "Sudan",
    "iso2": "SD",
    "flag": "🇸🇩",
    "latitude": 15,
    "longitude": 30,
    "gdpTrillionsUsd": 0.039718,
    "debtTrillionsUsd": 0.074511,
    "debtToGdpPercent": 187.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 50.418,
    "debtPerCapitaUsd": 1478,
    "fiscalBalancePercentGdp": -3.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 76,
        "amountTrillionsUsd": 0.06,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0.01,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0.01,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 8,
        "amountTrillionsUsd": 0.01,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 103,
    "name": "洪都拉斯",
    "englishName": "Honduras",
    "iso2": "HN",
    "flag": "🇭🇳",
    "latitude": 15,
    "longitude": -86.5,
    "gdpTrillionsUsd": 0.039694,
    "debtTrillionsUsd": 0.016354,
    "debtToGdpPercent": 41.2,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 11.006,
    "debtPerCapitaUsd": 1486,
    "fiscalBalancePercentGdp": -0.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 104,
    "name": "冰岛",
    "englishName": "Iceland",
    "iso2": "IS",
    "flag": "🇮🇸",
    "latitude": 65,
    "longitude": -18,
    "gdpTrillionsUsd": 0.038583,
    "debtTrillionsUsd": 0.021645,
    "debtToGdpPercent": 56.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.389,
    "debtPerCapitaUsd": 55643,
    "fiscalBalancePercentGdp": -2.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 105,
    "name": "格鲁吉亚",
    "englishName": "Georgia",
    "iso2": "GE",
    "flag": "🇬🇪",
    "latitude": 42,
    "longitude": 43.5,
    "gdpTrillionsUsd": 0.038216,
    "debtTrillionsUsd": 0.013108,
    "debtToGdpPercent": 34.3,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 3.694,
    "debtPerCapitaUsd": 3548,
    "fiscalBalancePercentGdp": -1.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 106,
    "name": "萨尔瓦多",
    "englishName": "El Salvador",
    "iso2": "SV",
    "flag": "🇸🇻",
    "latitude": 13.8333,
    "longitude": -88.9167,
    "gdpTrillionsUsd": 0.037268,
    "debtTrillionsUsd": 0.032498,
    "debtToGdpPercent": 87.2,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 6.383,
    "debtPerCapitaUsd": 5091,
    "fiscalBalancePercentGdp": -2.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 107,
    "name": "塞内加尔",
    "englishName": "Senegal",
    "iso2": "SN",
    "flag": "🇸🇳",
    "latitude": 14,
    "longitude": -14,
    "gdpTrillionsUsd": 0.037116,
    "debtTrillionsUsd": 0.048325,
    "debtToGdpPercent": 130.2,
    "yearlyDebtDeltaTrillionsUsd": 0.0017,
    "populationMillions": 19.173,
    "debtPerCapitaUsd": 2520,
    "fiscalBalancePercentGdp": -7.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 76,
        "amountTrillionsUsd": 0.04,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 108,
    "name": "黎巴嫩",
    "englishName": "Lebanon",
    "iso2": "LB",
    "flag": "🇱🇧",
    "latitude": 33.8333,
    "longitude": 35.8333,
    "gdpTrillionsUsd": 0.034497,
    "debtTrillionsUsd": 0.048089,
    "debtToGdpPercent": 139.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 5.354,
    "debtPerCapitaUsd": 8982,
    "fiscalBalancePercentGdp": 3.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 76,
        "amountTrillionsUsd": 0.04,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 109,
    "name": "波斯尼亚和黑塞哥维那",
    "englishName": "Bosnia and Herzegovina",
    "iso2": "BA",
    "flag": "🇧🇦",
    "latitude": 44,
    "longitude": 18,
    "gdpTrillionsUsd": 0.032962,
    "debtTrillionsUsd": 0.009856,
    "debtToGdpPercent": 29.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 3.445,
    "debtPerCapitaUsd": 2861,
    "fiscalBalancePercentGdp": -2.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 110,
    "name": "巴布亚新几内亚",
    "englishName": "Papua New Guinea",
    "iso2": "PG",
    "flag": "🇵🇬",
    "latitude": -6,
    "longitude": 147,
    "gdpTrillionsUsd": 0.032491,
    "debtTrillionsUsd": 0.016928,
    "debtToGdpPercent": 52.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 12.803,
    "debtPerCapitaUsd": 1322,
    "fiscalBalancePercentGdp": -2.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 111,
    "name": "海地",
    "englishName": "Haiti",
    "iso2": "HT",
    "flag": "🇭🇹",
    "latitude": 19,
    "longitude": -72.4167,
    "gdpTrillionsUsd": 0.032102,
    "debtTrillionsUsd": 0.003949,
    "debtToGdpPercent": 12.3,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 12.557,
    "debtPerCapitaUsd": 314,
    "fiscalBalancePercentGdp": -0.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 112,
    "name": "阿尔巴尼亚",
    "englishName": "Albania",
    "iso2": "AL",
    "flag": "🇦🇱",
    "latitude": 41,
    "longitude": 20,
    "gdpTrillionsUsd": 0.030279,
    "debtTrillionsUsd": 0.015927,
    "debtToGdpPercent": 52.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 2.695,
    "debtPerCapitaUsd": 5910,
    "fiscalBalancePercentGdp": -1.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 113,
    "name": "马里",
    "englishName": "Mali",
    "iso2": "ML",
    "flag": "🇲🇱",
    "latitude": 17,
    "longitude": -4,
    "gdpTrillionsUsd": 0.03005,
    "debtTrillionsUsd": 0.012591,
    "debtToGdpPercent": 41.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 25.247,
    "debtPerCapitaUsd": 499,
    "fiscalBalancePercentGdp": -1.6,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 114,
    "name": "亚美尼亚",
    "englishName": "Armenia",
    "iso2": "AM",
    "flag": "🇦🇲",
    "latitude": 40,
    "longitude": 45,
    "gdpTrillionsUsd": 0.029243,
    "debtTrillionsUsd": 0.014329,
    "debtToGdpPercent": 49,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 3.071,
    "debtPerCapitaUsd": 4666,
    "fiscalBalancePercentGdp": -3.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 115,
    "name": "赞比亚",
    "englishName": "Zambia",
    "iso2": "ZM",
    "flag": "🇿🇲",
    "latitude": -15,
    "longitude": 30,
    "gdpTrillionsUsd": 0.02888,
    "debtTrillionsUsd": 0.024837,
    "debtToGdpPercent": 86,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 21.914,
    "debtPerCapitaUsd": 1133,
    "fiscalBalancePercentGdp": -3.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 116,
    "name": "马耳他",
    "englishName": "Malta",
    "iso2": "MT",
    "flag": "🇲🇹",
    "latitude": 35.8333,
    "longitude": 14.5833,
    "gdpTrillionsUsd": 0.027756,
    "debtTrillionsUsd": 0.01299,
    "debtToGdpPercent": 46.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.563,
    "debtPerCapitaUsd": 23072,
    "fiscalBalancePercentGdp": -3.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 117,
    "name": "几内亚",
    "englishName": "Guinea",
    "iso2": "GN",
    "flag": "🇬🇳",
    "latitude": 11,
    "longitude": -10,
    "gdpTrillionsUsd": 0.027215,
    "debtTrillionsUsd": 0.01309,
    "debtToGdpPercent": 48.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 15.803,
    "debtPerCapitaUsd": 828,
    "fiscalBalancePercentGdp": -7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 118,
    "name": "布基纳法索",
    "englishName": "Burkina Faso",
    "iso2": "BF",
    "flag": "🇧🇫",
    "latitude": 13,
    "longitude": -2,
    "gdpTrillionsUsd": 0.02714,
    "debtTrillionsUsd": 0.014113,
    "debtToGdpPercent": 52,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 24.095,
    "debtPerCapitaUsd": 586,
    "fiscalBalancePercentGdp": -3.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 119,
    "name": "圭亚那",
    "englishName": "Guyana",
    "iso2": "GY",
    "flag": "🇬🇾",
    "latitude": 5,
    "longitude": -59,
    "gdpTrillionsUsd": 0.027097,
    "debtTrillionsUsd": 0.00775,
    "debtToGdpPercent": 28.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 1.004,
    "debtPerCapitaUsd": 7719,
    "fiscalBalancePercentGdp": -5.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 120,
    "name": "特立尼达和多巴哥",
    "englishName": "Trinidad and Tobago",
    "iso2": "TT",
    "flag": "🇹🇹",
    "latitude": 11,
    "longitude": -61,
    "gdpTrillionsUsd": 0.025932,
    "debtTrillionsUsd": 0.021835,
    "debtToGdpPercent": 84.2,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 1.435,
    "debtPerCapitaUsd": 15216,
    "fiscalBalancePercentGdp": -5.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 121,
    "name": "蒙古",
    "englishName": "Mongolia",
    "iso2": "MN",
    "flag": "🇲🇳",
    "latitude": 46,
    "longitude": 105,
    "gdpTrillionsUsd": 0.02537,
    "debtTrillionsUsd": 0.011442,
    "debtToGdpPercent": 45.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 3.584,
    "debtPerCapitaUsd": 3192,
    "fiscalBalancePercentGdp": 1.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 122,
    "name": "贝宁",
    "englishName": "Benin",
    "iso2": "BJ",
    "flag": "🇧🇯",
    "latitude": 9.5,
    "longitude": 2.25,
    "gdpTrillionsUsd": 0.024382,
    "debtTrillionsUsd": 0.013971,
    "debtToGdpPercent": 57.3,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 14.923,
    "debtPerCapitaUsd": 936,
    "fiscalBalancePercentGdp": -2.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 123,
    "name": "莫桑比克",
    "englishName": "Mozambique",
    "iso2": "MZ",
    "flag": "🇲🇿",
    "latitude": -18.25,
    "longitude": 35,
    "gdpTrillionsUsd": 0.022338,
    "debtTrillionsUsd": 0.022896,
    "debtToGdpPercent": 102.5,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 35.835,
    "debtPerCapitaUsd": 639,
    "fiscalBalancePercentGdp": -4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.02,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 124,
    "name": "牙买加",
    "englishName": "Jamaica",
    "iso2": "JM",
    "flag": "🇯🇲",
    "latitude": 18.25,
    "longitude": -77.5,
    "gdpTrillionsUsd": 0.022313,
    "debtTrillionsUsd": 0.015106,
    "debtToGdpPercent": 67.7,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 2.753,
    "debtPerCapitaUsd": 5487,
    "fiscalBalancePercentGdp": -3.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 125,
    "name": "尼加拉瓜",
    "englishName": "Nicaragua",
    "iso2": "NI",
    "flag": "🇳🇮",
    "latitude": 13,
    "longitude": -85,
    "gdpTrillionsUsd": 0.022237,
    "debtTrillionsUsd": 0.007738,
    "debtToGdpPercent": 34.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 6.664,
    "debtPerCapitaUsd": 1161,
    "fiscalBalancePercentGdp": 2.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 126,
    "name": "乍得",
    "englishName": "Chad",
    "iso2": "TD",
    "flag": "🇹🇩",
    "latitude": 15,
    "longitude": 19,
    "gdpTrillionsUsd": 0.022092,
    "debtTrillionsUsd": 0.006716,
    "debtToGdpPercent": 30.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 18.961,
    "debtPerCapitaUsd": 354,
    "fiscalBalancePercentGdp": -1.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 127,
    "name": "尼日尔",
    "englishName": "Niger",
    "iso2": "NE",
    "flag": "🇳🇪",
    "latitude": 16,
    "longitude": 8,
    "gdpTrillionsUsd": 0.021836,
    "debtTrillionsUsd": 0.009914,
    "debtToGdpPercent": 45.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 29.126,
    "debtPerCapitaUsd": 340,
    "fiscalBalancePercentGdp": -3.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 128,
    "name": "加蓬",
    "englishName": "Gabon",
    "iso2": "GA",
    "flag": "🇬🇦",
    "latitude": -1,
    "longitude": 11.75,
    "gdpTrillionsUsd": 0.021624,
    "debtTrillionsUsd": 0.017061,
    "debtToGdpPercent": 78.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 2.306,
    "debtPerCapitaUsd": 7399,
    "fiscalBalancePercentGdp": -8.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 129,
    "name": "吉尔吉斯斯坦",
    "englishName": "Kyrgyz Republic",
    "iso2": "KG",
    "flag": "🇰🇬",
    "latitude": 41,
    "longitude": 75,
    "gdpTrillionsUsd": 0.021567,
    "debtTrillionsUsd": 0.007764,
    "debtToGdpPercent": 36,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 7.227,
    "debtPerCapitaUsd": 1074,
    "fiscalBalancePercentGdp": -0.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 130,
    "name": "摩尔多瓦",
    "englishName": "Moldova",
    "iso2": "MD",
    "flag": "🇲🇩",
    "latitude": 47,
    "longitude": 29,
    "gdpTrillionsUsd": 0.020342,
    "debtTrillionsUsd": 0.007445,
    "debtToGdpPercent": 36.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 2.381,
    "debtPerCapitaUsd": 3127,
    "fiscalBalancePercentGdp": -3.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 131,
    "name": "阿富汗",
    "englishName": "Afghanistan",
    "iso2": "AF",
    "flag": "🇦🇫",
    "latitude": 33,
    "longitude": 65,
    "gdpTrillionsUsd": 0.019662,
    "debtTrillionsUsd": 0.001573,
    "debtToGdpPercent": 8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 43.844,
    "debtPerCapitaUsd": 36,
    "fiscalBalancePercentGdp": -0.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 132,
    "name": "马达加斯加",
    "englishName": "Madagascar",
    "iso2": "MG",
    "flag": "🇲🇬",
    "latitude": -20,
    "longitude": 47,
    "gdpTrillionsUsd": 0.019556,
    "debtTrillionsUsd": 0.009524,
    "debtToGdpPercent": 48.7,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 31.444,
    "debtPerCapitaUsd": 303,
    "fiscalBalancePercentGdp": -2.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 133,
    "name": "博茨瓦纳",
    "englishName": "Botswana",
    "iso2": "BW",
    "flag": "🇧🇼",
    "latitude": -22,
    "longitude": 24,
    "gdpTrillionsUsd": 0.019533,
    "debtTrillionsUsd": 0.00754,
    "debtToGdpPercent": 38.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 2.549,
    "debtPerCapitaUsd": 2958,
    "fiscalBalancePercentGdp": -7.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 134,
    "name": "北馬其頓",
    "englishName": "North Macedonia",
    "iso2": "MK",
    "flag": "🇲🇰",
    "latitude": 41.8333,
    "longitude": 22,
    "gdpTrillionsUsd": 0.019142,
    "debtTrillionsUsd": 0.01005,
    "debtToGdpPercent": 52.5,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 1.815,
    "debtPerCapitaUsd": 5537,
    "fiscalBalancePercentGdp": -4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 135,
    "name": "老挝",
    "englishName": "Lao P.D.R.",
    "iso2": "LA",
    "flag": "🇱🇦",
    "latitude": 18,
    "longitude": 105,
    "gdpTrillionsUsd": 0.017822,
    "debtTrillionsUsd": 0.014365,
    "debtToGdpPercent": 80.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 7.788,
    "debtPerCapitaUsd": 1844,
    "fiscalBalancePercentGdp": 1.6,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 136,
    "name": "塔吉克斯坦",
    "englishName": "Tajikistan",
    "iso2": "TJ",
    "flag": "🇹🇯",
    "latitude": 39,
    "longitude": 71,
    "gdpTrillionsUsd": 0.017542,
    "debtTrillionsUsd": 0.003789,
    "debtToGdpPercent": 21.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 10.36,
    "debtPerCapitaUsd": 366,
    "fiscalBalancePercentGdp": -1.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 137,
    "name": "巴哈马",
    "englishName": "Bahamas",
    "iso2": "BS",
    "flag": "🇧🇸",
    "latitude": 24.25,
    "longitude": -76,
    "gdpTrillionsUsd": 0.016508,
    "debtTrillionsUsd": 0.012183,
    "debtToGdpPercent": 73.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.413,
    "debtPerCapitaUsd": 29499,
    "fiscalBalancePercentGdp": -0.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 138,
    "name": "毛里求斯",
    "englishName": "Mauritius",
    "iso2": "MU",
    "flag": "🇲🇺",
    "latitude": -20.2833,
    "longitude": 57.55,
    "gdpTrillionsUsd": 0.016126,
    "debtTrillionsUsd": 0.013949,
    "debtToGdpPercent": 86.5,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 1.243,
    "debtPerCapitaUsd": 11222,
    "fiscalBalancePercentGdp": -3.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 139,
    "name": "卢旺达",
    "englishName": "Rwanda",
    "iso2": "RW",
    "flag": "🇷🇼",
    "latitude": -2,
    "longitude": 30,
    "gdpTrillionsUsd": 0.015973,
    "debtTrillionsUsd": 0.010319,
    "debtToGdpPercent": 64.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 14.162,
    "debtPerCapitaUsd": 729,
    "fiscalBalancePercentGdp": -4.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 140,
    "name": "文莱",
    "englishName": "Brunei Darussalam",
    "iso2": "BN",
    "flag": "🇧🇳",
    "latitude": 4.5,
    "longitude": 114.6667,
    "gdpTrillionsUsd": 0.015942,
    "debtTrillionsUsd": 0.000239,
    "debtToGdpPercent": 1.5,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.46,
    "debtPerCapitaUsd": 520,
    "fiscalBalancePercentGdp": -13.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 141,
    "name": "刚果",
    "englishName": "Congo, Republic of",
    "iso2": "CG",
    "flag": "🇨🇬",
    "latitude": -1,
    "longitude": 15,
    "gdpTrillionsUsd": 0.015592,
    "debtTrillionsUsd": 0.015093,
    "debtToGdpPercent": 96.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 6.486,
    "debtPerCapitaUsd": 2327,
    "fiscalBalancePercentGdp": 0.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 142,
    "name": "马拉维",
    "englishName": "Malawi",
    "iso2": "MW",
    "flag": "🇲🇼",
    "latitude": -13.5,
    "longitude": 34,
    "gdpTrillionsUsd": 0.015047,
    "debtTrillionsUsd": 0.011797,
    "debtToGdpPercent": 78.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 24.057,
    "debtPerCapitaUsd": 490,
    "fiscalBalancePercentGdp": -11.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 143,
    "name": "纳米比亚",
    "englishName": "Namibia",
    "iso2": "NA",
    "flag": "🇳🇦",
    "latitude": -22,
    "longitude": 17,
    "gdpTrillionsUsd": 0.014826,
    "debtTrillionsUsd": 0.010408,
    "debtToGdpPercent": 70.2,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 3.049,
    "debtPerCapitaUsd": 3414,
    "fiscalBalancePercentGdp": -6.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 144,
    "name": "赤道几内亚",
    "englishName": "Equatorial Guinea",
    "iso2": "GQ",
    "flag": "🇬🇶",
    "latitude": 2,
    "longitude": 10,
    "gdpTrillionsUsd": 0.012484,
    "debtTrillionsUsd": 0.005069,
    "debtToGdpPercent": 40.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 1.637,
    "debtPerCapitaUsd": 3096,
    "fiscalBalancePercentGdp": -2.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 145,
    "name": "科索沃",
    "englishName": "Kosovo",
    "iso2": "XK",
    "flag": "🇽🇰",
    "latitude": 42.6,
    "longitude": 20.9,
    "gdpTrillionsUsd": 0.012449,
    "debtTrillionsUsd": 0.002179,
    "debtToGdpPercent": 17.5,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 1.576,
    "debtPerCapitaUsd": 1382,
    "fiscalBalancePercentGdp": -0.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 146,
    "name": "毛里塔尼亚",
    "englishName": "Mauritania",
    "iso2": "MR",
    "flag": "🇲🇷",
    "latitude": 20,
    "longitude": -12,
    "gdpTrillionsUsd": 0.012289,
    "debtTrillionsUsd": 0.004928,
    "debtToGdpPercent": 40.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 4.629,
    "debtPerCapitaUsd": 1065,
    "fiscalBalancePercentGdp": -0.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 147,
    "name": "多哥",
    "englishName": "Togo",
    "iso2": "TG",
    "flag": "🇹🇬",
    "latitude": 8,
    "longitude": 1.1667,
    "gdpTrillionsUsd": 0.011899,
    "debtTrillionsUsd": 0.007496,
    "debtToGdpPercent": 63,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 9.781,
    "debtPerCapitaUsd": 766,
    "fiscalBalancePercentGdp": -3.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 148,
    "name": "黑山",
    "englishName": "Montenegro",
    "iso2": "ME",
    "flag": "🇲🇪",
    "latitude": 42.5,
    "longitude": 19.3,
    "gdpTrillionsUsd": 0.009228,
    "debtTrillionsUsd": 0.006192,
    "debtToGdpPercent": 67.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.624,
    "debtPerCapitaUsd": 9923,
    "fiscalBalancePercentGdp": -3.6,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 149,
    "name": "列支敦士登",
    "englishName": "Liechtenstein",
    "iso2": "LI",
    "flag": "🇱🇮",
    "latitude": 47.2667,
    "longitude": 9.5333,
    "gdpTrillionsUsd": 0.008991,
    "debtTrillionsUsd": 0.000045,
    "debtToGdpPercent": 0.5,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.041,
    "debtPerCapitaUsd": 1096,
    "fiscalBalancePercentGdp": 2.8,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 150,
    "name": "巴巴多斯",
    "englishName": "Barbados",
    "iso2": "BB",
    "flag": "🇧🇧",
    "latitude": 13.1667,
    "longitude": -59.5333,
    "gdpTrillionsUsd": 0.008017,
    "debtTrillionsUsd": 0.007552,
    "debtToGdpPercent": 94.2,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.292,
    "debtPerCapitaUsd": 25863,
    "fiscalBalancePercentGdp": -0.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 151,
    "name": "塞拉利昂",
    "englishName": "Sierra Leone",
    "iso2": "SL",
    "flag": "🇸🇱",
    "latitude": 8.5,
    "longitude": -11.5,
    "gdpTrillionsUsd": 0.00771,
    "debtTrillionsUsd": 0.003485,
    "debtToGdpPercent": 45.2,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 8.82,
    "debtPerCapitaUsd": 395,
    "fiscalBalancePercentGdp": -4.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 152,
    "name": "马尔代夫",
    "englishName": "Maldives",
    "iso2": "MV",
    "flag": "🇲🇻",
    "latitude": 3.25,
    "longitude": 73,
    "gdpTrillionsUsd": 0.007665,
    "debtTrillionsUsd": 0.009612,
    "debtToGdpPercent": 125.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.411,
    "debtPerCapitaUsd": 23387,
    "fiscalBalancePercentGdp": -2.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 76,
        "amountTrillionsUsd": 0.01,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 153,
    "name": "布隆迪",
    "englishName": "Burundi",
    "iso2": "BI",
    "flag": "🇧🇮",
    "latitude": -3.5,
    "longitude": 30,
    "gdpTrillionsUsd": 0.006918,
    "debtTrillionsUsd": 0.00285,
    "debtToGdpPercent": 41.2,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 14.469,
    "debtPerCapitaUsd": 197,
    "fiscalBalancePercentGdp": -3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 154,
    "name": "斐济",
    "englishName": "Fiji",
    "iso2": "FJ",
    "flag": "🇫🇯",
    "latitude": -18,
    "longitude": 175,
    "gdpTrillionsUsd": 0.006041,
    "debtTrillionsUsd": 0.004754,
    "debtToGdpPercent": 78.7,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.928,
    "debtPerCapitaUsd": 5123,
    "fiscalBalancePercentGdp": -2.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 155,
    "name": "南苏丹",
    "englishName": "South Sudan",
    "iso2": "SS",
    "flag": "🇸🇸",
    "latitude": 7,
    "longitude": 30,
    "gdpTrillionsUsd": 0.005733,
    "debtTrillionsUsd": 0.00356,
    "debtToGdpPercent": 62.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 12.189,
    "debtPerCapitaUsd": 292,
    "fiscalBalancePercentGdp": 3.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 156,
    "name": "利比里亚",
    "englishName": "Liberia",
    "iso2": "LR",
    "flag": "🇱🇷",
    "latitude": 6.5,
    "longitude": -9.5,
    "gdpTrillionsUsd": 0.005216,
    "debtTrillionsUsd": 0.002864,
    "debtToGdpPercent": 54.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 5.731,
    "debtPerCapitaUsd": 500,
    "fiscalBalancePercentGdp": -1.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 157,
    "name": "斯威士兰",
    "englishName": "Eswatini",
    "iso2": "SZ",
    "flag": "🇸🇿",
    "latitude": -26.5,
    "longitude": 31.5,
    "gdpTrillionsUsd": 0.005166,
    "debtTrillionsUsd": 0.00232,
    "debtToGdpPercent": 44.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 1.163,
    "debtPerCapitaUsd": 1994,
    "fiscalBalancePercentGdp": -6.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 158,
    "name": "苏里南",
    "englishName": "Suriname",
    "iso2": "SR",
    "flag": "🇸🇷",
    "latitude": 4,
    "longitude": -56,
    "gdpTrillionsUsd": 0.004664,
    "debtTrillionsUsd": 0.004935,
    "debtToGdpPercent": 105.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.657,
    "debtPerCapitaUsd": 7511,
    "fiscalBalancePercentGdp": -9.6,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 159,
    "name": "阿鲁巴",
    "englishName": "Aruba",
    "iso2": "AW",
    "flag": "🇦🇼",
    "latitude": 12.5,
    "longitude": -69.9667,
    "gdpTrillionsUsd": 0.004521,
    "debtTrillionsUsd": 0.002875,
    "debtToGdpPercent": 63.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.109,
    "debtPerCapitaUsd": 26379,
    "fiscalBalancePercentGdp": 1.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 160,
    "name": "安道尔",
    "englishName": "Andorra",
    "iso2": "AD",
    "flag": "🇦🇩",
    "latitude": 42.5,
    "longitude": 1.5,
    "gdpTrillionsUsd": 0.004491,
    "debtTrillionsUsd": 0.001361,
    "debtToGdpPercent": 30.3,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.089,
    "debtPerCapitaUsd": 15290,
    "fiscalBalancePercentGdp": 3.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 161,
    "name": "吉布提",
    "englishName": "Djibouti",
    "iso2": "DJ",
    "flag": "🇩🇯",
    "latitude": 11.5,
    "longitude": 43,
    "gdpTrillionsUsd": 0.004378,
    "debtTrillionsUsd": 0.001405,
    "debtToGdpPercent": 32.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 1.056,
    "debtPerCapitaUsd": 1331,
    "fiscalBalancePercentGdp": -0.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 162,
    "name": "不丹",
    "englishName": "Bhutan",
    "iso2": "BT",
    "flag": "🇧🇹",
    "latitude": 27.5,
    "longitude": 90.5,
    "gdpTrillionsUsd": 0.003474,
    "debtTrillionsUsd": 0.003599,
    "debtToGdpPercent": 103.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.791,
    "debtPerCapitaUsd": 4550,
    "fiscalBalancePercentGdp": -2.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 163,
    "name": "伯利兹",
    "englishName": "Belize",
    "iso2": "BZ",
    "flag": "🇧🇿",
    "latitude": 17.25,
    "longitude": -88.75,
    "gdpTrillionsUsd": 0.003327,
    "debtTrillionsUsd": 0.002259,
    "debtToGdpPercent": 67.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.417,
    "debtPerCapitaUsd": 5417,
    "fiscalBalancePercentGdp": -1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 164,
    "name": "中非共和国",
    "englishName": "Central African Republic",
    "iso2": "CF",
    "flag": "🇨🇫",
    "latitude": 7,
    "longitude": 21,
    "gdpTrillionsUsd": 0.003192,
    "debtTrillionsUsd": 0.001973,
    "debtToGdpPercent": 61.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 5.513,
    "debtPerCapitaUsd": 358,
    "fiscalBalancePercentGdp": -5.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 165,
    "name": "佛得角",
    "englishName": "Cabo Verde",
    "iso2": "CV",
    "flag": "🇨🇻",
    "latitude": 16,
    "longitude": -24,
    "gdpTrillionsUsd": 0.003081,
    "debtTrillionsUsd": 0.003112,
    "debtToGdpPercent": 101,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.514,
    "debtPerCapitaUsd": 6054,
    "fiscalBalancePercentGdp": 1.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 166,
    "name": "莱索托",
    "englishName": "Lesotho",
    "iso2": "LS",
    "flag": "🇱🇸",
    "latitude": -29.5,
    "longitude": 28.5,
    "gdpTrillionsUsd": 0.002854,
    "debtTrillionsUsd": 0.001401,
    "debtToGdpPercent": 49.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 2.366,
    "debtPerCapitaUsd": 592,
    "fiscalBalancePercentGdp": 2.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 167,
    "name": "圣卢西亚",
    "englishName": "Saint Lucia",
    "iso2": "LC",
    "flag": "🇱🇨",
    "latitude": 13.8833,
    "longitude": -60.9667,
    "gdpTrillionsUsd": 0.002651,
    "debtTrillionsUsd": 0.002044,
    "debtToGdpPercent": 77.1,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.182,
    "debtPerCapitaUsd": 11230,
    "fiscalBalancePercentGdp": -2.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 168,
    "name": "几内亚比绍",
    "englishName": "Guinea-Bissau",
    "iso2": "GW",
    "flag": "🇬🇼",
    "latitude": 12,
    "longitude": -15,
    "gdpTrillionsUsd": 0.002648,
    "debtTrillionsUsd": 0.001994,
    "debtToGdpPercent": 75.3,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 2.019,
    "debtPerCapitaUsd": 988,
    "fiscalBalancePercentGdp": -6.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 169,
    "name": "冈比亚",
    "englishName": "Gambia",
    "iso2": "GM",
    "flag": "🇬🇲",
    "latitude": 13.4667,
    "longitude": -16.5667,
    "gdpTrillionsUsd": 0.002584,
    "debtTrillionsUsd": 0.00191,
    "debtToGdpPercent": 73.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 2.858,
    "debtPerCapitaUsd": 668,
    "fiscalBalancePercentGdp": -2.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 170,
    "name": "塞舌尔",
    "englishName": "Seychelles",
    "iso2": "SC",
    "flag": "🇸🇨",
    "latitude": -4.5833,
    "longitude": 55.6667,
    "gdpTrillionsUsd": 0.002318,
    "debtTrillionsUsd": 0.001194,
    "debtToGdpPercent": 51.5,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.125,
    "debtPerCapitaUsd": 9550,
    "fiscalBalancePercentGdp": -1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 171,
    "name": "安提瓜和巴布达",
    "englishName": "Antigua and Barbuda",
    "iso2": "AG",
    "flag": "🇦🇬",
    "latitude": 17.05,
    "longitude": -61.8,
    "gdpTrillionsUsd": 0.002273,
    "debtTrillionsUsd": 0.001584,
    "debtToGdpPercent": 69.7,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.105,
    "debtPerCapitaUsd": 15088,
    "fiscalBalancePercentGdp": 3.1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 172,
    "name": "圣马力诺",
    "englishName": "San Marino",
    "iso2": "SM",
    "flag": "🇸🇲",
    "latitude": 43.7667,
    "longitude": 12.4167,
    "gdpTrillionsUsd": 0.002251,
    "debtTrillionsUsd": 0.001364,
    "debtToGdpPercent": 60.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.034,
    "debtPerCapitaUsd": 40121,
    "fiscalBalancePercentGdp": -1,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 173,
    "name": "东帝汶",
    "englishName": "Timor-Leste",
    "iso2": "TL",
    "flag": "🇹🇱",
    "latitude": -8.8333,
    "longitude": 125.9167,
    "gdpTrillionsUsd": 0.002064,
    "debtTrillionsUsd": 0.000295,
    "debtToGdpPercent": 14.3,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 1.41,
    "debtPerCapitaUsd": 209,
    "fiscalBalancePercentGdp": -48,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 174,
    "name": "所罗门群岛",
    "englishName": "Solomon Islands",
    "iso2": "SB",
    "flag": "🇸🇧",
    "latitude": -8,
    "longitude": 159,
    "gdpTrillionsUsd": 0.001704,
    "debtTrillionsUsd": 0.000489,
    "debtToGdpPercent": 28.7,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.798,
    "debtPerCapitaUsd": 613,
    "fiscalBalancePercentGdp": -3.2,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 175,
    "name": "科摩罗",
    "englishName": "Comoros",
    "iso2": "KM",
    "flag": "🇰🇲",
    "latitude": -12.1667,
    "longitude": 44.25,
    "gdpTrillionsUsd": 0.001609,
    "debtTrillionsUsd": 0.000475,
    "debtToGdpPercent": 29.5,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.91,
    "debtPerCapitaUsd": 522,
    "fiscalBalancePercentGdp": -2.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 176,
    "name": "格林纳达",
    "englishName": "Grenada",
    "iso2": "GD",
    "flag": "🇬🇩",
    "latitude": 12.1167,
    "longitude": -61.6667,
    "gdpTrillionsUsd": 0.00142,
    "debtTrillionsUsd": 0.001017,
    "debtToGdpPercent": 71.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.116,
    "debtPerCapitaUsd": 8765,
    "fiscalBalancePercentGdp": -5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 177,
    "name": "瓦努阿图",
    "englishName": "Vanuatu",
    "iso2": "VU",
    "flag": "🇻🇺",
    "latitude": -16,
    "longitude": 167,
    "gdpTrillionsUsd": 0.001316,
    "debtTrillionsUsd": 0.000538,
    "debtToGdpPercent": 40.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.334,
    "debtPerCapitaUsd": 1612,
    "fiscalBalancePercentGdp": -3.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 178,
    "name": "萨摩亚",
    "englishName": "Samoa",
    "iso2": "WS",
    "flag": "🇼🇸",
    "latitude": -13.5833,
    "longitude": -172.3333,
    "gdpTrillionsUsd": 0.001288,
    "debtTrillionsUsd": 0.000273,
    "debtToGdpPercent": 21.2,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.212,
    "debtPerCapitaUsd": 1288,
    "fiscalBalancePercentGdp": 4.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 179,
    "name": "圣文森特和格林纳丁斯",
    "englishName": "Saint Vincent and the Grenadines",
    "iso2": "VC",
    "flag": "🇻🇨",
    "latitude": 13.25,
    "longitude": -61.2,
    "gdpTrillionsUsd": 0.001176,
    "debtTrillionsUsd": 0.001334,
    "debtToGdpPercent": 113.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.111,
    "debtPerCapitaUsd": 12014,
    "fiscalBalancePercentGdp": -12.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 180,
    "name": "圣基茨和尼维斯",
    "englishName": "Saint Kitts and Nevis",
    "iso2": "KN",
    "flag": "🇰🇳",
    "latitude": 17.3333,
    "longitude": -62.75,
    "gdpTrillionsUsd": 0.001082,
    "debtTrillionsUsd": 0.000632,
    "debtToGdpPercent": 58.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.052,
    "debtPerCapitaUsd": 12152,
    "fiscalBalancePercentGdp": -11.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 181,
    "name": "圣多美和普林西比",
    "englishName": "São Tomé and Príncipe",
    "iso2": "ST",
    "flag": "🇸🇹",
    "latitude": 1,
    "longitude": 7,
    "gdpTrillionsUsd": 0.000981,
    "debtTrillionsUsd": 0.000546,
    "debtToGdpPercent": 55.7,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.24,
    "debtPerCapitaUsd": 2277,
    "fiscalBalancePercentGdp": -2.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 182,
    "name": "多米尼加",
    "englishName": "Dominica",
    "iso2": "DM",
    "flag": "🇩🇲",
    "latitude": 15.4167,
    "longitude": -61.3333,
    "gdpTrillionsUsd": 0.000744,
    "debtTrillionsUsd": 0.000763,
    "debtToGdpPercent": 102.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.075,
    "debtPerCapitaUsd": 10178,
    "fiscalBalancePercentGdp": -1.3,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 183,
    "name": "汤加",
    "englishName": "Tonga",
    "iso2": "TO",
    "flag": "🇹🇴",
    "latitude": -20,
    "longitude": -175,
    "gdpTrillionsUsd": 0.00068,
    "debtTrillionsUsd": 0.000186,
    "debtToGdpPercent": 27.4,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.099,
    "debtPerCapitaUsd": 1882,
    "fiscalBalancePercentGdp": 4.9,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 184,
    "name": "密克罗尼西亚",
    "englishName": "Micronesia, Fed. States of",
    "iso2": "FM",
    "flag": "🇫🇲",
    "latitude": 6.9167,
    "longitude": 158.25,
    "gdpTrillionsUsd": 0.000502,
    "debtTrillionsUsd": 0.000045,
    "debtToGdpPercent": 8.9,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.095,
    "debtPerCapitaUsd": 470,
    "fiscalBalancePercentGdp": 0.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 185,
    "name": "基里巴斯",
    "englishName": "Kiribati",
    "iso2": "KI",
    "flag": "🇰🇮",
    "latitude": 1.4167,
    "longitude": 173,
    "gdpTrillionsUsd": 0.000349,
    "debtTrillionsUsd": 0.000028,
    "debtToGdpPercent": 8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.129,
    "debtPerCapitaUsd": 216,
    "fiscalBalancePercentGdp": -14.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 186,
    "name": "帕劳",
    "englishName": "Palau",
    "iso2": "PW",
    "flag": "🇵🇼",
    "latitude": 7.5,
    "longitude": 134.5,
    "gdpTrillionsUsd": 0.000345,
    "debtTrillionsUsd": 0.000215,
    "debtToGdpPercent": 62.3,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.018,
    "debtPerCapitaUsd": 11941,
    "fiscalBalancePercentGdp": 1.7,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 68,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 14,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 7,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 11,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 187,
    "name": "马绍尔群岛",
    "englishName": "Marshall Islands",
    "iso2": "MH",
    "flag": "🇲🇭",
    "latitude": 9,
    "longitude": 168,
    "gdpTrillionsUsd": 0.000308,
    "debtTrillionsUsd": 0.000036,
    "debtToGdpPercent": 11.8,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.036,
    "debtPerCapitaUsd": 1010,
    "fiscalBalancePercentGdp": 1.4,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 188,
    "name": "瑙鲁",
    "englishName": "Nauru",
    "iso2": "NR",
    "flag": "🇳🇷",
    "latitude": -0.5333,
    "longitude": 166.9167,
    "gdpTrillionsUsd": 0.000176,
    "debtTrillionsUsd": 0.000026,
    "debtToGdpPercent": 14.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.012,
    "debtPerCapitaUsd": 2141,
    "fiscalBalancePercentGdp": 3.5,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  },
  {
    "rank": 189,
    "name": "图瓦卢",
    "englishName": "Tuvalu",
    "iso2": "TV",
    "flag": "🇹🇻",
    "latitude": -8,
    "longitude": 178,
    "gdpTrillionsUsd": 0.000058,
    "debtTrillionsUsd": 0.000002,
    "debtToGdpPercent": 3.6,
    "yearlyDebtDeltaTrillionsUsd": 0.001,
    "populationMillions": 0.01,
    "debtPerCapitaUsd": 209,
    "fiscalBalancePercentGdp": 31.6,
    "snapshotDate": "2025-12-31T23:59:59Z",
    "sourceYear": "2025 IMF WEO DataMapper snapshot",
    "sourceNote": "GDP uses IMF WEO current-dollar estimate; debt uses IMF WEO general-government gross debt as percent of GDP where available.",
    "composition": [
      {
        "label": "中央/联邦政府债",
        "share": 74,
        "amountTrillionsUsd": 0,
        "note": "按可比展示口径估算，非所有国家均披露完全一致分类。"
      },
      {
        "label": "地方/州/公共机构债",
        "share": 8,
        "amountTrillionsUsd": 0,
        "note": "联邦制国家占比通常更高，单一制国家多并入一般政府。"
      },
      {
        "label": "社保/公共基金相关",
        "share": 3,
        "amountTrillionsUsd": 0,
        "note": "用于视觉拆分，跨国不可直接等同会计科目。"
      },
      {
        "label": "其他显性政府负债",
        "share": 15,
        "amountTrillionsUsd": 0,
        "note": "包括口径差异、公共实体与统计调整项。"
      }
    ]
  }
];
