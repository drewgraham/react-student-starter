import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses/CoursesList'));
const CourseDetail = lazy(() => import('./pages/Courses/CourseDetail'));
const Research = lazy(() => import('./pages/Research'));
const NewsList = lazy(() => import('./pages/News/NewsList'));
const NewsDetail = lazy(() => import('./pages/News/NewsDetail'));
const People = lazy(() => import('./pages/People'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Contact = lazy(() => import('./pages/Contact'));
const CodingTest = lazy(() => import('./pages/CodingTest'));
const Portal = lazy(() => import('./pages/Portal'));
const Staff = lazy(() => import('./pages/Staff'));
const NotFound = lazy(() => import('./pages/NotFound'));
const SearchResults = lazy(() => import('./pages/SearchResults'));

const App = () => (
  <Layout>
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:code" element={<CourseDetail />} />
        <Route path="/research" element={<Research />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:slug" element={<NewsDetail />} />
        <Route path="/people" element={<People />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coding-test" element={<CodingTest />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Layout>
);

export default App;
