import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="catalog"> Catalog</NavLink>
            </li>
            <li>
              <NavLink to="favorites"> Favorites</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
