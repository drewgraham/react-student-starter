import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

interface NewsItem {
  slug: string;
  title: string;
  body: string;
  date: string;
}

const NewsDetail = () => {
  const { slug } = useParams();
  const [item, setItem] = useState<NewsItem | null>(null);
  const [related, setRelated] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch(`/api/news/${slug}`)
      .then(res => res.json())
      .then(setItem);
    fetch('/api/news')
      .then(res => res.json())
      .then((items: NewsItem[]) => {
        setRelated(items.filter(n => n.slug !== slug).slice(0, 3));
      });
  }, [slug]);

  if (!item) return <p>Loading…</p>;

  return (
    <>
      <PageHeader title={item.title}>
        <p>{new Date(item.date).toLocaleDateString('en-GB', { dateStyle: 'long' })}</p>
      </PageHeader>
      <p>{item.body}</p>
      {related.length > 0 && (
        <section aria-labelledby="related-heading">
          <h2 id="related-heading">Related articles</h2>
          <ul>
            {related.map(r => (
              <li key={r.slug}>
                <Link to={`/news/${r.slug}`}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default NewsDetail;
