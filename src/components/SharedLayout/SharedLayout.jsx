import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header'; // Adjust the path if needed
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import { Footer } from 'components/Footer/Footer'; // Adjust the path if needed

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
