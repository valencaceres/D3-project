import Head from "next/head";
import Header from "./components/Header";
import { type NextPage } from "next";
import AboutUs from "./components/AboutUs";
import Cards from "./components/Cards";

const Index: NextPage = () => {
  
  return (
    <>
      <Header title="Experiencia D-three" description="Encuentra la formacion ideal para ti, comienza tu camino para
                ser un bailarin profesional" button="Conocenos"/>
      <AboutUs/>
      <div className="flex w-full justify-around h-[90vh] items-center">
        <Cards title="Studio" description="Podras formarte de manera profesional y progresiva, pues no
              requiere tener experiencia puedes revisar nuestros planes y
              decidirte por el que mas te guste, hay paquetes para que inicies
              de cero por supuesto"/>
        <Cards title="Crew" description="Podras formarte de manera profesional y progresiva, pues no
              requiere tener experiencia puedes revisar nuestros planes y
              decidirte por el que mas te guste, hay paquetes para que inicies
              de cero por supuesto"/>
        <Cards title="Entrenamiento" description="Podras formarte de manera profesional y progresiva, pues no
              requiere tener experiencia puedes revisar nuestros planes y
              decidirte por el que mas te guste, hay paquetes para que inicies
              de cero por supuesto"/>
      </div>
    </>
    
  );
}
export default Index;