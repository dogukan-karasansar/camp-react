import axios from "axios";

export default class ProductService {
  getProducts = () => {
    return axios.get("http://localhost:90/api/products/getall");
  };
}
