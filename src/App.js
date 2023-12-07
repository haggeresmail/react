
import React ,{ Component } from 'react';
// import './App.css';
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Index from './components/index';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path='/' Component={Index} />
      <Route exact path='/contact' Component={Contact} />
      </Routes>
    
     </BrowserRouter>
    </div>
  );
}
}
export default App;
