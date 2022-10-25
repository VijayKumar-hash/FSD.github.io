import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import logo from '../Resources/logo.jpg'
import Navbar from 'react-bootstrap/Navbar';
import '../CSS/Logoimg.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { toast } from 'react-toastify';
import {
  MDBIcon,
} from "mdb-react-ui-kit";



export default function DarkNavbar() {





  const navigate = useNavigate();

const handlelogout =()=>{
  toast.success('LoggedOut successfully')
  sessionStorage.clear()
  navigate('/login')
}

  return (
    <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'   style={{marginBottom: 0,padding:0} }>
      <Container>
        <Navbar.Brand ><Link  style={{textDecoration: 'none',color:'lightblue'}} to='/'><MDBIcon fas icon="home" />
         NutritionApp
        </Link></Navbar.Brand>
        <Navbar.Toggle style={{background:'grey'}} aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard" ><h4>Dashboard</h4> </Nav.Link>
            <Nav.Link as={Link} to="/services" ><h4>Services</h4></Nav.Link>
            {
              sessionStorage.getItem("loggedin") ? (<Nav.Link as={Link} to="/favorite"><h4>Favorite  <MDBIcon fas icon="heart" /></h4></Nav.Link>) : null
            }
            
          </Nav>
          {
            !sessionStorage.getItem("loggedin") ? (
            <Nav>

              <Nav.Link as={Link} to="/register"><h4>Register</h4></Nav.Link>
              <Nav.Link as={Link} to="/login"><h4>Login</h4></Nav.Link>
            </Nav>) :
            
            <Nav.Link>  
            <ButtonGroup>
              <DropdownButton title={sessionStorage.getItem("email")}  id="bg-nested-dropdown">
                <Dropdown.Item eventKey="1" onClick={handlelogout} style={{textDecoration: 'none',borderRadius:'50px',width:'10px'}}><Link  to="/login">Logout</Link></Dropdown.Item>
             </DropdownButton>
             </ButtonGroup>   
              </Nav.Link>
              }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
