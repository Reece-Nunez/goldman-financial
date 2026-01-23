import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://282554d620b81fe4e5a273157e801c07@o4510760826765312.ingest.us.sentry.io/4510760827748352",

  // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Capture Replay for 10% of all sessions, plus 100% of sessions with an error
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,

  integrations: [
    Sentry.replayIntegration(),
  ],
});
