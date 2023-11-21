import AboutUs from '~/components/funcional/_aboutUs'
import Cards from '~/components/funcional/helpers/Cards'
import Header from '~/components/funcional/helpers/Header'

/* comentario para commitear */

export default function Home() {
  let opacity = 'opacity-40'
  let width = 'w-[30vw]'
  let height = 'h-[80vh]'
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
        width={width}
        height={height}
        opacity={opacity}
        />
        <Cards
          title="Crew"
          description="Podras formarte de manera profesional y progresiva, pues no
              requiere tener experiencia puedes revisar nuestros planes y
              decidirte por el que mas te guste, hay paquetes para que inicies
              de cero por supuesto"
              link="/crew"
              width={width}
              height={height}
              opacity={opacity}
        />
        <Cards
          title="Entrenamiento"
          description="Podras formarte de manera profesional y progresiva, pues no
              requiere tener experiencia puedes revisar nuestros planes y
              decidirte por el que mas te guste, hay paquetes para que inicies
              de cero por supuesto"
              link="/training"
              width={width}
              height={height}
              opacity={opacity}
        />
      </div>
    </div>
  );
}

