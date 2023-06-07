// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Post from "./Post";

export default function DefaultIndex(): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="Index h-full">
      <Helmet>
        <title>Home | Tweetie</title>
      </Helmet>
      <div>
        <div className="p-2 m-4 shadow-md rounded text-end">
          <textarea
            className="textarea textarea-bordered w-full resize-none overflow-hidden overflow-y-auto border-1 p-2 focus:shadow-none focus:border-transparent focus:ring-offset-0 focus:ring-transparent focus:ring-offset-transparent h-20 lg:h-40"
            placeholder="Tweetie me..."
          ></textarea>
          <button className="btn mt-2 w-40 rounded-full">Tweetie</button>
        </div>
      </div>
      {new Array(7).fill(0).map((cell, idx) => (
        <Post />
      ))}
    </div>
  );
}
