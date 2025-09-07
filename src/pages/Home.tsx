import Card from '../components/ui/Card';
import PageHeader from '../components/PageHeader';
import { news } from '../data/news';

const Home = () => {
  const latest = news.slice(0, 3);
  return (
    <>
      <PageHeader title="Welcome to Example University">
        <p>Excellence in teaching and research since 1900.</p>
      </PageHeader>
      <section>
        <h2>Highlights</h2>
        <div className="grid">
          <Card>
            <h3>Courses</h3>
            <p>Explore our diverse programmes.</p>
          </Card>
          <Card>
            <h3>Research</h3>
            <p>Discover our world-leading research.</p>
          </Card>
          <Card>
            <h3>Admissions</h3>
            <p>Join our community.</p>
          </Card>
        </div>
      </section>
      <section>
        <h2>Latest news</h2>
        <ul>
          {latest.map(item => (
            <li key={item.slug}>
              <a href={`/news/${item.slug}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Quick links</h2>
        <ul>
          <li><a href="#">Library</a></li>
          <li><a href="#">Term dates</a></li>
          <li><a href="#">Student email</a></li>
        </ul>
      </section>
    </>
  );
};

export default Home;
