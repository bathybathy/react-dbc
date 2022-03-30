import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login"
import LoginProvider from './context/LoginContext';
import Logado from "./pages/Logado"
import Header from './components/header/Header';
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <LoginProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logado" element={<Logado />} />
          </Routes>
        </LoginProvider>
        </BrowserRouter>
    
      
    </div>
  );
}

export default App;
