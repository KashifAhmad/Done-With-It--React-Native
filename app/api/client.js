import { create } from "apisauce";
const apiClient = create({
  baseURL: "https://reqres.in/api/",
});
export default apiClient;
