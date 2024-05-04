// import {AuthProvider} from './hooks/useAuth'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/Home'

const MainRoutes = () => {
  return (
    // <AuthProvider>
    <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/" element={<HomePage />} />
      {/* <Route
          path="/signIn"
          element={
            <ProtectedLayout>
              
            </ProtectedLayout>
          }
        />
        <Route
          path="/signUp"
          element={
            <ProtectedLayout>
            
            </ProtectedLayout>
          }
        />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route
          path="/premium"
          element={
            <ProtectedLayout>
              
            </ProtectedLayout>
          }
        /> */}
    </Routes>
    // </AuthProvider>
  )
}

export default MainRoutes
