import { Route, Routes } from 'react-router-dom'
import Browse from './components/Browse'
import Login from './components/Login'

const App = () => {
  return (
    <div className="text-2xl">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  )
}

export default App