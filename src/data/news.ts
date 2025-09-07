export interface NewsItem {
  slug: string;
  title: string;
  body: string;
  date: string;
}

export const news: NewsItem[] = [
  {
    slug: 'new-library-opening',
    title: 'New library opening',
    body: 'Our new library opens on campus.',
    date: '2025-09-07',
  },
  {
    slug: 'research-grant-awarded',
    title: 'Research grant awarded',
    body: 'The university has been awarded a major grant.',
    date: '2025-08-20',
  },
  {
    slug: 'graduation-ceremony',
    title: 'Graduation ceremony',
    body: 'Graduation ceremony details released.',
    date: '2025-07-15',
  },
  {
    slug: 'alumni-event',
    title: 'Alumni event',
    body: 'Join our alumni event.',
    date: '2025-06-10',
  },
];
