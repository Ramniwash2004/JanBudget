// src/api/userApi.ts
import axios from "axios";

export interface SignupData {
  name: string;
  wardNumber: string;
  fullAddress: string;
  phoneNumber: string;
  email: string;
  voterId: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

// ✅ Base URL for backend API
const API_URL = "http://localhost:5050/api/users";

// ✅ Create Axios instance
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Important if your backend uses `credentials: true`
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Signup user
export const signupUser = async (data: SignupData) => {
  try {
    const res = await api.post("/signup", data);
    const result = res.data;

    // Store JWT token if backend returns it
    if (result.token) localStorage.setItem("token", result.token);

    return result;
  } catch (error: any) {
    const message =
      error.response?.data?.message || "Signup failed. Please try again.";
    throw new Error(message);
  }
};

// ✅ Login user
export const loginUser = async (data: LoginData) => {
  try {
    const res = await api.post("/login", data);
    const result = res.data;

    // Store token
    if (result.token) localStorage.setItem("token", result.token);

    return result;
  } catch (error: any) {
    const message =
      error.response?.data?.message || "Login failed. Please try again.";
    throw new Error(message);
  }
};

// ✅ Get user details
export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found. Please login first.");

    const res = await api.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || "Failed to fetch user details.";
    throw new Error(message);
  }
};












// // src/api/userApi.ts
// export interface SignupData {
//     name: string;
//     wardNumber: string;
//     fullAddress: string;
//     phoneNumber: string;
//     email: string;
//     voterId: string;
//     password: string;
//   }
  
//   export interface LoginData {
//     email: string;
//     password: string;
//   }
  
//   const API_URL = "http://localhost:5050/api/users";

//   export const signupUser = async (data: SignupData) => {
//     try {
//       const res = await fetch(`${API_URL}/signup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//         credentials: "include",
//       });
  
//       const result = await res.json();
//       if (!res.ok) throw new Error(result.message || "Signup failed");
  
//       localStorage.setItem("token", result.token);
//       return result;
//     } catch (error: any) {
//       throw new Error(error.message);
//     }
//   };
  

//   export const loginUser = async (data: LoginData) => {
//     try {
//       const res = await fetch(`${API_URL}/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//         credentials: "include",
//       });
  
//       const result = await res.json();
//       if (!res.ok) throw new Error(result.message || "Login failed");
  
//       localStorage.setItem("token", result.token);
//       return result;
//     } catch (error: any) {
//       throw new Error(error.message);
//     }
//   };

//   export const getUser = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) throw new Error("No token found. Please login first.");
  
//       const res = await fetch(`${API_URL}/me`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       const result = await res.json();
//       if (!res.ok) throw new Error(result.message || "Failed to fetch user");
  
//       return result;
//     } catch (error: any) {
//       throw new Error(error.message);
//     }
//   };
  