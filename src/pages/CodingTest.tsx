import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PageHeader from '../components/PageHeader';

const CodingTest = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/coding-test.md').then(res => res.text()).then(setContent);
  }, []);

  return (
    <>
      <PageHeader title="Coding test" />
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
};

export default CodingTest;
