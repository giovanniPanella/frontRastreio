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
        <Route
          path="/*"
          element={
            <>
              <Menu />
              <Routes>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/inserir-lote" element={<InserirLote />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
