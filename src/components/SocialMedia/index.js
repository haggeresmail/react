import React, { Component } from 'react';
import  {Social,SocialP,Socialmedia,Pspan,Icon,Info2}from './style.js';
import axios from 'axios';

class SocialMedia extends Component {

  state={
    social:[]
  }
componentDidMount(){
  axios.get('js/data.json').then(res=>{this.setState({social:res.data.social})})
}

  render(){
    const {social}=this.state;
    const socialList=social.map((item)=>{
      return(
<Social  item={item.id} key={item.id}>
                <Icon className={item.icon}></Icon>
                <SocialP>
                    <Pspan>{item.title}</Pspan>
                    <Info2>{item.body}</Info2>
                </SocialP>
            </Social>
      )
    })
  return (
    <Socialmedia>
            {socialList}
            
        </Socialmedia>
  );
  }
}
export default SocialMedia;