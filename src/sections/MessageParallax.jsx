import { Parallax } from "react-parallax";
import { fotoBg } from "./../assets/images";

const MessageParallax = () => (
  <Parallax bgImage={fotoBg} strength={800} className="relative h-[100vh]">
    <div className="flex items-center justify-center absolute h-[100vh] w-[100%] ">
      <span className="bg-dark-pink text-white p-[16px] text-[25px] ">
        Se acerca un día muy especial en mi vida y quiero compartirlo con todos
        ustedes. ¡Estoy emocionada de invitarte a mi fiesta de XV años! Espero
        que puedas unirte a mí en este día tan importante.
      </span>
    </div>
  </Parallax>
);

export default MessageParallax;
