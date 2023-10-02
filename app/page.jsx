import Image from 'next/image'
import FormLogin from '../components/login/FormLogin'
import MyComponent from '../components/MiComponente';
export default function Home() {    
  return (
    
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 ">
        
          <FormLogin/>
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200 '>
        
        <div className='w-60 h-60 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full animate-bounce'/>
        <div className='w-full h-1/2 absolute bottom-1 bg-white/10 backdrop-blur-lg' />
      </div>
    </div>
  )
}
  