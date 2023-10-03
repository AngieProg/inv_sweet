import CardFormato from "../components/CardFormato";
import {persona, reloj, regalo} from "./../assets/icon";
// import { datosInvitado } from "../constants/constants";
// import InfoPersonal from "../components/InfoPersonal";
// import CardInfo from "../components/CardInfo";

const Invitado = () =>(
  <section className="mt-20 flex justify-center">
    <div className="flex flex-col justify-center items-center w-[80%] py-6 px-6 bg-white-400 shadow-xl">
      <CardFormato titulo1={'APRECIABLE'} titulo2={'Nombre del Invitado'} />
      <p className="font-montserrat text-slate-gray text-sm py-3 text-center">Con inmensa alegría te invitamos a celebrar mis XV años.</p>

      {/* {datosInvitado.map((dato,index) => {
          <div key={index}>
            <InfoPersonal 
              icon2 = {dato.icon2}
              label = {dato.label}
              input = {dato.input}
            />
          </div>
      })} */}

      <div>
        <div className="flex justify-center items-center mb-2 pb-2 border-b-[1px] border-b-slate-gray">
          <img src={persona} alt="persona" className="w-[20px] h-[20px]"/>
          <p className="font-sofia text-sm ml-3">PASES: 4</p>
        </div>
        <div className="flex justify-center items-center mb-2 pb-2 border-b-[1px] border-b-slate-gray">
          <img src={reloj} alt="mesa" className="w-[20px] h-[20px]"/>
          <p className="font-sofia text-sm ml-3">MESA: 8</p>
        </div>
        <div className="flex justify-center items-center">
          <img src={regalo} alt="persona" className="w-[20px] h-[20px]"/>
          <p className="font-sofia text-sm ml-3">ASIENTOS: 3 - 5</p>
        </div>
      </div>
    </div>  
  </section>
)

export default Invitado