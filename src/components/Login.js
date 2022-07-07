import React from "react";
import { login, logout } from "../features/user";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(login({ name: "Gluay", age: 80, email: "gluay@gmail.com" }));
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Login;
