// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import logo from "./../assets/parallax-img.jpg";
import { backendURL } from "./../index";
let responseStatus = false;
export default function DefaultIndex(): JSX.Element {
  const [errorMessages, setErrorMessages] = useState({ name: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className="Index">
      <h1>Index</h1>
      
    </div>
  );
}
