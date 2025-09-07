import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  useEffect(() => {
    fetch(`/api/news/${slug}`)
      .then(res => res.json())
      .then(setItem);
  }, [slug]);

  if (!item) return <p>Loading…</p>;

  return (
    <>
      <PageHeader title={item.title}>
        <p>{new Date(item.date).toLocaleDateString('en-GB', { dateStyle: 'long' })}</p>
      </PageHeader>
      <p>{item.body}</p>
      <section>
        <h2>Related articles</h2>
        <div>TODO</div>
      </section>
    </>
  );
};

export default NewsDetail;
