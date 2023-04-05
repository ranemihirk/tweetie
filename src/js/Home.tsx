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

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

async function getUser(){
  
  if(!responseStatus){
    const response = await axios.post(`${backendURL}`, user);
      console.log("response: ", response);
      setUser(response.data.user);
      responseStatus = true;
  }
}

  async function handleSubmit() {
    //Prevent page reload
    // event.preventDefault();

    var { uname, pass } = document.forms[0];

    console.log("login: ", uname.value, pass.value);
    const user = {
      username: uname.value,
      password: pass.value,
    };
    try {
      const response = await axios.post(`${backendURL}login`, user);
      console.log(response);
      setUser(response.data.user);
      console.log("user: ", user);
      <Navigate replace to="" />;
    } catch (error) {
      console.log(error);
    }
    // setErrorMessages({ name: "uname", message: errors.uname });
  };
  // getUser();
  return (
    <div className="Index">
      <h1>Index</h1>
      {/* <NavLink
        to="login"
        className="btn flex h-full w-full items-center justify-center rounded-lg px-2 py-1 hover:bg-dark/10 dark:hover:bg-light/10"
      >
        <h3>Login</h3>
      </NavLink> */}
{/* <div className="alert alert-error shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Error! Task failed successfully.</span>
  </div>
</div> */}
      <div className="hero mx-auto bg-base-200">
        <div
          className={`hero-content min-h-screen flex flex-row-reverse justify-evenly items-center bg-quote bg-center bg-fixed container mx-auto `}
        >
          <div className="text-center lg:text-left p-10 w-3/5">
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
                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer flex justify-around p-10 bg-neutral text-neutral-content">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
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

async function addUser() {
  const user = {
    user: {
      username: "ranemihirk",
      email: "rane204mihir@gmail.com",
      password: "testpassword",
      first_name: "Mihir",
      last_name: "Rane",
      profile_image: "",
      bio: "hey there",
      location: "Mumbai",
      website_url: "ranemihirk.com",
    },
  };

  try {
    const response = await axios.post(`${backendURL}createuser`, user);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
