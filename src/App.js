import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar.js'
import Home from './component/Home.js'

function App() {
  return (

    <div>
      <h1 className="App">Hello React</h1>
      <Navbar/>
      <Home/>
    </div>

  );
}

export default App;
