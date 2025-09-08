import { onCLS, onFID, onLCP } from 'web-vitals';

export const logWebVitals = () => {
  onCLS(console.log);
  onFID(console.log);
  onLCP(console.log);
};
