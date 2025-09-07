import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Contact from '../Contact';

const server = setupServer(
  rest.post('/api/contact', (_req, res, ctx) => res(ctx.json({ ok: true })))
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('validates form fields', async () => {
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
  fireEvent.click(screen.getByText(/Send/i));
  expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
});

test('shows success message', async () => {
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
  fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'A' } });
  fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'a@b.c' } });
  fireEvent.change(screen.getByLabelText(/Message/), { target: { value: 'Hi' } });
  fireEvent.click(screen.getByText(/Send/i));
  await waitFor(() => screen.getByText(/Message sent successfully/i));
});

test('shows error message', async () => {
  server.use(rest.post('/api/contact', (_req, res, ctx) => res(ctx.status(500))));
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
  fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'A' } });
  fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'a@b.c' } });
  fireEvent.change(screen.getByLabelText(/Message/), { target: { value: 'Hi' } });
  fireEvent.click(screen.getByText(/Send/i));
  await waitFor(() => screen.getByText(/Something went wrong/i));
});
