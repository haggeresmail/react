import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  {Portfolio,Portfoliolist,Portfoliotitle,Portfolioitem,Span,Box,Img,Overlay,Overlayspan} from'./style.js'


const Protofile = ()=>{
  const [images,setImages]=useState([]);
  useEffect(()=>
  { axios.get('js/data.json').then(res=>{setImages(res.data.portfolio)})},[]
  )
  const portfolioImage=images.map((imageItem)=>{
    return(
      <Box key={imageItem.id}>
            <Img src={imageItem.image} alt=""/>
            <Overlay>
                <Overlayspan>Show Image</Overlayspan>
                
            </Overlay>
        </Box>
    )
  })
  
  return (
    <Portfolio>
    <Portfoliotitle><Span>My</Span> Portfolio</Portfoliotitle>
    <Portfoliolist>
        <Portfolioitem active>All</Portfolioitem>
        <Portfolioitem >HTML</Portfolioitem>
        <Portfolioitem>Photoshop</Portfolioitem>
        <Portfolioitem >Wordpress</Portfolioitem>
        <Portfolioitem >Mobile</Portfolioitem>
    </Portfoliolist>
    
    <div className='box'>
        
        {portfolioImage}
        
       </div>
    
</Portfolio>
  
  );

}
export default Protofile;