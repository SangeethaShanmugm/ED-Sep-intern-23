import logo from './logo.svg';
import './App.css';
import LifeCycleA from './class_component/LifeCycleA';
import { Routes, Route } from "react-router-dom"
import Home from './component/Home/Home';
import ListingApi from './component/Listing/ListingApi';
import Details from './component/Detail/Details';
function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Home} />
      <Route path="/listing/:mealId" component={ListingApi} />
      <Route path="/details" component={Details} />

    </div>
  );
}

export default App;
