import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

interface Course { code: string; title: string; }
interface NewsItem { slug: string; title: string; }
interface Person { id: number; name: string; }

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const [courses, setCourses] = useState<Course[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    if (!query) return;
    Promise.all([
      fetch(`${window.location.origin}/api/courses`).then(r => r.json()),
      fetch(`${window.location.origin}/api/news`).then(r => r.json()),
      fetch(`${window.location.origin}/api/people`).then(r => r.json()),
    ]).then(([c, n, p]) => {
      setCourses(c.filter((x: Course) => x.title.toLowerCase().includes(query)));
      setNews(n.filter((x: NewsItem) => x.title.toLowerCase().includes(query)));
      setPeople(p.filter((x: Person) => x.name.toLowerCase().includes(query)));
    });
  }, [query]);

  if (!query) {
    return (
      <>
        <PageHeader title="Search" />
        <p>Please enter a search term.</p>
      </>
    );
  }

  const hasResults = courses.length || news.length || people.length;

  return (
    <>
      <PageHeader title={`Search results for "${searchParams.get('q') || ''}"`} />
      {hasResults ? (
        <>
          {!!courses.length && (
            <section aria-labelledby="courses-heading">
              <h2 id="courses-heading">Courses</h2>
              <ul>
                {courses.map(c => (
                  <li key={c.code}>
                    <Link to={`/courses/${c.code}`}>{c.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {!!news.length && (
            <section aria-labelledby="news-heading">
              <h2 id="news-heading">News</h2>
              <ul>
                {news.map(n => (
                  <li key={n.slug}>
                    <Link to={`/news/${n.slug}`}>{n.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {!!people.length && (
            <section aria-labelledby="people-heading">
              <h2 id="people-heading">People</h2>
              <ul>
                {people.map(p => (
                  <li key={p.id}>{p.name}</li>
                ))}
              </ul>
            </section>
          )}
        </>
      ) : (
        <p>No results found.</p>
      )}
    </>
  );
};

export default SearchResults;
