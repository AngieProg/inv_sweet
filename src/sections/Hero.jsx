import Song from "../components/Song";
import { girlBg } from "../assets/images";

const Hero = () =>(
    <div className="flex flex-col items-center bg-primary ">
        {/* <div className="fixed items-end cursor-pointer right-[40px] bottom-[140px]">
            <Song />
        </div>  */}
        <div className="">
            <h2 className="font-sofia text-2xl mt-11 mb-5">MIS XV AÑOS</h2>
        </div>
        <div className="">
            <img src={girlBg} alt="foto" className="w-[250px] h-[350px] mb-6"/>
        </div>       
        <div className="">
            <h1 className="font-mea text-4xl mb-6">Frida Sofia</h1>           
        </div>
        <table className="border-separate border border-slate-400 mb-11 text-center font-sofia text-2xl mx-8">
            <tbody>
                <tr>
                    <td className="border border-slate-300 py-2 px-5">CAPILLA SAN MARTIN</td>
                    <td className="border border-slate-300 py-2 px-5">24 DE ABRIL 2023</td>
                    <td className="border border-slate-300 py-2 px-5">SALÓN RUIZ SOLARES</td>
                </tr>
            </tbody>
        </table>
    </div>
)


export default Hero;