/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly DEPLOY_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}