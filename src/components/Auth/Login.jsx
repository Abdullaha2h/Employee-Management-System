import React, { useState } from "react";
import Button from "../Others/Button";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Email is", email);
    console.log("Password is", password);
  };

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <h1
        className="text-4xl font-bold text-white mb-8 tracking-wide"
        style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.4)" }}
      >
        Sign in
      </h1>

      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center mx-5 space-y-5"
      >
        <div className="backdrop-blur-md bg-white/20 rounded-lg p-10 shadow-lg border border-white/30 space-y-5">
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 outline-none backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-blue-500"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 outline-none backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        


        <Button text="Login"></Button>
        <div className="text-sm text-white  p-4 max-w-md text-center ">
  <p className="font-semibold mb-2 text-yellow-300">Demo Access Notice</p>
  <p className="text-white/90">
    Account creation is currently disabled. Please use the following demo credentials to explore the platform:
  </p>
 <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">

    <p>
      <span className="text-blue-300 font-medium">Admin</span><br />
      <span className="ml-2">Email:</span> <span className="text-white">admin@company.com</span> <br />
      <span className="ml-2">Password:</span> <span className=" font-semibold">123</span>
    </p>
    <p>
      <span className="text-blue-300 font-medium">Employee</span><br />
      <span className="ml-2">Email:</span> <span className="text-white">zain@company.com</span> <br />
      <span className="ml-2">Password:</span> <span className=" font-semibold">123</span>
    </p>
  </div>
</div>
      </form>
    </div>
  );
};

export default Login;
