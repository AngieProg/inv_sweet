const Titulo = ({titulo1, titulo2}) =>(
    <>
        <h3 className='pb-2 font-sofia text-xl'>{titulo1}</h3>
        <div className="border-solid border-8 border-dark-pink w-[60%] py-3 mb-10" data-aos="flip-left">
            <h2 className="font-mea text-4xl px-4 text-center">{titulo2}</h2>
        </div> 
    </>
)

export default Titulo