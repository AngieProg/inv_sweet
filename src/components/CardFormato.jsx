//import "aos/dist/aos.css";

const CardFormato = ({titulo1, titulo2}) => {

  return (
    <>
    <h3 className="font-sofia text-2xl py-2">{titulo1}</h3>
    <div data-aos="fade-right" >
      <h2 className="font-mea text-4xl py-3 text-center">{titulo2}</h2>
    </div>
    </>
  )
}

export default CardFormato