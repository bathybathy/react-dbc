import Counter from './components/Counter';
import Mirror from './components/Mirror';
import CountProvider from './components/context/CountContext';
import './App.css';
import NameProvider from './components/context/NameContext';
import Name from './components/Name';

function App() {
  return (
    <div className="App">
      <NameProvider>
        {/* <CountProvider>
          <Counter />
          <hr />
          <Mirror />
        </CountProvider> */}
        <Name />
      </NameProvider>
    </div>
  );
}

export default App;
