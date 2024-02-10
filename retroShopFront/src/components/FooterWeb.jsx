import Contact from "./Contact"


export const FooterWeb = () => {
  return (
    <div className="hidden sm:flex flex-col bg-gray-200 text-white ">
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
    <div className=" flex flex-row bg-gradient-to-r from-blue-700 via-pink-500 to-purple-500' ">
        <div className=" flex  justify-center text-center w-[50%]">
            <img  className="w-[30%]"src="/retroshop.svg"/>
            
        </div>
        <div className=" w-[50%] flex gap-5 text-center  justify-center mt-2">
        <span className=" text-sm text-gray-500">© copyright derechos reservados</span>
            <span className=" text-sm text-gray-500">politica privacida</span>
            <span className=" text-sm text-gray-500">cookies</span>
        </div>
    </div>
</div>

  )
}
