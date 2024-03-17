import './App.css';

import Converter from './components/Converter/Converter';

function App() {
  return (
    <div className="App">
      <h1 className="title">Cryptocurrency Converter</h1>
      <div className="converter">
        <Converter />
      </div>
    </div>
  );
}

export default App;
