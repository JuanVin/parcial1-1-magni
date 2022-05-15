
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NuestrosAutos from './components/NuestrosAutos';
import DetalleAuto from './components/DetalleAuto';
import Contacto from './components/Contacto';
import Buscador from './components/Buscador';
import 'bootstrap/dist/css/bootstrap.css'

const App = () => (
  
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/nuestros_autos' element={<NuestrosAutos />} />
        <Route path='/detalle_auto/:index' element={< DetalleAuto/>} />
        <Route path='/contacto' element={< Contacto/>} />
        <Route path='/busqueda/:parametro' element={< Buscador/>} />
      </Routes>
  </Router>
);

export default App;
