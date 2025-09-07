import PageHeader from '../components/PageHeader';

const About = () => (
  <>
    <PageHeader title="About us" />
    <section>
      <h2>Mission</h2>
      <p>Our mission is to inspire and educate.</p>
    </section>
    <section>
      <h2>History</h2>
      <ul>
        <li>1900 – University founded</li>
        <li>1950 – First research institute established</li>
        <li>2000 – Campus expansion</li>
      </ul>
    </section>
    <section>
      <h2>Campus locations</h2>
      <img src="https://via.placeholder.com/600x300?text=Map+placeholder" alt="Map showing campus locations" />
    </section>
  </>
);

export default About;
