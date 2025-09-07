import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
        <nav aria-label="Course">
          <button>Overview</button>
          <button>Modules</button>
          <button>Entry requirements</button>
        </nav>
        <p>{course.overview || 'TODO: Overview content'}</p>
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
