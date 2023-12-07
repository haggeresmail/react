import React from 'react';
// import { Link } from 'react-router-dom';

import { NavBarSection,Logo,Logotext,UlList,Listitem,Anchor,StyledLink} from './style.js';



const Navbar = ()=>{
  
  return (
    <NavBarSection>
            
    <div className="container">
        
        <Logo>
            <Logotext>Ultra Profile</Logotext>
        </Logo>
        
      
        
        <UlList>
            <Listitem ><StyledLink to="/">Home</StyledLink></Listitem>
            <Listitem ><Anchor href="#">Work</Anchor></Listitem>
            <Listitem><Anchor href="#">Portfolio</Anchor></Listitem>
            <Listitem ><Anchor href="#">Resume</Anchor></Listitem>
            <Listitem ><Anchor href="#">About</Anchor></Listitem>
            <Listitem ><StyledLink to='/contact'>Contact</StyledLink></Listitem>
            </UlList>
        
    </div>
    
    </NavBarSection>

  );

}
export default Navbar;