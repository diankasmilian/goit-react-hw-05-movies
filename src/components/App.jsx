import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink>Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<div>Home page</div>} />
      </Routes>
    </div>
  );
};
