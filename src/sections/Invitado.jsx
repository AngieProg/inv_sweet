import {datosInvitado } from "../constants/constants";
import CardFormato from "../components/CardFormato";
import InfoAdicional from "../components/InfoAdicional";

const Invitado = () =>(
  <section className="mt-10 flex justify-center">
        <div className="flex flex-col justify-center items-center w-[90%] py-6 bg-white-400  text-center">
          <CardFormato titulo1='Apreciable' titulo2='Nombre del Invitado'/>
            <div className="flex flex-col flex-wrap items-center mt-6">
              {datosInvitado.map((dato, index)=>( 
                  <div key={index} className="pt-1">
                       <InfoAdicional icon2={dato.icon2} label={dato.label} input={dato.input}/>
                  </div>
              ))} 
            </div>   
        </div>    
  </section>
)

export default Invitado