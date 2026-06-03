import Layout from './components/Layout'

import './style/style.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Aboutus from './pages/Aboutus'


function App() {
  

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Mainpage /> }/>
        <Route path='/aboutus' element={<Aboutus />} />
      </Routes>
    </Layout>
  )
}

export default App
