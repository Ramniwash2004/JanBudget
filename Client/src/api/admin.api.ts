// src/api/userApi.ts
// export interface SignupData {
//     name: string;
//     wardNumber: string;
//     fullAddress: string;
//     phoneNumber: string;
//     email: string;
//     voterId: string;
//     password: string;
//   }
  
  export interface LoginData {
    username: string;
    password: string;
    adminKey: string;
  }
  
  const API_URL = "http://localhost:5050/api/users";

  export const loginAdmin = async (data: LoginData) => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Login failed");
  
      localStorage.setItem("token", result.token);
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
