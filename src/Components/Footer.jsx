import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white" style={{marginTop:'40px',borderRadius:'45px',marginRight:'8px',marginLeft:'8px'}}>
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <Link to='/'>
          <MDBBtn
            className="m-1"
            style={{ backgroundColor: "#3b5998",borderRadius:'40px'}}
            href="#!"
            role="button"
          >
            <MDBIcon fas icon="building" />
          </MDBBtn>
          </Link>

          <Link to='/'>
          <MDBBtn
            className="m-1"
            style={{ backgroundColor: "#55acee",borderRadius:'40px' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="docker" />
          </MDBBtn>
          </Link>

          <Link to='/'>
          <MDBBtn
            className="m-1"
            style={{ backgroundColor: "#dd4b39",borderRadius:'40px' }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          </Link>

          

          <Link to='/'>
          <MDBBtn
            className="m-1"
            style={{ backgroundColor: "#ac2bac" ,borderRadius:'40px'}}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
          </Link>   

          <Link to='/'>
          <MDBBtn
            className="m-1"
            style={{ backgroundColor: "#333333" ,borderRadius:'40px'}}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
          </Link>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: 'black',borderRadius:'45px',marginLeft:'8px',marginRight:'8px' }}
      >
        © 2022 Copyright:
        <a className="text-white" style={{marginLeft:'5px'}}>
          Vijay Kumar Das
        </a>
      </div>
    </MDBFooter>
  );
}
