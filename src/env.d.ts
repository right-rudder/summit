/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GHL_ENROLL_FORM_WEBHOOK_URL: string;
  readonly GHL_CONTACT_FORM_WEBHOOK_URL: string;
  readonly GHL_BOOK_FORM_WEBHOOK_URL: string;
  readonly GHL_QUIZ_FORM_WEBHOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
