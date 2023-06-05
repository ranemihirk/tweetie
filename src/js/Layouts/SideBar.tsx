import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./../../assets/rmklogo.png";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faBell, faEnvelope, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons";

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
    link: "/",
    logo: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
  {
    title: "Notification",
    link: "/",
    logo: <FontAwesomeIcon icon={faBell} />,
  },
  {
    title: "Messages",
    link: "/",
    logo: <FontAwesomeIcon icon={faEnvelope} />,
  },
  {
    title: "Profile",
    link: "/ranemihirk",
    logo: <FontAwesomeIcon icon={faUser} />,
  },
  {
    title: "More",
    link: "/",
    logo: <FontAwesomeIcon icon={faEllipsis} />,
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
      className="sidebar flex flex-wrap flex-1 bg-new-black text-new-white dark:bg-new-white dark:text-new-black"
      initial={{ width: "auto", opacity: 0, }}
      animate={{
        opacity: 1,
        width: isOpen ? "20vw" : "auto",
        minWidth: isOpen ? "20vw" : "auto",
        maxWidth: isOpen ? "20vw" : "auto",
      }}
      transition={{ duration: 0.25 }}
    >
      <div className="bg-new-black w-full">
        {sidebarMenu.map((menu, i) => (
          <NavLink
            to={menu.link}
            className="flex self-start w-full items-center justify-center px-4 py-4 hover:bg-new-white hover:text-new-black dark:hover:bg-new-black ease-in-out duration-300"
            key={i}
          >
            <div className="h-6 w-6">{menu.logo}</div>
            {isOpen && <div className="grow text-left ml-4">{menu.title}</div>}
          </NavLink>
        ))}
      </div>
	  <div className={`self-end text-center w-full mb-4 ${!isOpen && "hidden"}`}>
		A Mihir Rane Production.
	  </div>
    </motion.div>
  );
}
