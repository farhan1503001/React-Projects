import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Person from './components/Person';
/*
function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Person />
    </div>
  );
}
*/

class App extends Component{
  render(){
    return(
      <div className="App">
      <h1>Hello world!</h1>
      <Person name="Karim" age="23">A very hard working man from Bangladesh</Person>
      <Person name="Shahnewaz" age="44"/>
      <Person name="Moloy Kumar" age="21"/>
    </div>
    );
  }
}



export default App;
