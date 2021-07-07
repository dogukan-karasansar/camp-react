import React from "react";
import { useState } from "react";
import CategoryService from "../services/categoryService";

const AddCategory = () => {
  const [categoryName, setcategoryName] = useState(null);
  const [description, setdescription] = useState(null);
  const [image, setimage] = useState(null);

  const save = (categoryName, description, image) => {
    let categoryService = new CategoryService();
    categoryService
      .addCategory(
        categoryName.target.value,
        description.target.value,
        image.target.files[0]
      )
      .then((res) => {
        console.log(res);
      }).catch((e) => {
          console.log(e)
      });
    console.log(categoryName.target.value);
    console.log(description.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="kategori ad"
        onChange={(value) => setcategoryName(value)}
      />
      <input
        type={"text"}
        placeholder="Açıklama"
        onChange={(value) => setdescription(value)}
      />
      <input type="file" onChange={(value) => setimage(value)} />
      <button onClick={() => save(categoryName, description, image)}>
        Kaydet
      </button>
    </div>
  );
};

export default AddCategory;
