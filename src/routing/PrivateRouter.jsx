import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../hooks/useAuth'

export default function PrivateRouter() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }
  return user ? <Outlet /> : <Navigate to='/login' replace />
}
