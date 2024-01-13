import logo from './logo.svg';
import './App.css';
import LifeCycleA from './class_component/LifeCycleA';
import { Routes, Route } from "react-router-dom"
import Home from './component/Home/Home';
function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Home} />

    </div>
  );
}

export default App;
