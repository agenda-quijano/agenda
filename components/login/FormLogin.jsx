
import Image from 'next/image'


export default function FormLogin(){
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
      <h1 className='text-5xl font-semibold'>Bienvenido</h1>
      <p className='font-medium text-lg text-gray-500 mt-4'>Bienvenido, Favor de ingresar sus credenciales</p>
      <div className='mt-8'>
        <div>
          <label className='text-lg font-medium'>Usuario</label>
          <input 
            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
            placeholder='Ingresa tu usuario' 

          />
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input 
          className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
          placeholder='Ingresa tu contraseña' 
          type='password'
          />
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <div>
            <input type="checkbox" id='recuerdame' />
            <label  className='ml-2 font-medium text-base' htmlFor="recuerdame">Recuerdame por 30 dias</label>
          </div>
          <button className='font-medium text-base text-blue-500  '>Olvide mi contraseña</button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button className='active:scale-95 active:duration-75 hover:scale-95 ease-in-out transition-all py-3 rounded-xl  bg-blue-500  text-white text-lg font-bold'> Ingresar </button>
          <button className="flex rounded-xl py-3 border-2 border-gray-500 items-center justify-center gap-2 active:scale-95 active:duration-75 hover:scale-95 ease-in-out transition-all"> 
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
            Ingresar  con Google
          </button>
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <p className='font-medium text-base'>No tienes cuenta..?</p>
          <button className='text-blue-500'>Crear cuenta</button>
        </div>
      </div>
    </div>
    
    
  )
}