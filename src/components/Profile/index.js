import axios from 'axios';
import React ,{ useEffect, useState } from 'react';
import {Profileskills,Profileskillsprofile,Profilelist,Profileitem,Profileitemspan,Parent,Spanweb,Skills,Skillsdesc,Bar ,Spantitle,Spanperc,Spansp1} from './style.js'


const Profile = ()=>{
  const [data,setData]=useState([]);
  // const [prece,setPrece]=useState([]);
  useEffect(()=>
  { axios.get('js/data.json').then(res=>{setData(res.data.profile)})},[]
  )
  const profileData=data.map((dataItem)=>{
    return ( 
<Bar>
                <Spantitle>{dataItem.title}</Spantitle>
                <Spanperc>{dataItem.prece}</Spanperc>
                <Parent>
                    <Spansp1 ></Spansp1>
                </Parent>
            </Bar>
    )
  })
  
  return(
    <Profileskills>
    <div class="container">
        <Profileskillsprofile>
            <h2 class="profile-title"><Profileitemspan>My </Profileitemspan>Profile</h2>
            <Profilelist>
                <Profileitem >
                    <Profileitemspan>Name</Profileitemspan>
                    Hamza Nabil
                </Profileitem>
                <Profileitem >
                    <Profileitemspan>Birthday</Profileitemspan>
                    21/1/1996
                </Profileitem>
                <Profileitem>
                    <Profileitemspan>Address</Profileitemspan>
                    Ain shams
                </Profileitem>
                <Profileitem>
                    <Profileitemspan>Phone</Profileitemspan>
                    4444 5555 6666
                </Profileitem>
                <Profileitem >
                    <Profileitemspan>Email</Profileitemspan>
                    hamza@hamza.com
                </Profileitem>
                <Profileitem >
                    <Profileitemspan>Website</Profileitemspan>
                    <Spanweb class="web">www.google.com</Spanweb>
                </Profileitem>
            </Profilelist>
        </Profileskillsprofile>
        
        <Skills>
            <h2 class="skills-title">Some <span>skills</span></h2>
            <Skillsdesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </Skillsdesc>
            
            {profileData}
           
           
        </Skills>
        
    </div>
</Profileskills>
  );

}
export default Profile;