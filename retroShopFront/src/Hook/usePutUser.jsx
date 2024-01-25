import {  useState } from "react";

const usePutUser = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);



    const putUser = async (userData,token) =>{
      try{  setLoading(true);
        const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('password', userData.password);
      formData.append('biography', userData.biography);
      formData.append('avatar', userData.avatar);
    


      const response = await fetch(`http://localhost:3001/profile`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, putUser };
};


export default usePutUser