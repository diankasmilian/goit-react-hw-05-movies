import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation, NavList } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <header>
        <NavList>
          <Navigation to="/">Home</Navigation>
          <Navigation to="/movies">Movies</Navigation>
        </NavList>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
        
      </main>
    </div>
  );
};
export default Layout;
