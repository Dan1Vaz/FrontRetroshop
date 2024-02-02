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
       if(productData.name) formData.append('name', productData.name);
       if(productData.category)formData.append('category', productData.category);
       if(productData.price)formData.append('price', productData.price);
       if(productData.location)formData.append('location', productData.location);
       if(productData.description)formData.append('description', productData.description);
       if(productData.avatar)formData.append('avatar', productData.avatar);
       if(productData.avatar2)formData.append('avatar2', productData.avatar2);

      const response = await fetch(`http://${import.meta.env.VITE_BASE_URL}:3001/products/${id}`, {
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
