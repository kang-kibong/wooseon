/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_GA_TRACKING_ID: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
