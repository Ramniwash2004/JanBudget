import React, { useState } from "react";
import { loginUser } from "../api/user.api";
import {Button} from './ui/button';
import { Link } from "lucide-react";

interface LoginProps {
  onLoginSuccess?: () => void;
  onNavigate?: (page: string) => void;
}


export const Login: React.FC<LoginProps> = ({ onLoginSuccess, onNavigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // const res = await fetch("http://localhost:5000/api/users/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password }),
      // });

      const s = { email, password }
      const res = await loginUser(s)

      // const data = await res.json();
      const data = res
      console.log("Login response:", data);

      // alert(data.message || "Login attempt finished.");

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.dispatchEvent(new Event("authChange"));
        onLoginSuccess?.();
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen px-6 py-12 lg:px-8">
      <div className=" sm:mx-auto sm:w-full sm:max-w-sm ">
        <h2 className="mt-10 text-3xl font-extrabold text-center tracking-tight text-orange-600 mb-8">
          Login
        </h2>
      
       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleLogin} className="bg-orange-100 shadow-md rounded-xl p-8 w-96">
       
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          type="submit" className="w-full cursor-pointer"
        >
          Login
        </Button>
        </form>
        </div>


        {/* Signup link */}
        <div className="text-center mt-4">
          <p className="text-gray-700 text-sm">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => onNavigate?.("signup")}
              className="text-orange-600 font-semibold hover:underline"
            >
              Sign up here
            </button>
          </p>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-700 text-sm">
            Are you an admin?{" "}
            <button
              type="button"
              onClick={() => onNavigate?.("admin")}
              className="text-orange-600 font-semibold hover:underline "
            >
              Login here
            </button>
          </p>
        </div>
        </div>
    </div>
  );

}
