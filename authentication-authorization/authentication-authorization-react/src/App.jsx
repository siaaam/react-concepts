import React, { useContext } from 'react';

import Layout from './components/layout/Layout';

import Home from './pages/Home';
import Private1 from './pages/Private1';
import Private2 from './pages/Private2';
import Login from './pages/Login';
import Registration from './pages/Registration';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './context/AuthContext';

const AuthRequired = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  } else {
    return children;
  }
};

const PublicRoute = ({ children }) => {
  const location = useLocation();

  const { user } = useContext(AuthContext);
  if (!user) {
    return children;
  } else {
    console.log(location);
    return <Navigate to={location?.state?.from || '/private1'} />;
  }
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route
            path="/private1"
            element={
              <AuthRequired>
                <Private1 />
              </AuthRequired>
            }
          />
          <Route
            path="/private2"
            element={
              <AuthRequired>
                <Private2 />
              </AuthRequired>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
