import Login from "./Login"
import backgroundImage from '../assets/bg_image.png'

const Body = () => {
  return (
    <div>
      <Login />
        <img 
        className="w-full h-screen object-cover"
        src={backgroundImage} 
        alt="Background-Image" />
      </div>
  )
}

export default Body