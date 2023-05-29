import React, { useContext } from "react";
import { AuthContext } from "./../contexts/AuthContext";
import { NavLink, Link } from "react-router-dom";
import logo from "./../../assets/rmklogo.png";
import logot from "./../../assets/logo-white.png";
import logotmobile from "./../../assets/logo-t-white.png";

type TopBarProps = {
  isOpen: boolean;
};

export default function TopNav({
  isOpen,
}: TopBarProps): JSX.Element {
  const { user, setUser } = useContext(AuthContext);
  function handleLogout() {
    setUser(null);
  }
  return (
    <div className="navbar flex justify-between bg-base-100 bg-new-black text-new-white dark:bg-new-white dark:text-new-black shadow-md shadow-new-white">
      <div className="">
        <Link
          to={"/"}
          title={`Tweetie Logo`}
          className={`my-2 inline-flex h-full max-h-12 cursor-pointer justify-center xl:max-h-8`}
        >
          <img
            src={isOpen ? logot : logotmobile}
            alt="Logo"
            loading={"lazy"}
            className="object-left object-contain"
          />
        </Link>
      </div>
      <div className="gap-2">
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
              <img src={logo} alt="" />
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
  );
}
