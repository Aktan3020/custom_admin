import React from 'react'
import {Main,MainDashdoard,ListOfPatients,AdminNews,AdminDoctors} from './pages/index.js'
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='App'>
        <Router>
        <Routes>
            <Route path='/'element={<Main/>} />
            <Route path='/admin'element={<MainDashdoard/>} />
            <Route path='/admin/patients'element={<ListOfPatients/>} />
            <Route path='/admin/news'element={<AdminNews/>} />
            <Route path='/admin/doctors'element={<AdminDoctors/>} />



        </Routes>
    </Router> 
    </div>
 
  )
}

export default App