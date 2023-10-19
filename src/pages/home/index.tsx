import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Cards from "../components/Cards";

export default function Home() {
  function scrollToAboutUs() {
    const aboutUsSection = document.getElementById('aboutUs');
    if (aboutUsSection) {
      const offset = aboutUsSection.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: offset,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div>
      <Header
        title="Experiencia D-three"
        description="Encuentra la formacion ideal para ti, comienza tu camino para
                ser un bailarin profesional"
        button="Conocenos"
        onConocenosClick={scrollToAboutUs}
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
              link="/studio"
        />
        <Cards
          title="Entrenamiento"
          description="Podras formarte de manera profesional y progresiva, pues no
              requiere tener experiencia puedes revisar nuestros planes y
              decidirte por el que mas te guste, hay paquetes para que inicies
              de cero por supuesto"
              link="/studio"
        />
      </div>
    </div>
  );
}
