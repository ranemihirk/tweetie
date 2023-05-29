// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useContext, FormHTMLAttributes, useRef } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from "axios";
import { motion } from "framer-motion";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import logo from "./../assets/logo-white.png";
import logot from "./../assets/logo-t-white.png";
import { backendURL } from "./../index";

let responseStatus = false;
const alertClassState = {
  none: "hidden",
  success: "alert alert-success",
  error: "alert alert-info",
};

export default function DefaultIndex(): JSX.Element {
	const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const { user, setUser } = useContext(AuthContext);
  const [alertClass, setAlertClass] = useState(alertClassState.none);
  const userAlertRef = useRef(null);

  const userData = {
    username: "ranemihirk",
    email: "rane204mihir@gmail.com",
    password: "testpassword",
    first_name: "Mihir",
    last_name: "Rane",
    profile_image: "",
    bio: "hey there",
    location: "Mumbai",
    website_url: "ranemihirk.com",
    createdAt: "Tue Mar 14 2023 16:49:17 GMT+0530 (India Standard Time)",
    updatedAt: "Tue Mar 14 2023 16:49:17 GMT+0530 (India Standard Time)",
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("handleSubmit: ", event);
    const { uname, pass } = document.forms[0];
    console.log("form data: ", uname.value, pass.value);

    if (uname.value === "ranemihirk" && pass.value === "testpassword") {
      setUser(userData);
      //   userAlertRef.current
    } else {
      setAlertClass(alertClassState.error);
      setTimeout(() => setAlertClass(alertClassState.none), 3000);
    }
  };

  return (
    <div className="Index min-h-screen flex flex-wrap items-stretch">
      <div className="toast toast-top toast-end">
        <div className={alertClass}>User not found.</div>
      </div>

      <div className="flex w-full justify-center py-4 bg-new-black">
        <img src={logo} alt="" className="w-40 h-auto object-contain" />
      </div>

      <div className="hero mx-auto bg-base-200">
        <div
          className={`hero-content h-full flex ${!isLargeScreen && "flex-wrap"} flex-row-reverse justify-evenly items-center bg-quote bg-center bg-fixed container mx-auto `}
        >
          <div className={`text-center lg:text-left ${isLargeScreen ? "p-10 w-3/5" : "p-4"}`}>
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6 rounded-2xl">
            <div className="card-body">
              <form className="" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="uname"
                    placeholder="UserName"
                    required
                  />
                  {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    placeholder="Password"
                    required
                  />
                  {/* {renderErrorMessage("pass")} */}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-new-black text-new-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer flex justify-around items-center p-4 bg-new-black text-new-white">
        <div>
          <img src={logot} alt="" className="w-8" />
          <p>
            Tweetie Ltd.
            <br />A Mihir Rane Production.
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
