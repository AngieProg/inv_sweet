//import "aos/dist/aos.css";
import {fotoFecha} from "./../assets/images";
import Reloj from "../components/Reloj";

const Contador = () =>{

  return(
  <div className="bg-medium-pink py-10">
    
    <div className="flex flex-col items-center justify-center">
      <img 
        src={fotoFecha} 
        alt="quinceañera" 
        className="w-[300px] h-[300px] mb-3 border-solid border-8 border-dark-pink"
        data-aos="zoom-in" 
      />
      <div className="border-solid border-8 border-dark-pink py-3 mb-10">
        <h3 className="font-sofia text-lg px-4 py-2">16 - Septiembre - 2023</h3>
      </div>
    </div>

    {/* Contador --- Segunda Parte */}
    <div className="flex flex-col items-center">
      <h3 className="font-sofia text-lg mb-5">SOLO FALTAN</h3>
      <div className="flex flex-wrap md:gap-20 gap-10 justify-center px-20">
        
        <Reloj tiempo='20' medida='DÍAS' dataAOS="flip-left"/>

        <Reloj tiempo='19' medida='HORAS' dataAOS="flip-right"/>

        <Reloj tiempo='32' medida='MINUTOS' dataAOS="flip-left"/>

        <Reloj tiempo='47' medida='SEGUNDOS' dataAOS="flip-right"/>
      
      </div>
    </div>
  </div>
  );
}

export default Contador