import React from 'react'
import { Button } from '../ui/button'
function Header(props: {title:string, description:string, button:string}) {
  return (  
    <div className='h-[126vh] w-full flex items-center justify-center'>
      <div className='h-[50vh] flex flex-col justify-around items-center z-10'>
        <div className='flex'>
          <p className='font-bold text-4xl uppercase'>{props.title}</p>
        </div>
        <div>
          <p className='max-w-xl font-semibold text-3xl text-center'>{props.description}</p>
        </div>
        <div>
          <Button className='w-fit bg-red-700 hover:bg-red-700 hover:text-white'>{props.button}</Button>
        </div>
      </div>
      <div>
      <video src="hero.mp4" className='absolute z-0 opacity-40 top-0 left-0 h-[130vh] w-full cover' autoPlay loop muted id="video"></video>
      </div>
    </div>
  )
}

export default Header