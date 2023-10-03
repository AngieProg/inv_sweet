import React from 'react'

const HotelFormato = ({nombre, image}) =>(
    <div>
        <div className="flex flex-col items-center border-solid border-8 border-dark-pink relative mb-10">
          <h2 className="font-sofia text-2xl p-4 text-center">{nombre}</h2>
          <img 
            src={image} 
            alt={nombre} 
            className="w-[380px] h-[250px]" 
          /> 
          <div className="flex justify-center absolute -bottom-8">
            <button className="font-sofia border-solid bg-soft-pink p-3">VER DETALLE</button> 
          </div>  
        </div>
        
    </div>
)

export default HotelFormato