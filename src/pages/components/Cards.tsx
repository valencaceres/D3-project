import React from 'react'
import {Card, CardHeader, CardContent} from "../ui/card";
import Image from "next/image";
import photo from '../../../public/photod3.jpg'
interface CardData{
/*     photo:string; */
    title:string;
    description:string;
}

export default function Cards({title, description}:CardData) {
  return (
<Card className="relative flex h-[80vh] w-[30vw] cursor-pointer flex-col items-center overflow-hidden border-none  shadow-md duration-75">
        <CardHeader
          className={`relative flex h-1/2 w-full   items-center justify-center rounded-t-md ${
            photo ? "" : "bg-destructive-9"
          } bg-opacity-80`}
        >
          {photo ? (
            <div className="absolute h-full w-full bg-black ">
              <Image
                fill
                src={photo ?? ""}
                alt="photo"
                className="rounded-b-none object-cover opacity-40"
              />
            </div>
          ) : null}
          <h2 className="absolute  text-center  text-4xl font-bold text-white">
            {title}
          </h2>
        </CardHeader>
        <CardContent className="flex h-1/2  justify-center bg-[#202020]  ">
          <div className="flex flex-col items-center justify-center   p-2 text-xl font-semibold text-white">
            <p>
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
  )
}
