import { useState, useEffect } from "react"

const Formulario = () => {
   /**
    *🗒️ Reglas de los Hooks
    *👉 Los Hooks se colocan en la parte superior de los componentes
    *👉 No se deben colocar dentro de condicionales, tampoco después de un return
    */
   const [nombre, setNombre] = useState('')

   return (
      <div className='md:w-1/2 lg:w-3/5'>
         <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

         <p className='text-lg mt-5 text-center mb-10'>
            Añade Pacientes y {''}
            <span className='text-indigo-600 font-bold'>Administralos</span>
         </p>

         <form className='bg-white shadow-md rounded-lg py-10 px-5'>
            <div className='mb-5'>
               <label className='block text-gray-700 uppercase font-bold' htmlFor='mascota'>Nombre Mascota</label>
               <input
                  type='text'
                  placeholder='Nombre de la Mascota'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  id='mascota'
               />
            </div>

            <div className='mb-5'>
               <label className='block text-gray-700 uppercase font-bold' htmlFor='propietario'>Nombre Propietario</label>
               <input
                  type='text'
                  placeholder='Nombre del Propietario'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  id='propietario'
               />
            </div>

            <div className='mb-5'>
               <label className='block text-gray-700 uppercase font-bold' htmlFor='email'>Email</label>
               <input
                  type='email'
                  placeholder='Email Contacto Propietario'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  id='email'
               />
            </div>

            <div className='mb-5'>
               <label className='block text-gray-700 uppercase font-bold' htmlFor='alta'>Alta</label>
               <input
                  type='date'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  id='alta'
               />
            </div>

            <div className='mb-5'>
               <label className='block text-gray-700 uppercase font-bold' htmlFor='sintomas'>Síntomas</label>
               <textarea 
                  id='sintomas' 
                  placeholder='Describe los Síntomas'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'  
               />
            </div>

            <input 
               type='submit'
               className='bg-indigo-600 hover:bg-indigo-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-all'
               value="Agregar Paciente" 
            />
         </form>
      </div>
   )
}

export default Formulario

