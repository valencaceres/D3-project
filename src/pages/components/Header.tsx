import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-scroll';

interface HeaderProps {
  title: string;
  description?: string;
  button?: string ;
  video: string
}

function Header(props: HeaderProps) {

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
          {props.button ? <Button className='w-fit bg-old-brick-500 hover:bg-red-600 text-white'>
            <Link to="aboutUs" smooth={true} duration={500}>
              {props.button}
            </Link>
          </Button> 
          : null}
        </div>
      </div>
      <div>
      <video src={props.video} className='absolute z-0 opacity-40 top-0 left-0 h-[130vh] w-full cover' autoPlay loop muted id="video"></video>
      </div>
    </div>
  )
}

export default Header