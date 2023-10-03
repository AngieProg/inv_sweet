import { data } from "../constants/constants";
import Titulo from "../components/Titulo";
import { galeria1,galeria2 } from "../assets/images";


const Galeria = () =>(
  <section className='py-10 w-[100hv]'>
    <div className='flex flex-col justify-center items-center'>
      <Titulo titulo1='MIS RECUERDOS' titulo2='Galeria'/>
      <div className="flex justify-center gap-10 flex-wrap">
        <img src={galeria2} alt="foto" className="w-[300px] h[300px]"/>
        <img src={galeria1} alt="foto" className="w-[300px] h[300px]"/>
      </div>
      
    </div>
    {/* <div className="flex flex-col justify-center items-center w-[90%] py-6 bg-white-400  text-center">
      <Titulo titulo1="Mis Recuerdos" titulo2="Galeria"/>
    </div> */}
    {/* <div className="relative flex items-center">
      <div id="slider" className="w-full h-full scroll-smooth overflow-x-scroll whitespace-nowrap">
        {data.map((item, index)=>( 
          <div key={index}>
            <h2>{item.id}</h2>
            <img src={item.img} alt="/" className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" />
        </div>
      ))} 
      </div>
    </div> */}
             
            
  </section>
)

export default Galeria