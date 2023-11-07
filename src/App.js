
import './App.css';
import CurrencyConverterInfo from './component/CurrencyConverterInfo';
import RupeeConverter from './component/RupeeConverter';
function App() {
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <RupeeConverter/>
      <CurrencyConverterInfo/>
    </div>
  );
}

export default App;
