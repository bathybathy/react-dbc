import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login"
import LoginProvider from './context/LoginContext';
import Logado from "./pages/Logado"
import Header from './components/header/Header';
import Home from "./pages/Home"
import Address from './pages/Address';
import CreateUser from './pages/CreateUser';
import UserProvider from './context/UserContext';
import NotFound from './pages/NotFound';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <LoginProvider>
          <UserProvider>
            <Header />
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logado" element={<Logado />} />
              <Route path='/address' element={<Address />} />
              <Route path='/create-user' element={<CreateUser />}>
                <Route path =':id' element={<CreateUser />} />
              </Route>
            </Routes>
            <Footer />
          </UserProvider>
        </LoginProvider>
        </BrowserRouter>
    
      
    </div>
  );
}

export default App;
