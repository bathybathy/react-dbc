import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login"
import LoginProvider from './context/LoginContext';
import Logado from "./pages/Logado"

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <LoginProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logado" element={<Logado />} />
        </Routes>
        </LoginProvider>
        </BrowserRouter>
    
      
    </div>
  );
}

export default App;
