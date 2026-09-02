import { Route, Routes } from 'react-router';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Profile from '../pages/Profile';
import NewBlog from '../pages/NewBlog';
import About from '../pages/About'
import PrivateRouter from './PrivateRouter';

export default function AppRouter() {

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/' element={<Dashboard />} />

      <Route element={<PrivateRouter />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/new-blog' element={<NewBlog />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}
