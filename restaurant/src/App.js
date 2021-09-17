import logo from './logo.svg';
import './App.css';
import Maincomponent from './Component/Maincomponent';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Maincomponent />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
