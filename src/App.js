import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import FlightSearch from './components/FlightSearch';
function App() {
  return (
    <>
    <header><Header/></header>
    <Home/>
    <FlightSearch/>
    <div className='credit'>Matthias Schäfer, Martin Strohmeier, Vincent Lenders, Ivan Martinovic and Matthias Wilhelm.
"Bringing Up OpenSky: A Large-scale ADS-B Sensor Network for Research".
In Proceedings of the 13th IEEE/ACM International Symposium on Information Processing in Sensor Networks (IPSN), pages 83-94, April 2014.</div>
    </>
  );
}

export default App;
