# Developer assessment

Complete the following tasks:

1. Implement global search across Courses, News, and People (≈20 min).
   - Add a search input in the header that dispatches the query to the Redux `searchSlice`.
   - Query `/api/search?q=` and display results grouped by type, highlighting matches.
   - Debounce input changes (~300 ms) and provide ARIA roles for the results list.

2. Complete Course Detail tabs and preserve selected tab in the URL (≈20 min).
   - Implement Overview, Syllabus, and Fees tabs inside the course detail page.
   - Reflect the active tab in a `?tab=` query parameter and restore it on reload.
   - Provide keyboard navigation and proper ARIA attributes.

3. Fix accessibility TODOs flagged in comments (≈15 min).
   - Search the codebase for `TODO a11y` comments and address each one.
   - Use semantic HTML, labels, and ARIA attributes where necessary.
   - Verify components are reachable via keyboard navigation.

4. Add unit tests for search behavior and news pagination (≈20 min).
   - Cover the Redux search reducer and a component integration test with `vitest`.
   - Write tests for news list pagination, including boundary cases and empty states.
   - Run `npm test` to confirm all tests pass.

5. Lazy-load the People page using `React.lazy` with a suspense fallback (≈15 min).
   - Convert the People route to `React.lazy` and verify the chunk loads only on navigation.
   - Wrap the lazy route in `<Suspense>` with a small loading spinner component.
   - Use your browser’s network panel to confirm the lazy-loaded bundle is requested.

6. (Bonus) Wire an “Apply now” flow to a mock POST `/api/apply` (≈25 min).
   - Build a small form collecting applicant details.
   - On submit, POST the data to `/api/apply` and show a success or error state.
   - Disable the submit button while the request is in flight.
