import axios from "axios";

const instance = axios.create({
  baseURL: "https://diary-f20e0.firebaseio.com/",
});

export default instance;
