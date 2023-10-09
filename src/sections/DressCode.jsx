import { dressCode } from "../constants/constants";
import CardInfo from "../components/CardInfo";
import CardFormato from "../components/CardFormato";

const DressCode = () =>(
  <section className="mt-10 flex justify-center">
        <div className="flex flex-col justify-center items-center w-[90%] py-6 bg-white-400  text-center">
          <CardFormato titulo1='DRESS CODE' titulo2='Código de Vestimenta'/>
              <div className="flex flex-wrap gap-10 justify-center">
                {dressCode.map((dress, index)=>( 
                    <div key={index} className="pt-8">
                        <CardInfo icon={dress.icon} titulo1={dress.titulo1} titulo2={dress.titulo2}/>
                    </div>
                ))} 
              </div>   
        </div>    
  </section>
)

export default DressCode