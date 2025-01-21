/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORKS_API_URL: string
  readonly VITE_COVERS_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
