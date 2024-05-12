import { NavLink, Outlet } from "react-router-dom";
import { menus } from "../constants/sidebar.constant";

export default function Sidebar() {  
  
  return (
    <main>
      <div className="flex bg-blue-600 w-screen h-[100%]">
        <section className="flex flex-col w-1/6 py-5 ml-8 mt-5">
          {menus?.map((menu) => (
            <NavLink
            key={menu.id}
              to={menu.link}
              className={({ isActive }) =>
                isActive ? menu.className.active : menu.className.Inactive
              }
            >
              {menu.title}
            </NavLink>
          ))}
        </section>
        <section className="w-5/6 h-[50rem] m-5">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
