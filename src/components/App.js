import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import NavBar from './1-Nav/NavBar';
import { Suspense } from 'react';
import { Loader } from './Spiner/Spiner';
import Zoo from './MainComponents/DesktopComponents/3-Cases/1-DT-CasesZoo';
import Intericco from './MainComponents/DesktopComponents/3-Cases/2-DT-Interico';
import CashYou from './MainComponents/DesktopComponents/3-Cases/3-DT-CashYou';

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
          <Route path="/">
            <Route path="zoo" element={<Zoo />} />
            <Route path="*" />
            <Route path="intericco" element={<Intericco />} />
            <Route path="*" />
            <Route path="cashyou" element={<CashYou />} />
            <Route path="*" />
          </Route>
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
