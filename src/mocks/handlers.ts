import { rest } from 'msw';
import { courses } from '../data/courses';
import { news } from '../data/news';
import { people } from '../data/people';

export const handlers = [
  rest.get('/api/courses', (req, res, ctx) => {
    const level = req.url.searchParams.get('level');
    const school = req.url.searchParams.get('school');
    let result = courses;
    if (level) result = result.filter(c => c.level === level);
    if (school) result = result.filter(c => c.school === school);
    return res(ctx.json(result));
  }),
  rest.get('/api/news', (_req, res, ctx) => res(ctx.json(news))),
  rest.get('/api/news/:slug', (req, res, ctx) => {
    const item = news.find(n => n.slug === req.params.slug);
    if (!item) return res(ctx.status(404));
    return res(ctx.json(item));
  }),
  rest.get('/api/people', (_req, res, ctx) => res(ctx.json(people))),
  rest.post('/api/contact', async (req, res, ctx) => {
    const data = await req.json();
    if (!data.name || !data.email || !data.message) {
      return res(ctx.status(400), ctx.json({ error: 'Validation error' }));
    }
    return res(ctx.json({ ok: true }));
  }),
];
