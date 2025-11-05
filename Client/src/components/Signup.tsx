import React, { useState } from "react";
import { User, Phone, Mail, Lock, MapPin, Home, CreditCard, Eye, EyeOff, UserPlus, ArrowRight, Sparkles } from "lucide-react";

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

    try {
      const res = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      if (data.success) {
        onNavigate?.("login");
      }
    } catch (err) {
      alert("Something went wrong. Please try again later.");
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-4 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-300 to-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-red-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-5xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl mb-6 shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300">
            <UserPlus className="w-12 h-12 text-green" />
          </div>
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-3 tracking-tight">
            JanBudg
          </h1>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <p className="text-xl text-gray-600 font-medium">नागरिक सेवा पोर्टल</p>
            <Sparkles className="w-5 h-5 text-pink-500" />
          </div>
          <p className="text-gray-500 text-base max-w-md mx-auto">Join thousands of citizens accessing civic services at your fingertips</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-2">Create Your Account</h2>
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
                      <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(formData as any)[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl transition-all text-gray-700 placeholder-gray-400 bg-gray-50 focus:bg-white focus:outline-none ${
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
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3.5 pr-12 border-2 rounded-xl transition-all text-gray-700 bg-gray-50 focus:bg-white focus:outline-none ${
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
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors p-1"
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
                    <input
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
              <div className="flex items-start gap-3 p-5 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-100">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer flex-shrink-0"
                />
                <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                  I agree to the{" "}
                  <a href="/terms" className="text-orange-600 hover:text-orange-700 font-bold underline decoration-2">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-orange-600 hover:text-orange-700 font-bold underline decoration-2">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-8 rounded-2xl text-orange font-bold text-lg shadow-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all transform hover:scale-[1.02] hover:shadow-3xl active:scale-[0.98] flex items-center justify-center gap-3 group"
              >
                <span>Create My Account</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>

            {/* Login Redirect */}
            <div className="mt-8 text-center">
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
              <button
                type="button"
                onClick={() => onNavigate?.("login")}
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-bold text-lg transition-all hover:gap-3 group mt-2"
              >
                <span>Login here</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          © 2024 Nagar Nigam Raipur. All rights reserved.
        </p>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Signup