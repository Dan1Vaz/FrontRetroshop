import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const VerificationPage = () => {
  const { verificationCode, email } = useParams();
  const navigate = useNavigate();


  const [, setUserData] = useState({
    email: "",
    verificationCode: "",
  });

  useEffect(() => {
    // Actualizar el estado con los valores de los parámetros
    setUserData({
      email: email,
      verificationCode: verificationCode,
    });

    // Enviar solicitud fetch al montar el componente
    fetch(`${import.meta.env.VITE_BASE_URL}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        verificationCode: verificationCode,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Verificación exitosa");
          navigate("/profile/login");
        } else {
          throw new Error("Failed verification");
        }
      })
      .catch((error) => {
        console.error("Error en la verificación:", error.message);
      });
  }, [email, verificationCode]);

  return (
    <div className="register">
      <h2>listotto</h2>
    </div>
  );
};

