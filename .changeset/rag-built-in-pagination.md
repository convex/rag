---
"@convex-dev/rag": patch
---

Use Convex's built-in pagination for `rag.listChunks` and the component's
`namespaces.list` query (#115). Cursors returned by these operations now use
Convex's opaque format, so previously saved cursors cannot be reused. Queries
that call them must respect Convex's one-pagination-per-query limit. `rag.list`
is unchanged.
