import logo from './img/user-avatar.png';
import { useState, useEffect, Component } from 'react';
export default function Header (){
  const [showProfile, setShowProfile] = useState(false);




  function showUserMenu(){
    let rootProps = document.querySelector(':root');
  if(showProfile=== false){
    rootProps.style.setProperty('--rotation-angle', '224deg');
    rootProps.style.setProperty('--display-profile', 'flex');
    setShowProfile(true);
  }else{
    rootProps.style.setProperty('--rotation-angle', '45deg');
    rootProps.style.setProperty('--display-profile', 'none');
    setShowProfile(false);
  }
    
  } 




  return(
    
  <>
  
    <div  className="header"> 
    <div className="logo">Awesome Kanban Board</div>
    <div className="user" onClick={showUserMenu}> <img src={logo} />
    <div className="profile">
      <div><a href='#'>Profile</a></div>
      <div><a href='#'>Log Out</a></div>
    </div>
    
    </div>
    
    
     </div>

  
  </>
  )
  }