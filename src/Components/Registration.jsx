import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import classes from '../CSS/Form.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from './Footer';



export default function Registration() {

  sessionStorage.setItem("error", true);

  const navigate = useNavigate();

  const formValues = {
    userid: "",
    username: "",
    email: "",
    password: ""
  };

  const [data, setData] = useState(formValues);

  const handleinput = (evt) => {
    const { name, value } = evt.target;
    setData({ ...data, [name]: value });
    console.log(data);
  }



  const handlesubmit = (evnt) => {
    evnt.preventDefault();
    if (data.userid.length < 7 && data.password.length > 8 && data.username.length > 5 && data.email.includes('.com')) {
      axios.post(`http://localhost:9000/auth/adduser`,
        data
        , {
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then
        (
          res => {
            console.log('user added')
            toast.success('Registered Successfully!!')
            navigate('/login');
          }
        )
        .catch
        (
          
          (err) =>{
            console.log("error " + err);
            toast.error('User Already Exist')
          } 

        ) 
    
        }
      else {
        toast.error('errror in the validation')
  console.log('data not pushed');
}
  }


const lsign = '<';
const msign = '>';

return (
  <div>
  <div className={classes.mainform}>
    <Form className={classes.roleform}>
    <h2 className={classes.reg}>Registration Form</h2>
      <label className={classes.labelinput}>userId:</label>
      <input type='text' name="userid"
        value={data.userid} onChange={handleinput} autoComplete='off' />
      <div>
        {(data.userid.length > 6) ?
          <label className={classes.error}> character should  be {lsign} 7  </label>
          : ''}
      </div>

      <label className={classes.labelinput}>username:</label>
      <input type='text' name="username"
        value={data.username} onChange={handleinput} autoComplete='off' />
      <div>
        {(data.username.length < 6) ?
          <label className={classes.error}> character should  be {msign} 5</label>
          : ''}
      </div>


      <label className={classes.labelinput}>Email:</label>
      <input type='email' name="email"
        value={data.email}
        onChange={handleinput} autoComplete='off' />
      <div>
        {(!data.email.includes('.com')) ?
          <label className={classes.error}> Should contain  .com </label>
          : ''
        }
      </div>


      <label className={classes.labelinput}>password:</label>
      <input type='password' name="password"
        value={data.password} onChange={handleinput} />

      <div>
        {(data.password.length < 9) ?
          <label className='error'> password should {msign} 8 </label>
          : ''
        }
      </div>

      <button style={{marginTop:'10px',borderRadius:'45px'}} className={classes.btn1} onClick={handlesubmit}>Register</button>
    </Form>
  </div>
  <Footer/>
  </div>
)
}
