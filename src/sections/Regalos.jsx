import { regalos } from "../constants/constants";
import CardFormato from "../components/CardFormato";
import CardInfo from "../components/CardInfo";
import CardInfoDatosBancarios from "../components/CardInfoDatosBancarios";

const Regalos = () => (
  <section className="mt-10 flex justify-center">
    <div className="flex flex-col justify-center items-center w-[90%] py-6 bg-white-400  text-center">
      <CardFormato titulo1='RECOMENDACIONES' titulo2='Mesa de Regalos'/>
        <div className="flex flex-wrap gap-10 justify-center">
          {regalos.map((regalo, index)=>( 
            <div key={index}>
              {regalo.datosBancarios ?
              //<h2>tengo datos bancarios</h2>
                <CardInfoDatosBancarios icon={regalo.icon} titulo2={regalo.titulo2} parrafo={regalo.parrafo}/>
              :
                <CardInfo icon={regalo.icon} titulo2={regalo.titulo2} parrafo={regalo.parrafo} />
              }              
            </div>
          ))} 
        </div>   
    </div>    
  </section>
)

export default Regalos