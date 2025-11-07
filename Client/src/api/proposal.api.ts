const API_URL = "http://localhost:5050/api/proposals";

const getToken = () => localStorage.getItem("token");

export const addProposal = async (data: any) => {
  const token = getToken();
  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.message);
  return result;
};

export const getProposals = async () => {
  const res = await fetch(`${API_URL}/all`);
  const result = await res.json();
  if (!res.ok) throw new Error(result.message);
  return result;
};

export const addCommentOnProposal = async (proposalId: string, comment: string) => {
  const token = getToken();
  const res = await fetch(`${API_URL}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ proposalId, comment }),
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.message);
  return result;
};

/**
 * 💭 Get comments
 */
export const getCommentsOnProposal = async (proposalId: string) => {
  const res = await fetch(`${API_URL}/comments/${proposalId}`);
  const result = await res.json();
  if (!res.ok) throw new Error(result.message);
  return result;
};

export const getLikesOnProposal = async (proposalId: string) => {
  const res = await fetch(`${API_URL}/likes/${proposalId}`);
  const result = await res.json();
  if (!res.ok) throw new Error(result.message);
  return result;
};

export const addLikeOnProposal = async (proposalId: string) => {
  const res = await fetch(`${API_URL}/like`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ proposalId }),
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.message);
  return result;
};
