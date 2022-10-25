import React, { useState, useEffect } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import axios from 'axios';
import backimg from '../Resources/dash.jpeg'
import stl from '../CSS/dashboardcomp.module.css'
import { MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBIcon,MDBContainer , MDBBtn} from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import DetailedData from './DetailedData';
import NutritionDetails from './NutritionDetails'
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';



const DashboardComp = () => {
  document.body.style.backgroundColor="lightblue";
  // document.body.style.backgroundImage="url('https://wallpaperaccess.com/full/1189740.jpg')";

  const addsuccess = () => {
    toast.success("Added to Favorite")
  }

  const addfailed = () => {
    toast.error("Already Added")
  }

  const [data, setData] = useState([])
  const[value, setValue] = useState("")
  // const[sortvalue, setSortValue] = useState("")

  // const sortOptions = ["fdcId" , "foodCategory", "publishedDate", "fdcId" ]

  

  const addHandler=(a,b,c,d)=>{
    const email = sessionStorage.getItem('email')
    console.log(email)
    // const dd = [favid,email]
    
    axios.post(`http://localhost:9098/addfav`,{
      favid:a,
      email:email,
      fdcid:b,
      ingredients:'',
      foodcategory:c,
      marketCountry:d
    },
    {
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
    }
    ).then((result)=>{
        if(result.status === 201 || result.status === 200)
        {
          console.log(result)
          addsuccess();
        }

    }).catch((error)=>{
      console.log('connection not made')
      addfailed();
    })
  }

  useEffect(() => {
    loadUserData()
  }, []);


  const loadUserData = async () => {
    return await axios
      .get("https://api.nal.usda.gov/fdc/v1/foods/search?api_key=dHvVHeha8U5VUQodKvOVMcNtRWpALZgtAgBn48Fu&query=apple&page=$%7Bpage%7D&size=10")
      .then((response) => setData(response.data.foods))
      .catch((err) => {
        console.log(err)
      })
  }
const handleSearch = async(e)=>{
  e.preventDefault();
  return await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=dHvVHeha8U5VUQodKvOVMcNtRWpALZgtAgBn48Fu&query=${value}&page=$%7Bpage%7D&size=10?`)
  .then((response)=>{
    setData(response.data.foods)
    setValue("");
  })
  .catch((err)=>console.log(err))
}



  return (
    <MDBContainer>
    <div className={stl.imagestyle}>
        <img src={backimg} alt='no'/>
      </div>
      <form style={{ 
        margin: "auto", 
        padding: "15px", 
        maxwidth: "400px" , 
        alignContent: "center"
      }}
      className="d-flex input-group w-auto" onSubmit={handleSearch}>

        <input type="text"  style={{borderRadius:'40px',height:'8vh'}}  className='form-control'
        placeholder='Search here..' value ={value}
        onChange={(e)=>setValue(e.target.value)}/>
   
          <MDBBtn type="submit" color="dark" style={{marginLeft:'8px',borderRadius:'40px',height:'8vh'}}> Search</MDBBtn>
        

      </form>
      <div  className={stl.maintb}>
        <MDBRow   className={stl.mdsize}>
          <MDBCol>
            <MDBTable hover>
              <MDBTableHead dark >
                <tr>
                  <th scope='col' className={stl.foodd}> No </th>
                  <th scope='col'> FavId </th>
                  <th scope='col' className={stl.foodd}> Published-Date </th>
                  <th scope='col'> Food-Catogery </th>
                  <th scope='col'className={stl.foodd}> Score </th>
                  <th scope='col' className={stl.apnasize} > Add Fav </th>
                </tr>
              </MDBTableHead>
              {data.length === 0 ? (
                <MDBTableBody className="align-centrt mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                    <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading Data...
      </Button>
                    </td>
                  </tr>

                </MDBTableBody>
              ) : (
                data.map((item, index) => (
                  <MDBTableBody key={index}>
                    <tr className={stl.hii}>
                      <th  style={{backgroundColor:'lightblue'}} className={stl.foodd} ><td className={stl.hii}> 
                        <NutritionDetails
                      publishedDate={item.publishedDate}
                      indexId = {index+1}
                      fdcId= {item.fdcId}
                      description= {item.description}
                      dataType={item.dataType}
                      gtinUpc= {item.gtinUpc}
                      brandOwner={item.brandOwner}
                      foodCategory={item.foodCategory}
                      score={item.score}
                      servingSizeUnit={item.servingSizeUnit}
                      householdServingFullText={item.householdServingFullText}
                     />  
                     </td></th>
                      <td><DetailedData  nestedData = {item.foodNutrients} IdName={item.fdcId}/></td>
                      <td  className={stl.foodd}>{item.publishedDate}</td>
                      <td className='table-secondary'>{item.foodCategory}</td>
                      <td style={{backgroundColor:'lightblue'}} className={stl.foodd}>{item.score}</td>
                      <td className='table-warning'><MDBBtn className="m-1" color='info' style={{borderRadius:'55px'}} onClick={() => addHandler(item.fdcId,item.score,item.foodCategory,item.publishedDate)} ><MDBIcon fas icon="plus-circle" /></MDBBtn></td>
                    </tr>
                  </MDBTableBody>
                ))
              )}

            </MDBTable>
          </MDBCol>
        </MDBRow>
      </div>
      <Footer />
      <ToastContainer  autoClose={200}/>
    </MDBContainer>
    
    // </div>
  )
}

export default DashboardComp

