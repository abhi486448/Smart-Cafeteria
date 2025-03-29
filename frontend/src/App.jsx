import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'
import UserLogout from './pages/UserLogout'
import UserProtectWrapper from './pages/UserProtectWrapper'
import Dashbord from './pages/Dashbord'
// import FoodMenu from './pages/FoodCard'
import QueueStatus from './component/QueueStatus'



const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/Signup' element={<UserSignup />} />
        <Route path='/home' 
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
        } />
        <Route path='/user/logout' 
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
        } />
        {/* <Route path='/order' element={<FoodMenu />} /> */}
        <Route path='/Dashbord' element={<Dashbord />} />
        <Route path='/Dashbord/QueueStatus' element={<QueueStatus />} />
      </Routes>
      
    </div>
  )
}

export default App