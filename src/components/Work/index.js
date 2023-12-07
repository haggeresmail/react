import React, { Component } from 'react';
import {WorkSection,Worktitle,Span,Line,Part,Icon,Partdesc,Parttitle}from './style.js';
import axios from 'axios';

class Work extends Component{
state={
  works:[]
}
componentDidMount(){
  axios.get('js/data.json').then(res=>{this.setState({works:res.data.works})})
}

  render(){
    const {works}=this.state;
    const Worklist=works.map( (workitem) =>{
      return (
                     <Part first={workitem.id} key={workitem.id}>
                         <Icon className={workitem.icon_name}></Icon>
                         <Parttitle >{workitem.title}</Parttitle>
                         <Line />
                         <Partdesc >
                         {workitem.body}
                         </Partdesc>
                     </Part>
                     )
    })
  
  return (
   <WorkSection>
            <div className="container">
                <Worktitle><Span>My</Span> Work</Worktitle>
                {Worklist}
                
            </div>
            </WorkSection>
  );
  }

}
export default Work;