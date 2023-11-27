import { ChangeEvent, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import { UploadButton } from "~/utils/uploadthing"

import { api } from "~/utils/api"

export default function NewProfesor() {
  const router = useRouter()

  const { mutate } = api.profesor.createProfesor.useMutation()

  const [input, setInput] = useState({
    name: '',
    style: '',
    instagram: ''
  })

  const handleChange = 
  ({target:{name, value}}: ChangeEvent<HTMLInputElement>) => {
      setInput({...input, [name]: value})
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    mutate(input)
    setInput({name: '', style: '', instagram: ''})
    router.push('/dashboard')
    console.log(input)
  }

  return (
        <div className="m-4">
          <div className="flex h-[4vh] items-center align-middle w-[19vw] justify-around">
            <Link className="font-bold text-lg hover:text-gray-800" href={'/dashboard'}>Profesores</Link>
            <p className="font-bold text-xl">{'>'}</p>
            <p className="font-bold text-lg">Nuevo profesor</p>
          </div>
          <div className="flex flex-col h-[75vh] justify-evenly">
            <div className="flex justify-between bg-red-900 rounded h-[40vh] w-[71vw]">
              <div className="text-white w-[28vw]">
                <h1 className="text-center text-white p-3 font-bold text-2xl">Crear nuevo Profesor</h1>
              </div>
              <form action="" className="flex flex-col items-end p-3 justify-around" onSubmit={handleSubmit}>
                <label className="w-[40vw] text-white font-semibold" htmlFor="name">Nombre</label>
                <input className="w-[40vw] h-[5vh] mt-2 mb-2 rounded pl-1" type="text" name="name" placeholder="Ingresa el nombre del profesor" required onChange={handleChange}/>
                <label className="w-[40vw] text-white font-semibold" htmlFor="style">Estilo</label>
                <input className="w-[40vw] h-[5vh]  mt-2 mb-2 rounded pl-1" type="text" name="style" placeholder="Ingresa el estilo del profesor" required onChange={handleChange}/>
                <label className="w-[40vw] text-white font-semibold" htmlFor="instagram">Cuenta de instagram</label>
                <input className="w-[40vw] h-[5vh] mt-2 mb-2 rounded pl-1" type="text" name="instagram" placeholder="Ingresa el instagram del profesor" required onChange={handleChange}/>
                <input className="mt-2 w-[8vw] h-[6vh] bg-old-brick-500 text-white font-semibold rounded hover:bg-old-brick-600 transition-all" type="submit" value={'Cargar'}/>
              </form>
            </div>
            <div className="bg-old-brick-900 w-[71vw] h-[30vh] rounded">            
              <div className="flex w-[28vw] justify-center">
                <h1 className="text-white font-bold text-2xl pt-3">Foto del profesor</h1>
              </div>
              <div>
              <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
              </div>
            </div>
          </div>
        </div>
  )
}
