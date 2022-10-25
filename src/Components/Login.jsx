import React, {  useState } from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from '../CSS/login.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';


export default function Login() {


  const loginfailed = () => {
    toast.error('Invalid Credentials',{
      position:'top-right'
    })
  }

  const loginsuccess = () => {
    toast.success('Loggedin successfully',{
      position:'top-right'
    })
  }





  const navigate = useNavigate();

  const logindetail = {
  "email":"",
  "password":""
  };

  const [credential, setCredential] = useState(logindetail);

  const handleinput = (evt) => {
    const { name, value } = evt.target;
    setCredential({ ...credential, [name]: value });
  }




  const handlelogin=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:9000/auth/login`,credential
    ).then((res)=>{
      sessionStorage.setItem("token",res.data.token)
      if(res.status === 200){
        sessionStorage.setItem("loggedin",true);
        sessionStorage.setItem("email",credential.email);
        sessionStorage.setItem("token",res.data.token)
        loginsuccess();
        navigate('/dashboard')
        
      }
      
    }).catch(err=>{

      loginfailed();
    })
  }


  return (
    <div>
    <div className={classes.bodyc}>
      <div className={classes.mainform}>
      <Form className={classes.roleform}>
      <h2 className={classes.reg}>Login form</h2>
        <label className={classes.labelinput}>Email:</label>
        <input type='text'
           name='email'
          value={credential.email} onChange={handleinput} autoComplete='off' />
        <label className={classes.labelinput}>Password:</label>
        <input type='password'
           name='password'
          value={credential.password} onChange={handleinput} />
          
        <button style={{marginTop:'10px',marginBottom:'10px', borderRadius:'45px' }} className={classes.btn1} onClick={handlelogin}><h4><b>Login</b></h4></button>
        
        <label >Don't have account </label>
        <button style={{borderRadius:'45px' ,color:'white' , }} className={classes.btn1} ><Link style={{textDecoration: 'none', color:'white'}} to='/register'><b>Create here</b></Link></button>
      </Form>
      
      </div>
      
    </div>
    <Footer/>
    <ToastContainer />
    </div>
  )
}