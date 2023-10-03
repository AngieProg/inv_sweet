import {padres} from "./../assets/images";
import Titulo from "../components/Titulo";

const Padres = () =>(
  <section className='py-10'>
    <div className='flex flex-col justify-center items-center'>
      <Titulo titulo1='CON LA BENDICIÓN DE' titulo2='Mis Padres'/>
      <div className="border-solid border-8 border-dark-pink">
        <div>
          <img src={padres} alt="padres" data-aos="zoom-in" className="w-[300px] h-[300px] "/>
        </div>
        <h2 className="font-mea text-center text-2xl py-2">Norma y Rodrigo</h2>
      </div>
    </div>
  </section>
)

export default Padres