import axios from "axios";

const instance = axios.create({
  baseURL: "http://18.196.226.66:8000/sans/alpha",
});
export default instance;
