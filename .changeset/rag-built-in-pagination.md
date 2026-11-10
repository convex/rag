---
"@convex-dev/rag": minor
---

Use Convex's built-in pagination for `namespaces.list` and `chunks.list` (#115).
Pagination cursors now use Convex's opaque format, so cursors saved from earlier
versions cannot be reused. Queries that call these functions must also respect
Convex's one-pagination-per-query limit.
