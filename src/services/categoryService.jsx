import axios from "axios";

export default class CategoryService {
  addCategory = (categoryName, description, image) => {
    const formData = new FormData();
    formData.append("categoryName", categoryName);
    formData.append("description", description);
    formData.append("multipartFile", image);
    return axios.post("http://localhost:90/api/categories/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
}
