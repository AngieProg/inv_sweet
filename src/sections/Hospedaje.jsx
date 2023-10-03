import { hoteles } from "../constants/constants";
import HotelFormato from "../components/HotelFormato";
import Titulo from "../components/Titulo";

const Hospedaje = () => (
  <section className='py-10 w-[100hv]'>
    <div className='flex flex-col justify-center items-center'>
      <Titulo titulo1='RECOMENDACIONES' titulo2='Hospedaje'/>
      <div className="flex flex-wrap gap-10 justify-center">
      {hoteles.map((hotel, index)=>( 
        <div key={index}>
          <HotelFormato nombre={hotel.nombre} image={hotel.image}/>
        </div>
      ))} 
      </div>
    </div>
  </section>
)

export default Hospedaje