import {Routes, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import './App.css';
const App = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/doctor/:id" element={<DoctorDetails />} />
  </Routes>
  );
  



export default App; 