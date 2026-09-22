import { Route, Routes } from 'react-router-dom'
import Browse from './components/Browse'
import Login from './components/Login'
import {Provider} from 'react-redux'
import appStore from './utils/appStore'

const App = () => {
  return (
    <div className="text-2xl">
      <Provider store={appStore}>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
      </Provider>
    </div>
  )
}

export default App