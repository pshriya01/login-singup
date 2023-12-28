import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup />} ></Route>
        <Route path='/signin' element={<Signin />} ></Route>
    </Routes>
  )
}

export default AllRoutes