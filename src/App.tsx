import { Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Browse from './components/Browse'

const App = () => {
  return (
    <div className="text-2xl">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  )
}

export default App