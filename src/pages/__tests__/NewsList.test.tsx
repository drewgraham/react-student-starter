import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { beforeAll, afterEach, afterAll, test, expect } from 'vitest';
import NewsList from '../News/NewsList';
import { news } from '../../data/news';

const server = setupServer(
  rest.get('/api/news', (_req, res, ctx) => res(ctx.json(news)))
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

test('paginates news items', async () => {
  render(
    <MemoryRouter>
      <NewsList />
    </MemoryRouter>
  );
  // initial page shows first two items
  expect(await screen.findByText(/New library opening/i)).toBeInTheDocument();
  expect(screen.getByText(/Research grant awarded/i)).toBeInTheDocument();
  // move to next page
  fireEvent.click(screen.getByText(/Next/i));
  expect(await screen.findByText(/Graduation ceremony/i)).toBeInTheDocument();
});
