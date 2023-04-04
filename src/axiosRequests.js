import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjM4NjkzMDhhMTY3MzZjNzkxYzE5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDU0NDY3NCwiZXhwIjoxNjgxNDA4Njc0fQ.bEsYlZGFV4HM5gBH46edO-fvYPHuO3m_kkK-pXdGjZs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  token: `Bearer ${TOKEN}`,
});
