import { apiClient } from "./apiClient";

export const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const createStream = async () => {
  const data = await apiClient(
    "/rooms",
    "POST",
    { authorization: AUTH_TOKEN },
    {}
  );

  return data.roomId;
};

export const getStreamDetails = async (roomId) => {
  return await apiClient(`/rooms/${roomId}`, "GET", {
    authorization: AUTH_TOKEN,
  });
};
