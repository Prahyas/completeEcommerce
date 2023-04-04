import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjM4NjkzMDhhMTY3MzZjNzkxYzE5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDYyMzg0OCwiZXhwIjoxNjgxNDg3ODQ4fQ.uw4RUIs2oYoDQ7SQ6QJDdQdIX_sWwrVNqQEmIg4D2No";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
