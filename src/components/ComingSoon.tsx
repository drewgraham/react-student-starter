interface Props {
  feature: string;
}

const ComingSoon = ({ feature }: Props) => (
  <div role="status" aria-live="polite">
    <p>{feature} – coming soon.</p>
  </div>
);

export default ComingSoon;
