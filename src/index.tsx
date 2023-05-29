import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthContext } from "./js/contexts/AuthContext";
import useLocalStorage from "./js/hooks/useLocalStorage";
import reportWebVitals from "./reportWebVitals";
const MyRouter = lazy(() => import(/* webpackChunkName: "VidtuRouter" */ './router'));

export const backendURL = "http://localhost:4000/"; // "https://tweetie-backend.vercel.app/";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const [user, setUser] = useLocalStorage('user', null); // pass string to force-enable logged-in UI

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Suspense fallback={<>...</>}>
        <MyRouter />
      </Suspense>
    </AuthContext.Provider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
