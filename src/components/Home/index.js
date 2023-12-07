import React from 'react';
import {Homesection,Span,Homebtn,Homedesc,Homeinfo,Homeinformation,Hometitle} from './style.js'


const Home = ()=>{
  
  return (
    <Homesection>
    <div className="container">
        <Homeinformation>
            <Hometitle >Hagger Esmail</Hometitle>
            <Homeinfo >Creative Director</Homeinfo>
            <Homedesc >
                Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </Homedesc>
            <Homebtn >Let's Begin</Homebtn>
        </Homeinformation>
    </div>
    </Homesection>
  );

}
export default Home;