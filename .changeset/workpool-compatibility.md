---
"@convex-dev/rag": patch
---

Add support for Workpool 0.5.x while retaining support for 0.4.x.

Workpool 0.5 requires Convex 1.47 or later. If upgrading from Workpool earlier
than 0.4.15, first deploy Workpool 0.4.15 and run
`npx convex run --component rag/workpool migrations:backfillPendingStartIds` for
each installed instance, adjusting the component path for custom names.
