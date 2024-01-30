import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from '../providers/ruta';

const useProductsByUser = (token) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductsByUser = async (token) => {
      try {
        const response = await fetch(`${baseURL}/products/user`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Error fetching products");
        }

        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByUser(token);
  }, [token]);

  useEffect(() => {
    if (products.length > 0) {
      navigate("/profile/products/user");
    }
  }, [products, navigate]);

  return { products, error, loading };
};

export default useProductsByUser;
