import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { beforeAll, afterEach, afterAll, test, expect } from 'vitest';
import SearchResults from '../SearchResults';
import { store } from '../../store';
import { courses } from '../../data/courses';
import { news } from '../../data/news';
import { people } from '../../data/people';

const server = setupServer(
  rest.get('/api/courses', (_req, res, ctx) => res(ctx.json(courses))),
  rest.get('/api/news', (_req, res, ctx) => res(ctx.json(news))),
  rest.get('/api/people', (_req, res, ctx) => res(ctx.json(people)))
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

test('shows search results', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/search?q=computer"]}>
        <SearchResults />
      </MemoryRouter>
    </Provider>
  );
  expect(await screen.findByText(/Computer Science BSc/i)).toBeInTheDocument();
});

test('shows no results message', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/search?q=unknown"]}>
        <SearchResults />
      </MemoryRouter>
    </Provider>
  );
  expect(await screen.findByText(/No results found/i)).toBeInTheDocument();
});
