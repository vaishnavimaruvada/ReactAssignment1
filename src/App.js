import {Component} from 'react'
import{Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import BookingPage from './components/BookingPage'
import Orders from './components/Orders'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/booking' Component={BookingPage}/>
        <Route exact path='/order' Component={Orders}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
}
}

export default App;