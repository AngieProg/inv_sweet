//import "aos/dist/aos.css";

const Reloj = ({tiempo, medida, dataAOS}) => {
  
  return (
    <div data-aos={dataAOS} className="flex relative items-center justify-center flex-col border-solid  w-[100px] h-[100px] bg-white">
        <p className="font-montserrat text-2xl">{tiempo}</p>
        <div className="flex justify-center absolute mt-[60px] bg-dark-pink w-[100px] h-[20px]">
        <p className="font-montserrat text-sm">{medida}</p>
        </div>
    </div>
  )
}

export default Reloj