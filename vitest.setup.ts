// Use the Vitest-specific entry to ensure `expect` is defined
import '@testing-library/jest-dom/vitest';

// Allow relative fetch URLs in the Node test environment
const { fetch: originalFetch } = globalThis;
globalThis.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
  if (typeof input === 'string' && input.startsWith('/')) {
    input = 'http://localhost' + input;
  }
  return originalFetch(input, init);
};
