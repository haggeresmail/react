import React from 'react';
import {Creative,Creativeinfo,Infotitle,Span,Infodesc,Infodir,Anchor} from './style.js'; 


const About = ()=>{
  
  return (
    <Creative>
    <Creativeinfo>
        <Infotitle><Span>This is</Span> Me</Infotitle>
        <Infodir>Creative Director</Infodir>
        <Infodesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
        </Infodesc>
        <Infodesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
        </Infodesc>
    </Creativeinfo>
</Creative>

  )

}
export default About;
