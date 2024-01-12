//import "aos/dist/aos.css";

const Reloj = ({tiempo, medida, dataAOS}) => {
  
  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-center items-center rounded-full w-[50px] h-[50px] bg-white mb-2">
        <p className="font-montserrat text-2xl">{tiempo}</p>        
      </div>
      <div>
        <p className="font-sofia text-sm">{medida}</p>
      </div>
    </div>
    
  )
}

export default Reloj