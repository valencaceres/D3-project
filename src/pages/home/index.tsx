import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Cards from "../components/Cards";

export default function Home() {

  return (
    <div>
      <Header
        title="Experiencia D-three"
        description="Encuentra la formacion ideal para ti, comienza tu camino para
                ser un bailarin profesional"
        button="Conocenos"
        video="/hero.mp4"
      />
      <AboutUs/>
      <div className="flex h-[90vh] w-[98vw] justify-around">
        <Cards
          title="Studio"
          description="Podras formarte de manera profesional y progresiva, pues no
            requiere tener experiencia puedes revisar nuestros planes y
              decidirte por el que mas te guste, hay paquetes para que inicies
              de cero por supuesto"
        link="/studio"
        />
        <Cards
          title="Crew"
          description="Podras formarte de manera profesional y progresiva, pues no
              requiere tener experiencia puedes revisar nuestros planes y
              decidirte por el que mas te guste, hay paquetes para que inicies
              de cero por supuesto"
              link="/crew"
        />
        <Cards
          title="Entrenamiento"
          description="Podras formarte de manera profesional y progresiva, pues no
              requiere tener experiencia puedes revisar nuestros planes y
              decidirte por el que mas te guste, hay paquetes para que inicies
              de cero por supuesto"
              link="/training"
        />
      </div>
    </div>
  );
}
