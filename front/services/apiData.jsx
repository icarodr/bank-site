import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const createSession = async(email, password) => {
  let data = {"email":email, "password":password}
  return api.post('/usuarios/', data);
};

export const logar = async(email, password) => {
  return api.get("/usuarios/" + email, { email, password } );
};