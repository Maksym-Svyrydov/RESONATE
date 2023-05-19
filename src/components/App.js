import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import NavBar from './1-Nav/NavBar';
import { Suspense } from 'react';
import { Loader } from './Spiner/Spiner';

const Main = lazy(() => import('../pages/main/Main'));
const Blog = lazy(() => import('../pages/blog/Blog'));
const Privacy = lazy(() => import('../pages/privacy-policy/Privacy'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Main />} />
          <Route path="*" />
          <Route path="blog" element={<Blog />} />
          <Route path="*" />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
