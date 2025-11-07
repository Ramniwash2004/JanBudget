import React, { useState } from "react";
import { loginUser } from "../api/user.api";
import { loginAdmin } from "../api/admin.api";
import { Button } from "./ui/button";

interface LoginProps {
  onLoginSuccess?: () => void;
  onNavigate?: (page: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<"citizen" | "admin">("citizen");

  // Citizen login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Admin login state
  const [adminName, setAdminName] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  // Citizen Login Handler
  const handleCitizenLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = { email, password };
      const res = await loginUser(payload);
      if (res.success) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        window.dispatchEvent(new Event("authChange"));
        onLoginSuccess?.();
      }
    } catch (error) {
      alert("Citizen login failed. Try again later.");
    }
  };

  // Admin Login Handler
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = { username: adminName, adminKey, password: adminPassword };
      const res = await loginAdmin(payload);

      if (res.success) {
        localStorage.setItem("adminToken", res.token);
        localStorage.setItem("admin", JSON.stringify(res.admin));
        window.dispatchEvent(new Event("authChange"));
        onNavigate?.('admin');
      }
    } catch (error) {
      alert("Admin login failed. Try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen px-6 py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-6">
          Login
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === "citizen"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("citizen")}
          >
            Citizen Login
          </button>

          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === "admin"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("admin")}
          >
            Admin Login
          </button>
        </div>

        {/* ---------------------- CITIZEN LOGIN FORM ---------------------- */}
        {activeTab === "citizen" && (
          <form
            onSubmit={handleCitizenLogin}
            className="bg-orange-100 shadow-md rounded-xl p-8 w-96"
          >
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

            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>
          </form>
        )}

        {/* ---------------------- ADMIN LOGIN FORM ---------------------- */}
        {activeTab === "admin" && (
          <form
            onSubmit={handleAdminLogin}
            className="bg-orange-100 shadow-md rounded-xl p-8 w-96"
          >
            <input
              type="text"
              placeholder="Admin Username"
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Admin Key"
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
            />

            <Button type="submit" className="w-full cursor-pointer">
              Login as Admin
            </Button>
          </form>
        )}

        {/* Signup link */}
        {activeTab === "citizen" && (
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
)}
      </div>
    </div>
  );
};
