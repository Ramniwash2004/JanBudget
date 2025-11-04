import React, { useState } from "react";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    wardNumber: "",
    fullAddress: "",
    phoneNumber: "",
    email: "",
    voterId: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form
        onSubmit={handleSignup}
        className="bg-orange-100 shadow-md rounded-xl p-8 w-[28rem]"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          JanBudg Signup
        </h2>

        {Object.keys(formData).map((key) => (
          <input
            key={key}
            name={key}
            type={key === "password" ? "password" : "text"}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={(formData as any)[key]}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-md"
          />
        ))}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
