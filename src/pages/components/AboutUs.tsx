import Image from "next/image"
import img from '../../../public/D3_Rojo.png'
import {
  Card,
  CardDescription,
} from "../ui/card";

function AboutUs() {
  return (
    <div className='h-[100vh] w-full flex justify-center flex-col items-center'>
      <div className='flex flex-col items-center h-[100vh] justify-center'>

        <div className='w-[55vw] h-[90vh] flex justify-around items-center flex-col bg-[#202020] rounded border-none'>
        <div className="h-[10vh]">
          <p className='text-4xl font-bold text-white'>¿Que es una Experiencia D-three?</p>
        </div>
          <div>
            <CardDescription className='text-xl font-semibold text-center text-white w-[40vw]'>
            &quot;¡Bienvenidos a nuestro apasionante mundo, donde el baile se
              convierte en una mágica experiencia que va más allá de simplemente
              mover el cuerpo! Aquí, fusionamos la danza con nuestra conciencia
              corporal, permitiendo que cada paso y movimiento se conviertan en una
              emocionante aventura para el alma. No se trata solo de bailar, ni
              tampoco de hablar; es un viaje para vivir intensamente. En cada
              instante, sumergirse en la música y dejar que las emociones nos lleven
              a lugares inimaginables. ¡Únete a nosotros y descubre la magia de la
              danza en su forma más pura!&quot;
            </CardDescription>
          </div>
          <div>
            <Image src={img} alt="d3-image" className="w-20"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs