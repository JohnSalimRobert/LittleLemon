import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import BookingTable from  './components/BookingTable'
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <div className='App'>
    <Header />
    <Nav />
    <Routes>
    <Route path='/bookingTable' element= { <BookingTable /> } />
    <Route path='/' element= { <Homepage /> } />
    </Routes>
    <Footer />
    </div>
    </>
  );
}

export default App;
