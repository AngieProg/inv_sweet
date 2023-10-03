//import Song from "../components/Song";

const Hero = () =>(
    <div className="relative flex justify-center h-[100vh] bg-primary bg-hero bg-cover bg-center ">
        {/* <div className="fixed items-end cursor-pointer right-[40px] bottom-[80px]">
            <Song />
        </div> */}
        <div className="flex flex-1 justify-center items-center absolute top-0 w-[90%] border bg-dark-pink">
            <h2 className="font-sofia text-2xl py-3">MIS XV AÑOS</h2>
        </div>
        <div data-aos="fade-up" className="flex flex-1 justify-center items-center absolute bottom-0 w-[90%] border bg-dark-pink">
            <h1 className="font-mea text-4xl py-3">Frida Sofia</h1>           
        </div>
    </div>
)


export default Hero;