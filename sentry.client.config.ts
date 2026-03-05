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

  // Early-stage filtering: drop known noise before events are constructed
  ignoreErrors: [
    /Non-Error promise rejection captured with value/,
    /Event `CustomEvent`/,
    /runtime\.sendMessage/,
    /Tab not found/,
    /feature named .* was not found/,
    /recaptcha/i,
  ],

  // Filter out errors from third-party scripts and browser/extension noise
  beforeSend(event) {
    const errorValue = event.exception?.values?.[0]?.value || '';
    const errorType = event.exception?.values?.[0]?.type || '';

    // Filter non-Error promise rejections from reCAPTCHA, browser extensions, etc.
    if (errorValue.startsWith('Non-Error promise rejection captured with value:')) {
      return null;
    }

    // Filter CustomEvent promise rejections (Safari/browser extension noise)
    if (errorType === 'CustomEvent' || errorValue.includes('CustomEvent')) {
      return null;
    }

    // Filter browser extension errors (runtime.sendMessage, etc.)
    if (errorValue.includes('runtime.sendMessage') || errorValue.includes('Tab not found')) {
      return null;
    }

    // Filter DuckDuckGo browser internal errors
    if (errorValue.includes('feature named') && errorValue.includes('was not found')) {
      return null;
    }

    // Filter errors originating from third-party scripts (reCAPTCHA, analytics, etc.)
    const frames = event.exception?.values?.[0]?.stacktrace?.frames || [];
    const isThirdPartyError = frames.some((frame) => {
      const filename = frame.filename || '';
      return (
        filename.includes('recaptcha') ||
        filename.includes('gstatic.com') ||
        filename.includes('google.com/recaptcha')
      );
    });

    if (isThirdPartyError) {
      return null;
    }

    return event;
  },
});
