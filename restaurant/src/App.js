import logo from './logo.svg';
import './App.css';
import Maincomponent from './Component/Maincomponent';
import {BrowserRouter} from 'react-router-dom'
//provider will help to pass redux store to all elements
import {Provider} from 'react-redux'
import myStore from './redux/store'
function App() {
  //console.log("Redux Store Observe",myStore.getState())
  return (
    <div className="App">
      <Provider store={myStore}>
      <BrowserRouter>
      <Maincomponent />
      </BrowserRouter>
      </Provider>
     
    </div>
  );
}

export default App;
