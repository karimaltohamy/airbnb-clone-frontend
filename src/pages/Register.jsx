import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/register", {
        username,
        email,
        password,
      });
      setUserName("");
      setEmail("");
      setPassword("");
      navigate("/login");
      alert("Registeration successful. now you can login");
    } catch (error) {
      console.log(error);
      alert("Registeration faield. please try again");
    }
  };

  return (
    <div className="flex grow items-center justify-center flex-col mb-64 px-4">
      <h1 className="text-4xl mb-6">Register</h1>
      <form className="flex flex-col w-full max-w-md" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="mb-2"
        />
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
        <button type="submit" className="mt-3 btn-primary">
          Register
        </button>
        <p className="mt-3 text-gray-400 text-center">
          Already member?{" "}
          <Link to="/login" className="text-black">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
