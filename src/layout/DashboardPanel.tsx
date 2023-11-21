import Link from "next/link"
import { Button } from "../components/ui/button"

export default function DashboardPanel() {
  return (
    <div className="w-[25vw] justify-start flex flex-col items-center">
        <div className="flex flex-col justify center items-center w-[25vw]">
            <div className="pt-4">
                <Button className='w-[15vw] h-[6vh] bg-old-brick-500 hover:bg-red-600 text-white hover:w-[16vw] hover:h-[7vh] hover:transition-all transition-all'>
                    <Link className="text-white w-[25vw] h-[10vh" href={'/dashboard'}>Inicio</Link>
                </Button>
            </div>
            <div className="pt-4">
                <Button className='w-[15vw] h-[6vh] bg-old-brick-500 hover:bg-red-600 text-white hover:w-[16vw] hover:h-[7vh] hover:transition-all transition-all'>
                    <Link className="text-white w-[25vw] h-[10vh" href={'/dashboard/new'}>Nuevo profesor</Link>
                </Button>
            </div>
        </div>
    </div>
  )
}
