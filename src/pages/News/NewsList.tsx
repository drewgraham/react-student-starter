import { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Pagination from '../../components/ui/Pagination';
import EmptyState from '../../components/ui/EmptyState';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
}

const NewsList = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${window.location.origin}/api/news`)
      .then(res => res.json())
      .then(setItems);
  }, []);

  const pageSize = 2;
  const pageCount = Math.ceil(items.length / pageSize);
  const pageItems = items.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <PageHeader title="News" />
      {pageItems.length ? (
        <ul>
          {pageItems.map(n => (
            <li key={n.slug}>
              <a href={`/news/${n.slug}`}>{n.title}</a> – {new Date(n.date).toLocaleDateString('en-GB', { dateStyle: 'long' })}
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState message="No news available." />
      )}
      <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
    </>
  );
};

export default NewsList;
