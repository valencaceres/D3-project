import React from 'react'
import {Card, CardHeader, CardContent} from "../../ui/card";
import Image from "next/image";
import Link from 'next/link';
import photo from '../../../../public/photod3.jpg'
interface CardData{
    photo?:string;
    title:string;
    description:string;
    link:string;
    width:string,
    height:string,
    opacity?:string
    style?:string,
    instagram?:string
}

export default function Cards({title, description, link, width, height, opacity, style, instagram}:CardData) {
  return (
<Card className={`relative flex ${width} ${height} cursor-pointer flex-col items-center overflow-hidden border-none  shadow-md duration-75`}>
        <CardHeader
          className={`relative flex h-1/2 w-full   items-center justify-center rounded-t-md ${
            photo ? "" : "bg-destructive-9"
          } bg-opacity-80`}
        >
          {photo ? (
            <div className="absolute h-full w-full bg-black ">
              <Link href={link}>
              <Image
                fill
                src={photo ?? ""}
                alt="photo"
                className={`rounded-b-none object-cover ${opacity}`}
              />
              </Link>
            </div>
          ) : null}
          <h2 className="absolute  text-center  text-4xl font-bold text-white">
            <Link href={link}>{title}</Link>
          </h2>
        </CardHeader>
        <CardContent className="flex h-1/2 w-full justify-start items-center bg-[#202020]  ">
          
            {style ? 
            <div className="flex flex-col p-1 text-xl font-semibold text-white">
            <div>
              <p>
                {description}
              </p>
              <p>
                {style}
              </p>
              <p>
                {instagram}
              </p>
            </div>
            </div>
            : 
            <div  className="flex flex-col items-center justify-center   p-2 text-xl font-semibold text-white">
              <div>
                <p>
                  {description}
                </p>
              </div>
              </div>
              }
              
          
        </CardContent>
      </Card>
  )
}
