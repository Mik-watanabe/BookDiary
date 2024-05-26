"use client";
import axios from "axios";
import { useState } from "react";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    if (username.length == 0) {
      alert("Username cannot be empty!");
      return;
    }
    if (password.length < 8) {
      alert("The password must be at least 8 characters!");
      return;
    }
    axios({
      method: "post",
      url: "/user",
      data: {
        username: username,
        password: password,
      },
    });
  };
  return (
    <div className="text-black">
      <div className="h-[200px] flex flex-col justify-between items-center">
        <h1 className="text-xl text-white">Sign up</h1>
        <label htmlFor="username">Username</label>
        <input name="username" onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input name="password" onChange={(e) => setPassword(e.target.value)} />
        <button
          className="bg-blue-500 border-[2px] border-red-400"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
