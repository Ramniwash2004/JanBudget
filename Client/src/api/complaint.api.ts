import axios from "axios";

const API_URL = "http://localhost:5000/api/complaints";

export interface ComplaintData {
  heading: string;
  title: "waste" | "electricity" | "water" | "other";
  description: string;
  location: string;
  wardNumber: number;
}

export const addComplaint = async (data: ComplaintData) => {
  const response = await axios.post(`${API_URL}/add`, data);
  return response.data;
};

export const getComplaints = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addCommentToComplaint = async (
  complaintId: string,
  text: string,
  author: string
) => {
  const response = await axios.post(`${API_URL}/${complaintId}/comment`, { text, author });
  return response.data;
};

export const getCommentsOfComplaint = async (complaintId: string) => {
  const response = await axios.get(`${API_URL}/${complaintId}/comments`);
  return response.data;
};

export const addLikeToComplaint = async (complaintId: string) => {
  const response = await axios.post(`${API_URL}/${complaintId}/like`);
  return response.data;
};

export const getLikesOfComplaint = async (complaintId: string) => {
  const response = await axios.get(`${API_URL}/${complaintId}/likes`);
  return response.data;
};
