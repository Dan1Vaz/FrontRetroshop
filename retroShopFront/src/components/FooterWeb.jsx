import { Link } from "react-router-dom"
import Contact from "./Contact"


export const FooterWeb = () => {
  return (
    <div className="hidden lg:flex flex-col bg-gray-200 text-white max-w-screen shadow-[9px_-2px_18px_3px_rgba(133,126,133,1)] ">
     ;
        <div className=" flex flex-row text-center justify-center p-[20px] " >
        
           <div className=" flex flex-col w-[30vw] gap-10 text-justify text-sm">
            <h2 className="text-base font-semibold text-gray-700">Links</h2>
            <span>Consola</span>
            <span>ordenas</span>
            <span>otros</span>
           </div>
           <div className=" flex flex-col w-[30vw]  text-justify p-5 text-sm">
           <div className=" flex  justify-center text-center  ">
            <img  className="w-[80%]"src="/retroshop.svg"/>
            
        </div>
           <p className="text-gray-800"> Tu destino en línea para descubrir y vender tecnología retro. Sumérgete en nuestra vibrante comunidad donde puedes encontrar una amplia variedad de dispositivos vintage, desde consolas de videojuegos hasta gadgets icónicos. nuestra plataforma ofrece una forma fácil y segura de comprar y vender artículos retro. Únete a nosotros para revivir la nostalgia y explorar un mundo de tecnología clásica..</p>
           </div>
           <div className="w-[30vw]">
           <Contact/>
           </div>
    </div>
    <div className=" flex flex-row bg-gray-300 shadow-[9px_-2px_18px_3px_rgba(133,126,133,1)] ">
      {/* bg-gradient-to-r from-blue-700 via-pink-500 to-purple-500' */}
      {/* bg-gradient-to-r from-purple-500 via-pink-500 to-blue-700' */}
        <div className=" flex  justify-center text-center w-[50%]">
            <img  className="w-[30%]"src="/retroshop.svg"/>
            
        </div>
        <div className=" w-[50%] flex gap-5 text-center  justify-center mt-2">
        <span className=" text-sm text-gray-500">© copyright derechos reservados</span>
            <span className=" text-sm text-gray-500">Política de privacidad</span>
           <Link className=" text-sm text-gray-500" to="/profile/cookies">Política de cookies</Link>
        </div>
    </div>
</div>

  )
}
