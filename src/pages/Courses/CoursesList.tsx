import { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Card from '../../components/ui/Card';
import Select from '../../components/ui/Select';
import EmptyState from '../../components/ui/EmptyState';
import Pagination from '../../components/ui/Pagination';

interface Course {
  code: string;
  title: string;
  level: string;
  school: string;
}

const CoursesList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [level, setLevel] = useState('');
  const [school, setSchool] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams();
    if (level) params.append('level', level);
    if (school) params.append('school', school);
    fetch('/api/courses?' + params.toString())
      .then(res => res.json())
      .then(setCourses);
  }, [level, school]);

  const pageSize = 5;
  const pageCount = Math.ceil(courses.length / pageSize);
  const pageItems = courses.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <PageHeader title="Courses">
        <p>Search our programmes.</p>
      </PageHeader>
      <form>
        <label>
          Level
          <Select value={level} onChange={e => setLevel(e.target.value)}>
            <option value="">All</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </Select>
        </label>
        <label>
          School
          <Select value={school} onChange={e => setSchool(e.target.value)}>
            <option value="">All</option>
            <option value="Computing">Computing</option>
            <option value="Engineering">Engineering</option>
            <option value="Arts">Arts</option>
          </Select>
        </label>
      </form>
      {pageItems.length ? (
        <ul>
          {pageItems.map(c => (
            <li key={c.code}>
              <Card>
                <h3><a href={`/courses/${c.code}`}>{c.title}</a></h3>
                <p>{c.school}</p>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState message="No courses found." />
      )}
      <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
    </>
  );
};

export default CoursesList;
