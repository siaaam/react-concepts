import { useContext } from 'react';
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './NavigationBar';
import Private1 from './Private1';
import Private2 from './Private2';
import Private3 from './Private3';
import Login from './Login';
import Registration from './Registration';
import Home from './Home';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  } else {
    return children;
  }
};

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return children;
  } else {
    return <Navigate to="/private1" />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route
          path="/private1"
          element={
            <PrivateRoute>
              <Private1 />
            </PrivateRoute>
          }
        />
        <Route
          path="/private2"
          element={
            <PrivateRoute>
              <Private2 />
            </PrivateRoute>
          }
        />
        <Route
          path="/private3"
          element={
            <PrivateRoute>
              <Private3 />
            </PrivateRoute>
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
    </BrowserRouter>
  );
}

export default App;
