import PageHeader from '../components/PageHeader';
import Card from '../components/ui/Card';

const groups = [
  { title: 'AI Group', lead: 'Dr Alice Smith', blurb: 'Exploring artificial intelligence.' },
  { title: 'Sustainable Engineering', lead: 'Prof Bob Brown', blurb: 'Innovating for a greener future.' },
];

const Research = () => (
  <>
    <PageHeader title="Research" />
    <div className="grid">
      {groups.map(g => (
        <Card key={g.title}>
          <h3>{g.title}</h3>
          <p><strong>Lead:</strong> {g.lead}</p>
          <p>{g.blurb}</p>
        </Card>
      ))}
    </div>
  </>
);

export default Research;
