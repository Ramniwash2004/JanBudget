import React, { useState } from "react";
import { User, Phone, Mail, Lock, MapPin, Home, CreditCard, Eye, EyeOff, UserPlus, ArrowRight, Sparkles } from "lucide-react";
import { signupUser } from "../api/user.api";
import { Button } from "./ui/button";
import {Input} from "./ui/input";
import {Form} from "./ui/form";
import { Label } from "./ui/label";
import { Toggle } from "./ui/toggle";

interface SignupProps {
  onNavigate?: (page: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: "",
    wardNumber: "",
    fullAddress: "",
    phoneNumber: "",
    email: "",
    voterId: "",
    password: "",
    confirmPassword: "",
    userType: "citizen",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

      // const res = await fetch("http://localhost:5000/api/users/signup", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      console.log("ok singup -> ", formData)

      const res = await signupUser(formData)

      // const data = await res.json();

      console.log("data -> ", res)
      const data = res
      console.log("data" , data)
      // alert(data.message);

      if (data.success) {
        onNavigate?.("login");
      }
  };

  const inputFields = [
    { name: "name", icon: User, label: "Full Name", placeholder: "Enter your full name", type: "text", colSpan: 2 },
    { name: "email", icon: Mail, label: "Email", placeholder: "your.email@example.com", type: "email", colSpan: 1 },
    { name: "phoneNumber", icon: Phone, label: "Phone", placeholder: "10-digit mobile number", type: "tel", colSpan: 1 },
    { name: "wardNumber", icon: MapPin, label: "Ward Number", placeholder: "Your ward number", type: "text", colSpan: 1 },
    { name: "voterId", icon: CreditCard, label: "Voter ID", placeholder: "Voter ID card number", type: "text", colSpan: 1 },
    { name: "fullAddress", icon: Home, label: "Full Address", placeholder: "Complete residential address", type: "text", colSpan: 2 },
  ];

  return (
    <div className="flex justify-center items-center flex-col min-h-screen px-6 py-12">
      
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-6xl font-extrabold mb-3 tracking-tight">
            JanBudget
          </h1>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <p className="text-xl text-gray-600 font-medium">नागरिक सेवा पोर्टल</p>
            <Sparkles className="w-5 h-5 text-pink-500" />
          </div>
          <p className="text-gray-500 text-base max-w-md mx-auto">Join thousands of citizens accessing civic services at your fingertips</p>
        </div>

        <div className=" rounded-3xl shadow-2xl  overflow-hidden p-6">
          <div className="p-8 text-secondary">
            <h2 className="text-3xl font-bold text-center mb-2 ">Create Your Account</h2>
            <p className="text-center text-orange-50">Fill in your details to get started</p>
          </div>

          {/* Form Section */}
          <div className="p-8 md:p-10">
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inputFields.map((field) => (
                  <div 
                    key={field.name} 
                    className={field.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"}
                  >
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                      <field.icon className="w-4 h-4 text-orange-500" />
                      {field.label}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                          focusedField === field.name
                            ? 'border-orange-500 ring-4 ring-orange-100 shadow-md'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Password Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                    <Lock className="w-4 h-4 text-orange-500" />
                    Password
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                        focusedField === 'password'
                          ? 'border-orange-500 ring-4 ring-orange-100 shadow-md'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400  transition-colors p-1"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 ml-1">Minimum 6 characters required</p>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                    <Lock className="w-4 h-4 text-orange-500" />
                    Confirm Password
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('confirmPassword')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3.5 pr-12 border-2 rounded-xl transition-all text-gray-700 bg-gray-50 focus:bg-white focus:outline-none ${
                        focusedField === 'confirmPassword'
                          ? 'border-orange-500 ring-4 ring-orange-100 shadow-md'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors p-1"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 ml-1">Must match the password above</p>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 p-6 ">
                <Input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer flex-shrink-0"
                />
                <Label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                  I agree to the{" "}
                  <a href="/terms" className="text-orange-600 hover:text-orange-700 font-bold underline decoration-2">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-orange-600 hover:text-orange-700 font-bold underline decoration-2">
                    Privacy Policy
                  </a>
                </Label>
              </div>

              {/* Submit Button */}
              <Button
               variant='default'
                type="submit"
                className="w-full py-4 px-8  flex items-center justify-center gap-3 group "
              >
                <span>Create My Account</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </form>

            {/* Login Redirect */}
            <div className="mt-8 text-center p-6">
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-6 bg-white text-sm font-medium text-gray-500">
                    Already have an account?
                  </span>
                </div>
              </div>
              <Button
              
              variant='secondary'
                type="button"
                onClick={() => onNavigate?.("login")}
                className="inline-flex items-center gap-2 text-white group mt-2"
              >
                <span>Login here</span>
                <Toggle className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          © 2024 Nagar Nigam Raipur. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Signup