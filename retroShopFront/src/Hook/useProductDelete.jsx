import { useState } from "react";

const useProductDelete = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const deleteProduct = async (productId, token) => {
      try {
        setLoading(true);
  
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}:3001/products/${productId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
  
        if (!response.ok) {
          throw new Error('Error deleting product');
        } else {
          const data = await response.json();
          return data;
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return { error, loading, deleteProduct };
  };
  
  export default useProductDelete;
  