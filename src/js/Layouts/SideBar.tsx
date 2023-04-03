import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./../../assets/rmklogo.png";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'

type SideBarProps = {
  isOpen: boolean;
  handleOpen: any;
};

const sidebarMenu = [
  {
    title: "Home",
    link: "/",
    logo: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    title: "Explore",
    link: "/explore",
    logo: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    title: "Login",
    link: "/login",
    logo: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    title: "Register",
    link: "/register",
    logo: <FontAwesomeIcon icon={faHouse} />,
  },
];

export default function SideBar({
  isOpen,
  handleOpen,
}: SideBarProps): JSX.Element {

  function handleOpenSidebar() {
    handleOpen(!isOpen);
  }
  return (
    <motion.div
      className="sidebar flex flex-col bg-new-black text-new-white dark:bg-new-white dark:text-new-black"
      initial={{ width: "5vw", opacity: 0 }}
      animate={{
        opacity: 1,
        width: isOpen ? "20vw" : "5vw",
      }}
      transition={{ duration: 0.25 }}
    >
      <div>
        <Link
          to={"/"}
          title={`Tweetie Logo`}
          className={`mx-auto my-2 inline-flex h-full max-h-12 w-fit cursor-pointer justify-center xl:max-h-12`}
        >
          <img
            src={logo}
            alt="Logo"
            loading={"lazy"}
            className="object-contain rounded-full"
          />
        </Link>
      </div>
      <ul className="menu bg-new-black w-full">
        {sidebarMenu.map((menu) => (
          <li>
            <NavLink
              to={menu.link}
              className="btn flex self-start w-full items-center justify-center rounded-lg px-2 py-1 hover:bg-dark/10 dark:hover:bg-light/10"
            >
				<div className="h-6 w-6">{menu.logo}</div>
				{isOpen && <div className="grow text-left">{menu.title}</div>}
            </NavLink>
          </li>
        ))}
        <li>
          <button
            className="bg-dark dark:bg-light text-light dark:text-dark rounded p-2 ml-5"
            onClick={handleOpenSidebar}
          >
            Open
          </button>
        </li>
      </ul>
    </motion.div>
  );
}
