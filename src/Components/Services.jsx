import React from 'react'
import '../CSS/service.css'
import Footer from './Footer';

export default function Services() {
  document.body.style.backgroundColor="lightblue";
  return (
    <>
    <div style={{alignItems:'center',alignContent:'center'}}>
      <h2 >This is the NutritionApp</h2>
      <hr></hr>
      <h2>This App will let you search for the Food and find out the Different Catagories of the Food. The Score will Also be provided!</h2>

      <Footer/>
      
      </div>
      </>
  )
}
