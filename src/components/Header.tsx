import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='absolute px-20 py-8 bg-linear-to-b from-black' >
      <img 
      className='w-38'
      src={logo} 
      alt="Logo" />
    </div>
  )
}

export default Header