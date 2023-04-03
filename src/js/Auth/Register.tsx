import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../contexts/AuthContext";
import { Navigate, NavLink } from "react-router-dom";

export default function Register(): JSX.Element {
  const [errorMessages, setErrorMessages] = useState({ name: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = async () => {
    //Prevent page reload
    // event.preventDefault();

    var { uname, pass } = document.forms[0];

    console.log("login: ", uname.value, pass.value);
    const user = {
      username: uname.value,
      password: pass.value,
    };
    try {
      const response = await axios.post("http://localhost:3001/login", user);
      console.log(response);
      setUser(response.data.user);
      console.log("user: ", user);
      <Navigate replace to="" />;
    } catch (error) {
      console.log(error);
    }
    // setErrorMessages({ name: "uname", message: errors.uname });
  };

  return (
    <div className="h-full">
      <div className="form flex flex-wrap justify-center items-center h-full">
      <NavLink
        to="/login"
        className="btn flex self-start w-full items-center justify-center rounded-lg px-2 py-1 hover:bg-dark/10 dark:hover:bg-light/10"
      >
        <h3>Login</h3>
      </NavLink>
        <form className="" onSubmit={handleSubmit}>
            <h3 className="text-center text-3xl font-bold">Register</h3>
          <div className="input-container my-6">
            <input type="text" name="uname" placeholder="UserName" required />
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container my-6">
            <input
              type="password"
              name="pass"
              placeholder="Password"
              required
            />
            {/* {renderErrorMessage("pass")} */}
          </div>
          <div className="button-container text-center">
            <input
              type="submit"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

