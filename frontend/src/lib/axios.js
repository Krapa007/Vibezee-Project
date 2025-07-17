import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/api" // your local backend
    : "https://vibezee.onrender.com/api"; // your deployed Render backend

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, //sends cookies with the request
});
