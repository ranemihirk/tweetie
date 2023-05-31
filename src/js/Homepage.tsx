// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "./contexts/AuthContext";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faAngleDown,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

let responseStatus = false;

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
      <div className="flex h-full">
        <div className="w-2/3 border-r-2 p-4">
          {new Array(7).fill(0).map((cell, idx) => (
            <Card sx={{ marginBottom: "1rem" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {idx}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FontAwesomeIcon icon={faHeart} />
                </IconButton>
                <IconButton aria-label="share">
                  <FontAwesomeIcon icon={faShareNodes} />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>
        <div className="w-1/3 p-4">
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
    </div>
  );
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
