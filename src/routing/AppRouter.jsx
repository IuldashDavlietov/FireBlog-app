import { Route, Routes } from 'react-router';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import NewBlog from '../pages/NewBlog';
import About from '../pages/About'

export default function AppRouter() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile/>} />
       <Route path='/new-blog' element={<NewBlog/>} />
         <Route path='/about' element={<About/>} />
    </Routes>
  )
}
