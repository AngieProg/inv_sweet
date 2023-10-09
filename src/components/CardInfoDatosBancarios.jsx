import { regalos } from "../constants/constants";
import InfoAdicional from "../components/InfoAdicional";

const CardInfoDatosBancarios = ({icon, titulo2, parrafo, }) => {

    return(
        <div className="flex flex-col justify-center items-center px-8 py-8 mb-5 w-[300px] shadow-3xl">
            <img src={icon} alt={titulo2} className="w-[50px] h-[50px]" data-aos="zoom-out-up"/>
            <h2 className="font-mea text-2xl py-3">{titulo2}</h2>
            {parrafo && 
                <p className='font-montserrat text-slate-gray text-sm mb-4'>{parrafo}</p>
            }
            {regalos.map((regalo, index) => {
                <div key={index}>
                    <p>{regalo.titulo2}</p>
                </div>
            })}
                              
        </div>
    )
}

export default CardInfoDatosBancarios