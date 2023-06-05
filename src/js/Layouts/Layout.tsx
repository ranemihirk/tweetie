// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import SideBar from "./SideBar";
import MainBody from "./MainBody";
import TopNav from "./TopNav";
import { AuthContext } from "./../contexts/AuthContext";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

export default function Layout(): JSX.Element {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  console.log("isLargeScreen: ", isLargeScreen);
  const [open, setOpen] = useState<boolean>(isLargeScreen);
  const { user } = useContext(AuthContext);
  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="App flex flex-col min-h-screen max-h-screen min-w-screen max-w-screen">
      {user && <TopNav isOpen={open} />}
      <motion.div className="relative flex flex-row flex-1 overflow-hidden">
        {user && <SideBar isOpen={open} handleOpen={setOpen} />}
        <div className="flex h-full">
          <div className="lg:w-2/3 border-r-2 p-2 lg:p-4">
            <MainBody isOpen={open} setOpen={setOpen} />
          </div>
          <div className="lg:w-1/3 p-4 hidden md:block">
            <div className="shadow-md rounded-md p-4">
              <h4 className="text-xl font-bold mb-2">Who to follow</h4>
              {new Array(3).fill(0).map((cell, idx) => (
                <div className="flex justify-between rounded-md ease-in-out duration-300 px-2 py-3 hover:bg-gray-100">
                  <div className="flex items-center">
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      MR
                    </Avatar>
                    <div className="ml-2">
                      <h5 className="font-semibold">Mihir Rane</h5>
                      <p>@ranemihirk</p>
                    </div>
                  </div>
                  <button className="bg-new-black text-new-white rounded-full px-4 ease-in-out duration-300 hover:bg-gray-800">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
