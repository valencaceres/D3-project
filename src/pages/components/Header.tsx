import React from 'react'
import { Button } from '../ui/button'
import { ArrowDown } from "lucide-react";
import AboutUs from '../AboutUs';
function Header() {
    const scrollToCourses = (): void => {
        const coursesElement = document.getElementById("aboutUs");
        if (coursesElement) {
          coursesElement.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <>
        <section className="relative z-40 flex h-[100vh] w-full flex-col justify-between p-0">
        <div className="container flex h-full pt-32">
          <div className="flex  flex-col gap-6 pl-20 pt-36 text-black">
            <h1 className="e text-4xl font-bold uppercase">
              Experiencia D-three
            </h1>
            <div className="space-y-4">
              <h2 className="max-w-xl text-3xl font-bold ">
                Encuentra la formacion ideal para ti, comienza tu camino para
                ser un bailarin profesional
              </h2>
              <Button
                className="w-fit bg-red-700 hover:bg-destructive-7 hover:text-white"
                onClick={scrollToCourses}
              >
                Conocenos
              </Button>
            </div>
          </div>
        </div>
        <div className="relative ">
          <ArrowDown
            onClick={scrollToCourses}
            className="absolute bottom-2 left-1/2 z-10 h-12 w-12 -translate-x-1/2 transform cursor-pointer text-destructive-8
            "
          />
        </div>
      </section>
      <div className="bg-red z-10 opacity-50">
        <video
            className='z-0'
          style={{
            opacity: 0.5,
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            objectPosition: "top",
            top: 0,
            left: 0,
          }}
          autoPlay
          loop
          muted
          id="video"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <AboutUs/>
    </>
  )
}

export default Header