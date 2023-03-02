import axios from "axios";

const baseURL = "http://localhost:3000";

export const apiAnnouncement = axios.create({
  baseURL: baseURL + "/announcement",
});

export const apiUser = axios.create({
  baseURL: baseURL + "/user",
});
