import './App.css';
import Navbar from './components/Navbar/Navbar';
import CurrentWeather from './components/WebPages/CurrentWeather';
import WeatherInsights from './components/WebPages/WeatherInsights';
import Forecast from './components/WebPages/Forecast';
// import Search from './components/Search';
import Stories from './components/WebPages/Stories';
// import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div className="container mt-4">
        <Routes>
          <Route exact path='/' element={<CurrentWeather/>}>
          </Route>
          <Route exact path='/weatherinsight' element={<WeatherInsights/>}>
          </Route>
          {/* <Route exact path='/search' element={<Search/>}>
          </Route> */}
          <Route exact path='/forecast' element={<Forecast/>}>
          </Route>
          <Route exact path='/stories' element={<Stories/>}>
          </Route>
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
    </>
  );
}

export default App;
