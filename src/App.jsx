import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Cadastro from './pages/Cadastro';
import InserirLote from './pages/InserirLote';
import Rastreio from './pages/Rastreio';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/rastreio" element={<Rastreio />} />
        <Route path="/" element={<Rastreio />} />
    
      </Routes>
    </Router>
  );
}

export default App;
