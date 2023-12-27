import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Layout/AuthPage/Login";
import Register from "./Layout/AuthPage/Register";
import Continue from "./Layout/AuthPage/Continue";
import CreateAnAcc from "./Layout/AuthPage/CreateAnAcc";
import ConfirmPassword from "./Layout/AuthPage/ConfirmPassword";
import CheckEmail from "./Layout/AuthPage/CheckEmail";
import ForgotPassword from "./Layout/AuthPage/ForgotPassword";
import Congratulation from "./Layout/AuthPage/Congratulation";
import Main from "./components/Main";
import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Settings from './components/Settings/DateBirthday/Settings'
import Billings from "./components/Settings/Billings/Billings";
import Profile from "./Layout/AuthPage/Profile";
import { auth } from "./firebase/firebase";

function App() {
  const [user, setUser] = useState("");
  auth.onAuthStateChanged((user) => {
    setUser(user);
  });
  console.log(user);
  const nonAuthUser = [
    { id: 1, element: <Main />, path: "/" },
    { id: 2, element: <Login />, path: "/login" },
    { id: 3, element: <Register />, path: "/register" },
    { id: 4, element: <Continue />, path: "/continue" },
    { id: 5, element: <CreateAnAcc />, path: "/registasion" },
    { id: 6, element: <ForgotPassword />, path: "/forgotPassword" },
    { id: 7, element: <ConfirmPassword />, path: "/confirmPassword" },
    { id: 8, element: <CheckEmail />, path: "/checkEmail" },
    { id: 9, element: <CreateAnAcc />, path: "/congratulation" },
  ];
  const afterAuth = [
    // {id:1, path:"/", element:<Main/>},
    { id: 1, path: "/", element: <Profile /> },
    { id: 2, path: "/qwerty", element: <Billings /> },
    { id: 3, path: "/about", element: <About /> },
    { id: 4, path: "/contact", element: <Contact /> },
    { id: 5, path: "/profile", element: <Profile /> },
  ];
  return (
    <div>
      <Routes>
        {user
          ? afterAuth.map((route) => (
              <Route path={route.path} element={route.element} key={route.id} />
            ))
          : nonAuthUser.map((route) => (
              <Route path={route.path} element={route.element} key={route.id} />
            ))}
        {/* user login qilib kirgandan keyin PrivateRoute bilan profilini ulash kerak! */}
      </Routes>
    </div>
  );
}

export default App;
