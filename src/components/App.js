import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import NavBar from './1-Nav/NavBar';
import { Suspense } from 'react';
const Main = lazy(() => import('../pages/main/Main'));
const Blog = lazy(() => import('../pages/blog/Blog'));
const Privacy = lazy(() => import('../pages/privacy-policy/Privacy'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path="/">
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
