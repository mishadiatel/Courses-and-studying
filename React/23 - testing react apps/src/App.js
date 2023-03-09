import logo from './logo.svg';
import Greeting from './components/Greeting'
import './App.css';
import Async from './components/Async';

function App() {
  return (
    <div className="App">
      <Async />
      <Greeting />
    </div>
  );
}

export default App;
