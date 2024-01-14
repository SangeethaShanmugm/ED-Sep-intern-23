import logo from './logo.svg';
import './App.css';
import LifeCycleA from './class_component/LifeCycleA';
import { Routes, Route } from "react-router-dom"
import Home from './component/Home/Home';
import ListingApi from './component/Listing/ListingApi';
function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Home} />
      <Route exact path="/listing/:mealId" component={ListingApi} />

    </div>
  );
}

export default App;
