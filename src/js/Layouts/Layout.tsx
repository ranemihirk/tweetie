// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from "framer-motion";
import SideBar from "./SideBar";
import MainBody from "./MainBody";
import TopNav from "./TopNav";
import { AuthContext } from "./../contexts/AuthContext";

export default function Layout(): JSX.Element {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  console.log('isLargeScreen: ', isLargeScreen);
  const [open, setOpen] = useState<boolean>(isLargeScreen);
  const { user } = useContext(AuthContext);
  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="App min-h-screen max-h-screen min-w-screen max-w-screen">
      {user && <TopNav isOpen={open} />}
      <motion.div className="relative flex flex-row overflow-hidden">
        {user && <SideBar isOpen={open} handleOpen={setOpen} />}
        <MainBody isOpen={open} setOpen={setOpen} />
      </motion.div>
    </div>
  );
}
