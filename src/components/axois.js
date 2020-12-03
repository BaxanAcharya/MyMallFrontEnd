import axois from "axios";
const instance = axois.create({
  baseURL: "http://localhost:3010/",
});
export default instance;
