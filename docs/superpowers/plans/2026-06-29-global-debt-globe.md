# Global Debt Globe Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an interactive 3D global debt visualization for the top 20 nominal-GDP countries with local snapshot data, debt-growth animation, and detail charts.

**Architecture:** A single React + Vite app renders an immersive Three.js globe as the primary surface. Static typed data powers both 3D country markers and the chart/detail views, keeping data concerns separate from rendering and interaction.

**Tech Stack:** React, TypeScript, Vite, Three.js, @react-three/fiber, @react-three/drei, Recharts, CSS modules/global CSS.

## Global Constraints

- Always use local snapshot data; no runtime network dependency.
- Show data source and methodology clearly in the UI.
- Debt per-second growth is an estimate derived from annual debt delta divided by seconds per year.
- Debt composition is a visualized estimate when official comparable composition is unavailable.
- Must support mouse drag and touch drag.
- Must provide globe mode, country selection, detail mode, and chart mode.

---

### Task 1: Scaffold App

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles.css`

**Interfaces:**
- Produces: runnable React app shell.

- [ ] Create Vite React TypeScript project files.
- [ ] Install dependencies.
- [ ] Run `npm run build`.

### Task 2: Add Data Model

**Files:**
- Create: `src/data/countries.ts`
- Create: `src/lib/format.ts`

**Interfaces:**
- Produces: `DebtCountry[]`, `formatCurrencyTrillions`, `formatDebtPerSecond`, `formatPercent`.

- [ ] Add top-20 GDP country snapshot data with coordinates, GDP, debt, debt/GDP, annual debt delta estimate, flag, source labels, and composition.
- [ ] Add formatting helpers.
- [ ] Run `npm run build`.

### Task 3: Build 3D Globe

**Files:**
- Create: `src/components/GlobeScene.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `DebtCountry[]`.
- Produces: selectable globe markers and double-click detail transition.

- [ ] Render star field, Earth sphere, atmosphere, and country debt columns.
- [ ] Add orbit controls for mouse/touch dragging.
- [ ] Add click and double-click handlers.
- [ ] Run `npm run build`.

### Task 4: Build Dashboard Panels

**Files:**
- Create: `src/components/CountryPanel.tsx`
- Create: `src/components/DetailMode.tsx`
- Create: `src/components/TopTwentyTable.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: selected country, all countries.
- Produces: summary panel, detail charts, top-20 comparison table.

- [ ] Add selected-country summary with live debt ticker.
- [ ] Add detail chart mode with composition and metrics.
- [ ] Add table/list mode for all countries.
- [ ] Run `npm run build`.

### Task 5: QA and Polish

**Files:**
- Modify: `src/styles.css`
- Modify: affected components.

**Interfaces:**
- Produces: polished responsive app.

- [ ] Start dev server.
- [ ] Verify desktop and mobile dimensions.
- [ ] Verify globe nonblank, draggable, marker click, double-click, detail back navigation.
- [ ] Run `npm run build`.
