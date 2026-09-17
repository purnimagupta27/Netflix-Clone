import backgroundImage from '../assets/bg_image.png'
import Header from './Header'

const Login = () => {
  return (
    <div className='relative'>
        <Header />
        <img 
        className="w-full h-screen object-cover"
        src={backgroundImage} 
        alt="Background-Image" />

        <form className=' h-120 absolute w-3/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 bg-black/80 text-white'>
          <h2 className='font-bold text-3xl py-4'>Sign In</h2>

          <input type="email" 
          placeholder='Email address or Phone number' 
          className='p-4 mt-4 mb-6 bg-zinc-800 text-sm w-full rounded-sm' />

          <input type="password" 
          placeholder='Password' 
          className='p-4 mt-2 text-sm w-full bg-zinc-800 rounded-sm'/>

          <button className='bg-red-700 text-white w-full p-4 mt-10 text-sm rounded-sm cursor-pointer'>Sign in</button>
        </form>
      </div>
  )
}

export default Login