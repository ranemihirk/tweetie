import React, { useContext } from "react";
import { AuthContext } from './../contexts/AuthContext';
import logo from "./../../assets/rmklogo.png";

export default function TopNav(): JSX.Element{
  const { user, setUser } = useContext(AuthContext);
  function handleLogout(){
    setUser(null);
  }
    return(
        <div className="navbar bg-base-100 bg-new-black text-new-white dark:bg-new-white dark:text-new-black">
            <div className="flex-1">
              {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered"
                />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={logo} alt='' />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 bg-new-black text-new-white"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    )
}