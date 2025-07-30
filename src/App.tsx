import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery";
import PrivateRoute from "./components/PrivateRoute";
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/photoGallery"
          element={
            <PrivateRoute>
              <PhotoGallery />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;