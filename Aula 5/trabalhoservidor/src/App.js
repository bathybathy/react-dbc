import TrabalhadorProvider from './context/TrabalhadorContext';
import Home from './components/Home'
import './App.css';
import Lista from './components/Lista'

function App() {
  return (
    <div className="App">
      <TrabalhadorProvider>
      <Home />
      <Lista />
      </TrabalhadorProvider>
    </div>
  );
}

export default App;
