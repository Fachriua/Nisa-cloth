import { Outlet,Link } from "react-router-dom";
import '../index.css';
import logo from '../assets/image/nisalogo.png';

function MainLayout() {
    return(
    <>
    <div className="navbar bg-base-100">
        <div className="navbar-start ml-6">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/">Home</Link></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
            <img src={logo} alt="" className="h-8 w-18" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
            <li>
              <details>
                <summary><Link to="products">Products</Link></summary>
                <ul className="p-2">
                  <li><Link to="wtops">Tops</Link></li>
                  <li><Link to="Bottoms">Bottoms</Link></li>
                </ul>
              </details>
            </li>
            <li><Link to="about">About</Link></li>
          </ul>
        </div>
        <div className="navbar-end mr-6">
          <a className="btn btn-ghost btn-xs btn-outline rounded-full md:btn-sm lg:btn-sm">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
          </svg>
          Login
          </a>
        </div>
      </div>
      <div className="box-content h-auto w-90% p-10 mx-10 justify-center">
      <Outlet/>
      </div>
      </>
    )
}

export default MainLayout;