import React ,{ Component } from 'react';

import Home from './../Home'
import About from './../About'
import Footer from './../Footer'
// import Header from './../Header'
import Profile from './../Profile'
import Protofile from './../Protofile'
import SocialMedia from './../SocialMedia'
import Work from './../Work'

class Index extends Component {
  render(){
  return (
    <div className="App">
      {/* <Header /> */}
      <Home />
      <Work />
      <Protofile />
      <Profile />
      <About />
      <SocialMedia />
      <Footer />
      
    </div>
  );
}
}
export default Index;
