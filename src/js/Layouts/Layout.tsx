// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import SideBar from "./SideBar";
import MainBody from "./MainBody";
import { AuthContext } from "./../contexts/AuthContext";

export default function Layout(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const { user } = useContext(AuthContext);
  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="App">
      <motion.div className="relative flex flex-row min-h-screen max-h-screen min-w-screen max-w-screen overflow-hidden">
        {user && <SideBar isOpen={open} handleOpen={setOpen} />}
        <MainBody isOpen={open} setOpen={setOpen} />
      </motion.div>
    </div>
  );
}
