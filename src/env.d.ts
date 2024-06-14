/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_GA_TRACKING_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
