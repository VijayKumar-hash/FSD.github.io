import React, { useState, useEffect } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow,MDBIcon, MDBCol, MDBContainer , MDBBtn} from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';

import Footer from './Footer';
import stl from '../CSS/dashboardcomp.module.css';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';




const DashboardComp = () => {
  document.body.style.backgroundColor="lightblue";

  const deletesuccess = () => {
    toast.error("Deleted Successfully")
  }
 
  const[data,setData] = useState([])
  
  
const[a,seta]=useState(false)

  const deletehandle=(dtd)=>{
    axios.delete(`http://localhost:9098/delete/${dtd}`,
    {
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    }
    ).then((result)=>{
      deletesuccess();
      seta(true);
      // window.location.reload();
      
    }).catch((err)=>{
      console.log(err)
    })
  }

    useEffect(()=>{
    axios.get(`http://localhost:9098/viewfav/${sessionStorage.getItem("email")}`,
    {
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    }
    ).then((result) => {
      setData(result.data);
      console.log(result.data);
      seta(false)
      
    }).catch((err) => 
    {
      console.log(err)
    }
    )},[a]);



  return (
    <div style={{backgroundColor:'lightblue'}}>
    <MDBContainer >
      <form style={{ 
        margin: "auto", 
        padding: "15px", 
        maxwidth: "400px" , 
        alignContent: "center"
      }}
    >

      </form>
      <div style={{ marginTop: "100px" }}>
        <h2 className='text-center'> </h2>
        <MDBRow>
          <MDBCol size="12">

            <MDBTable hover>
              <MDBTableHead dark>
                <tr>
                  <th scope='col'className={stl.foodd}> No </th>
                  <th scope='col'> Favid </th>
                  <th scope='col'className={stl.foodd}> Published-Date </th>
                  <th scope='col'> Food-Catogery </th>
                  <th scope='col'className={stl.foodd}> Score </th>
                  <th scope='col'> <MDBIcon fas icon="trash" /> </th>
                </tr>
              </MDBTableHead>
              {data.length === 0 ? (
                <MDBTableBody className="align-centrt mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                    <Button variant="warning" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
          
        />
        Add Data...
      </Button>
                    </td>
                  </tr>

                </MDBTableBody>
              ) : (
                data.map((item, index) => (
                  <MDBTableBody key={index}>
                    <tr >
                      <th style={{backgroundColor:'lightblue'}} className={stl.foodd}>{index + 1}</th>
                      <td>{item.favid}</td>
                      <td style={{backgroundColor:'lightblue'}} className={stl.foodd}>{item.marketCountry}</td>
                      <td className='table-secondary'>{item.foodcategory}</td>
                      <td style={{backgroundColor:'lightblue'}} className={stl.foodd}>{item.fdcid}</td>
                      <td className='table-warning'><MDBBtn className="mx-2" color='danger' style={{borderRadius:'40px',height:'5vh'}}   onClick={() => deletehandle(item.favid)}><MDBIcon fas icon="trash" /></MDBBtn></td>
                    </tr>
                  </MDBTableBody>
                ))
              )}




            </MDBTable>


          </MDBCol>

        </MDBRow>

      </div>
    </MDBContainer>
    <Footer />
    <ToastContainer autoClose={200}/>
    </div>
  )
}

export default DashboardComp

