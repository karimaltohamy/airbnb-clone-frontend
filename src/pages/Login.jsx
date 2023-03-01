import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { mainContext } from "../context/mainContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, serRedirct] = useState(false);
  const { setUser } = useContext(mainContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      alert("login successful");
      serRedirct(true);
    } catch (error) {
      alert("login failed");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex grow items-center justify-center flex-col mb-64 px-4">
      <h1 className="text-4xl mb-6">Login</h1>
      <form className="flex flex-col w-full max-w-md" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="your@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="mt-3 btn-primary ">
          Login
        </button>
        <p className="mt-3 text-gray-400 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-black">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
