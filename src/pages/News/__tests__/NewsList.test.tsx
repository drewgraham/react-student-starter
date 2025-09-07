import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import NewsList from '../NewsList';
import { news } from '../../../data/news';

const server = setupServer(
  rest.get('/api/news', (_req, res, ctx) => res(ctx.json(news)))
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('paginates news items', async () => {
  render(
    <BrowserRouter>
      <NewsList />
    </BrowserRouter>
  );
  await waitFor(() => screen.getByText(/New library opening/i));
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  fireEvent.click(screen.getByText(/Next/i));
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});

test('shows empty state', async () => {
  server.use(rest.get('/api/news', (_req, res, ctx) => res(ctx.json([]))));
  render(
    <BrowserRouter>
      <NewsList />
    </BrowserRouter>
  );
  await waitFor(() => screen.getByText(/No news available/i));
});
