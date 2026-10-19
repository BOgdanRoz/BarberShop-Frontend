# Graph Report - BarberShop  (2026-10-19)

## Corpus Check
- 3 files · ~96,261 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 13 nodes · 19 edges · 3 communities
- Extraction: 68% EXTRACTED · 32% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Graph Query Workflow
- Graph Outputs
- Graphify Commands

## God Nodes (most connected - your core abstractions)
1. `graphify-out/graph.json` - 7 edges
2. `graphify (AGENTS.md section)` - 6 edges
3. `graphify-out/ directory` - 5 edges
4. `graphify query` - 4 edges
5. `GRAPH_REPORT.md` - 3 edges
6. `graphify-out/wiki/index.md` - 2 edges
7. `graphify path` - 2 edges
8. `graphify explain` - 2 edges
9. `graphify update` - 2 edges
10. `Query-before-grep rule` - 2 edges

## Surprising Connections (you probably didn't know these)
- `graphify explain` --shares_data_with--> `graphify-out/graph.json`  [INFERRED]
  AGENTS.md → AGENTS.md  _Bridges community 0 → community 2_
- `graphify query` --conceptually_related_to--> `GRAPH_REPORT.md`  [INFERRED]
  AGENTS.md → AGENTS.md  _Bridges community 1 → community 0_
- `graphify (AGENTS.md section)` --references--> `graphify-out/ directory`  [EXTRACTED]
  AGENTS.md → AGENTS.md  _Bridges community 2 → community 1_

## Hyperedges (group relationships)
- **Graphify query-first workflow** — agents_md_graphify_query, agents_md_graphify_path, agents_md_graphify_explain, agents_md_graphify_update, agents_md_wiki_index, agents_md_graph_json [INFERRED 0.85]

## Communities (3 total, 0 thin omitted)

### Community 0 - "Graph Query Workflow"
Cohesion: 0.50
Nodes (3): graphify-out/graph.json, graphify query, graphify update

### Community 1 - "Graph Outputs"
Cohesion: 0.67
Nodes (3): GRAPH_REPORT.md, graphify-out/ directory, graphify-out/wiki/index.md

### Community 2 - "Graphify Commands"
Cohesion: 0.50
Nodes (4): graphify (AGENTS.md section), graphify explain, graphify path, /graphify command

## Knowledge Gaps
- **1 isolated node(s):** `/graphify command`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 3 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `graphify-out/graph.json` connect `Graph Query Workflow` to `Graph Outputs`, `Graphify Commands`?**
  _High betweenness centrality (0.396) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `graphify-out/graph.json` (e.g. with `graphify explain` and `graphify path`) actually correct?**
  _`graphify-out/graph.json` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `/graphify command` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `graphify-out/ directory` connect `Graph Outputs` to `Graph Query Workflow`, `Graphify Commands`?**
  _High betweenness centrality (0.345) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `graphify query` (e.g. with `graphify-out/graph.json` and `GRAPH_REPORT.md`) actually correct?**
  _`graphify query` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Why does `graphify (AGENTS.md section)` connect `Graphify Commands` to `Graph Query Workflow`, `Graph Outputs`?**
  _High betweenness centrality (0.313) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `GRAPH_REPORT.md` (e.g. with `graphify query` and `graphify-out/wiki/index.md`) actually correct?**
  _`GRAPH_REPORT.md` has 2 INFERRED edges - model-reasoned connections that need verification._