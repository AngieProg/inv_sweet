import {fotoBg} from "./../assets/images";
import Reloj from "../components/Reloj";

const Contador = () =>{

  return(
  <div className="bg-soft-pink py-10">    
    <div className="flex flex-col items-center justify-center"> 
      <div className="px-10 border-dashed border-x-4 border-t-4 border-dark-pink mb-4">    
        <h3 className="font-mea text-4xl px-14 py-4">¡Solo Faltan!</h3>
      </div>
      <img 
        src={fotoBg} 
        alt="quinceañera" 
        className="w-[300px] h-[300px] mb-3 border-solid border-8 border-dark-pink"
        data-aos="zoom-in" 
      />      
    </div>

    {/* Contador --- Segunda Parte */}
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap md:gap-20 gap-10 justify-center px-10 border-dashed border-x-4 border-b-4 border-dark-pink py-10">
        
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