import React, { useEffect, useState } from 'react';
import './NavBar.scss';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const NavBar = () => {
    const [show,handleShow]=useState(false)

    const transitionNavBar=()=>{
        if(window.scrollY<100){
            handleShow(true)

        }else{
            handleShow(false)
        }
    }
   useEffect(() => {
     window.addEventListener('scroll',transitionNavBar)
   
     return () => {
       window.removeEventListener('scroll',transitionNavBar)
     }
   }, [])
   
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <div className='nav__contents'>

        <div className='left'>
        
        <img className='nav__logo' src='https://www.portefeuilledividendes.com/wp-content/uploads/2021/10/Netflix.png'
        alt=''>
      </img>
      <ul className='NavBar'>
        <li>Accueil</li>
        <li>Séries</li>
        <li>Films</li>
        <li>Nouveauté les plus regardées</li>
        <li>Ma liste</li>
        <li>Explorer par langue</li>
      </ul>
        
        </div>



      <div className='right'>
        <div className='content-right'>
      <SearchOutlinedIcon/>
      <span>DIRECT</span>
      <span>Jeunesse</span>
      < NotificationsNoneOutlinedIcon/>
    
        <img  className='nav__avatar'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSviOG6uGtnghbCeHEZQmBH1HTOqP07nvNYlXL2KBFCEE61w3Defy_jtsiMpTWy7Q2A2cQ&usqp=CAU'
        alt=''
        />
        <ArrowDropDownOutlinedIcon/>
        </div>
        </div>
        </div>
       
         </div>
  )
}

export default NavBar