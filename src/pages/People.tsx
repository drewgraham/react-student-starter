import { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/ui/Card';
import Select from '../components/ui/Select';

interface Person {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
}

const People = () => {
  const [items, setItems] = useState<Person[]>([]);
  const [department, setDepartment] = useState('');

  useEffect(() => {
    fetch(`${window.location.origin}/api/people`)
      .then(res => res.json())
      .then(setItems);
  }, []);

  const filtered = department ? items.filter(p => p.department === department) : items;

  return (
    <>
      <PageHeader title="People" />
      <label>
        Department
        <Select value={department} onChange={e => setDepartment(e.target.value)}>
          <option value="">All</option>
          <option value="Computing">Computing</option>
          <option value="Engineering">Engineering</option>
          <option value="Arts">Arts</option>
        </Select>
      </label>
      <div className="grid">
        {filtered.map(p => (
          <Card key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.role}</p>
            <p><a href={`mailto:${p.email}`}>{p.email}</a></p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default People;
