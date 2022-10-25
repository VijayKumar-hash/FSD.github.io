import React from 'react'
import er from '../Resources/errorimage.gif'
import { Link } from 'react-router-dom';


export default function PageNotFound() {
  document.body.style.backgroundColor="lightblue";
  return (
    <div style={{width:'100%'}}>    

            <h1 style={{marginTop:'15rem',color:'red'}}>404</h1>
            <h1 style={{marginTop:'1rem',color:'red',marginBottom:'3rem'}}>Page Not Found</h1>
            <Link to='/' style={{color:'blue',marginTop:'5rem'}}><h2>LandingPage</h2></Link>
      </div >
  )
}
