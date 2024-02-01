import { useState } from "react";
//import baseURL from "../providers/ruta";

const useCreateReview = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const insertReview = async (productId, review, token) => {
    console.log("use" + review);
    console.log("use" + productId);

    try {
      const response = await fetch(
        `${import.meta.env.BASE_URL}/review/${productId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ review }),
        }
      );
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, insertReview };
};

export default useCreateReview;