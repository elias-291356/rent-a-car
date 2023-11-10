import { NavLink, Outlet } from "react-router-dom";
import { ContainerLayout, Items } from "./Layout.styled";
export const Layout = () => {
  return (
    <>
      <ContainerLayout>
        <header>
          <nav>
            <Items className="list">
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink to="catalog"> Catalog</NavLink>
              </li>
              <li>
                <NavLink to="favorites"> Favorites</NavLink>
              </li>
            </Items>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </ContainerLayout>
    </>
  );
};
