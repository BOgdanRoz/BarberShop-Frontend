# Graph Report - BarberShop  (2026-10-20)

## Corpus Check
- 35 files · ~761,255 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 18 file(s) not represented in the graph (top: .css 17, (none) 1)

## Summary
- 238 nodes · 376 edges · 15 communities (12 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `79962bf5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- graphify-out/graph.json
- siteContent.ts
- package.json
- Barbers.tsx
- photos.ts
- compilerOptions
- compilerOptions
- Services.tsx
- devDependencies
- Landing Pages
- Signs of a Template-Like Landing Page
- React + TypeScript + Vite
- tsconfig.json
- IMAGE_CREDITS.md
- App.tsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `SideDecor()` - 16 edges
3. `compilerOptions` - 15 edges
4. `App()` - 11 edges
5. `Button()` - 11 edges
6. `Logo()` - 9 edges
7. `Landing Pages` - 9 edges
8. `SectionHeading()` - 7 edges
9. `instagramUrl` - 7 edges
10. `Signs of a Template-Like Landing Page` - 7 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `Footer()`  [EXTRACTED]
  src/App.tsx → src/components/Footer/Footer.tsx
- `App()` --calls--> `Header()`  [EXTRACTED]
  src/App.tsx → src/components/Header/Header.tsx
- `Barbers()` --calls--> `BarberCard()`  [EXTRACTED]
  src/sections/Barbers/Barbers.tsx → src/components/BarberCard/BarberCard.tsx
- `FinalCta()` --calls--> `Button()`  [EXTRACTED]
  src/sections/FinalCta/FinalCta.tsx → src/components/Button/Button.tsx
- `Hero()` --calls--> `Button()`  [EXTRACTED]
  src/sections/Hero/Hero.tsx → src/components/Button/Button.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Graphify query-first workflow** — agents_md_graphify_query, agents_md_graphify_path, agents_md_graphify_explain, agents_md_graphify_update, agents_md_wiki_index, agents_md_graph_json [INFERRED 0.85]

## Communities (15 total, 3 thin omitted)

### Community 0 - "graphify-out/graph.json"
Cohesion: 0.24
Nodes (10): graphify-out/graph.json, GRAPH_REPORT.md, graphify (AGENTS.md section), graphify explain, graphify-out/ directory, graphify path, graphify query, graphify update (+2 more)

### Community 1 - "siteContent.ts"
Cohesion: 0.10
Nodes (23): react, Button(), ButtonProps, ButtonVariant, Footer(), Header(), HeaderTheme, themes (+15 more)

### Community 2 - "package.json"
Cohesion: 0.09
Nodes (25): dependencies, react, react-dom, name, private, scripts, build, dev (+17 more)

### Community 3 - "Barbers.tsx"
Cohesion: 0.18
Nodes (12): BarberCard(), BarberCardProps, SocialIcon(), Barber, barbers, defaultSocials, names, roles (+4 more)

### Community 5 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 6 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 7 - "Services.tsx"
Cohesion: 0.18
Nodes (11): ServiceCard(), ServiceCardProps, ServiceIcon(), ServiceIconProps, convertUsdToUah(), Service, services, serviceSources (+3 more)

### Community 8 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @types/node, @types/react (+5 more)

### Community 9 - "Landing Pages"
Cohesion: 0.20
Nodes (9): 1. Brief, 2. Content Before Design, 3. Design Decisions, 4. Structure, 5. Implementation, 6. Completion, 7. Audit, Auditing an Existing Landing Page (+1 more)

### Community 10 - "Signs of a Template-Like Landing Page"
Cohesion: 0.25
Nodes (7): Copy, Falsehoods, Incompleteness, Motion, Signs of a Template-Like Landing Page, Structure, Visual Style

### Community 11 - "React + TypeScript + Vite"
Cohesion: 0.50
Nodes (3): Expanding the ESLint configuration, React Compiler, React + TypeScript + Vite

### Community 14 - "App.tsx"
Cohesion: 0.12
Nodes (19): App(), SectionHeading(), SectionHeadingProps, kinds, OrnamentKind, OrnamentShape(), rotations, scales (+11 more)

## Knowledge Gaps
- **5 isolated node(s):** `@types/node`, `@types/react`, `@types/react-dom`, `typescript`, `/graphify command`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 135 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `siteContent.ts` to `package.json`, `App.tsx`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **What connects `@types/node`, `@types/react`, `@types/react-dom` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `siteContent.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1036036036036036 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.0873015873015873 - nodes in this community are weakly interconnected._
- **Should `photos.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._