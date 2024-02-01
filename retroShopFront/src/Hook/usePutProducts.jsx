import {  useState } from "react";

const usePutProducts = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const putProduct = async (id, productData, token) => {
    console.log(id);
    console.log(productData)
    console.log(token)
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('category', productData.category);
      formData.append('price', productData.price);
      formData.append('location', productData.location);
      formData.append('description', productData.description);
      formData.append('avatar', productData.avatar);
      formData.append('avatar2', productData.avatar2);

      const response = await fetch(`http://localhost:3001/products/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
   console.log(id);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, putProduct };
};

export default usePutProducts;
