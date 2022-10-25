import React, { Fragment } from 'react'
import limg from '../Resources/limg1.jpg';
import classes from '../CSS/LandingPage.module.css'
import Footer from './Footer';
import bak from '../Resources/back.jpg';



import { Link, } from "react-router-dom";
const Landing = () => {
  return (
    <div className={classes.back}>
      <div className={classes.mainlanding}>
        <div className={classes.ml1}>
            <img src= {limg}  alt=""/>
        </div>
        <div className={classes.ml2}>
            <h1 style={{ marginLeft:'3.7rem' }}  >Tell me what you eat, and I will tell you what you are</h1>
            {/* <p>Healthy Daily Dose</p> */}
            <div className={classes.ml2a}>
              {
                !sessionStorage.getItem("loggedin") ? (
                  <Fragment>
                    <Link to="/login"> <button className={classes.landbtn}  variant="outline-secondary"> Login </button> </Link>
                    <Link to="/register"><button className={classes.landbtnn} variant="outline-secondary">Signup</button></Link>
                  </Fragment>
                ):null
              }
           
            </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}



export default Landing