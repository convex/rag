---
"@convex-dev/rag": minor
---

Allow `rag.listChunks` to return stored embeddings when
`includeEmbeddings: true` is passed (#117). The option defaults to false;
returned embeddings can be reused for search or copying chunks without calling
the embedding provider again.
