import { Outlet } from 'react-router-dom';
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
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
