import './App.css';
import Main from './Components/Main';
import OneParam from './Components/OneParam';
import TwoParam from './Components/TwoParam';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/home" />
        <OneParam path="/home/:one" />
        <TwoParam path="/home/:one/:two" />
      </Router>
    </div>
  );
}

export default App;
