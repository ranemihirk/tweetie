import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./../assets/rmklogo.png";
import Post from "./Post";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Profile(): JSX.Element {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="relative flex justify-between items-center mb-2">
        <div className="avatar p-2">
          <div className="w-40 rounded-full shadow-md">
            <img src={logo} alt="" />
          </div>
        </div>
        <button className="btn rounded-full">Edit profile</button>
      </div>
      <div className="mb-2">
        <h3 className="text-2xl font-bold">Mihir</h3>
        <p className="font-thin">@ranemihirk</p>
        <h4 className="font-semibold mt-4 mb-2">
          Computer Engineering Student
        </h4>
        <div className="flex text-sm font-thin mb-2">
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            Mumbai
          </div>
          <div className="ml-6">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-2" />
            Born January 16, 1995
          </div>
          <div className="ml-6">
            <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
            Joined October 2014
          </div>
        </div>
        <div className="flex text-sm font-thin">
          <div>
            <span className="font-bold mr-2">51</span>Following
          </div>
          <div className="ml-6">
            <span className="font-bold mr-2">105</span>Followers
          </div>
        </div>
      </div>
      <div className="tab-section">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Tweeties" {...a11yProps(0)} />
              <Tab label="Likes" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {new Array(7).fill(0).map((cell, idx) => (
              <Post />
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {new Array(4).fill(0).map((cell, idx) => (
              <Post />
            ))}
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
