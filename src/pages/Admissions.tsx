import PageHeader from '../components/PageHeader';
import Button from '../components/ui/Button';
import { featureFlags } from '../utils/featureFlags';

const Admissions = () => (
  <>
    <PageHeader title="Admissions" />
    <p>Learn how to apply to our university.</p>
    {featureFlags.apply ? <Button>Apply now</Button> : <Button disabled>Apply now</Button>}
    {!featureFlags.apply && <p>Application form – coming soon.</p>}
  </>
);

export default Admissions;
