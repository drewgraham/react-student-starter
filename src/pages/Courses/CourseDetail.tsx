import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/ui/Button';

interface Course {
  code: string;
  title: string;
  overview?: string;
}

const CourseDetail = () => {
  const { code } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'overview';

  const setTab = (t: string) => setSearchParams({ tab: t });

  useEffect(() => {
    fetch(`${window.location.origin}/api/courses`)
      .then(res => res.json())
      .then((data: Course[]) => {
        const found = data.find(c => c.code === code);
        setCourse(found || null);
      });
  }, [code]);

  if (!course) return <p>Loading…</p>;

  return (
    <>
      <PageHeader title={course.title}>
        <p>UCAS code: {course.code}</p>
      </PageHeader>
      <div>
        <nav aria-label="Course" role="tablist">
          <button
            role="tab"
            aria-selected={tab === 'overview'}
            onClick={() => setTab('overview')}
            id="overview-tab"
          >
            Overview
          </button>
          <button
            role="tab"
            aria-selected={tab === 'modules'}
            onClick={() => setTab('modules')}
            id="modules-tab"
          >
            Modules
          </button>
          <button
            role="tab"
            aria-selected={tab === 'entry'}
            onClick={() => setTab('entry')}
            id="entry-tab"
          >
            Entry requirements
          </button>
        </nav>
        {tab === 'overview' && (
          <p>{course.overview || 'Overview coming soon.'}</p>
        )}
        {tab === 'modules' && <p>Module information coming soon.</p>}
        {tab === 'entry' && <p>Entry requirements coming soon.</p>}
        <section aria-labelledby="apply">
          <h2 id="apply">Apply now</h2>
          <Button disabled>Apply now</Button>
          <p>Coming soon</p>
        </section>
      </div>
    </>
  );
};

export default CourseDetail;
