     

import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTable, MDBTableHead, MDBTableBody,
} from 'mdb-react-ui-kit';

export default function NestedDataHome(props) {
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);

  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);




  return (
    <>
      <MDBBtn onClick={toggleShow}   className='mx-1'  >{props.indexId}</MDBBtn>
      <MDBModal tabIndex='-1' show={fullscreenXlModal} setShow={setFullscreenXlModal}>
        <MDBModalDialog size='fullscreen-xl-down'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle >Nutrition Details </MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

            <MDBTable hover>
             
                  <MDBTableBody >

                    <tr className='col'>
                    <th>FdcId</th> 
                    <th>{props.fdcId}</th>
                    </tr>

                    <tr className='col'>
                    <th>Description</th> 
                    <th>{props.description}</th>
                    </tr>

                    <tr className='col'>
                    <th>DataType</th> 
                    <th>{props.dataType}</th>
                    </tr>

                    <tr className='col'>
                    <th>GtinUpc</th> 
                    <th>{props.gtinUpc}</th>
                    </tr>

                    <tr className='col'>
                    <th>Published Date</th> 
                    <th>{props.publishedDate}</th>
                    </tr>

                    <tr className='col'>
                    <th>Brand Owner</th> 
                    <th>{props.brandOwner}</th>
                    </tr>

                    <tr className='col'>
                    <th>Food Category</th> 
                    <th>{props.foodCategory}</th>
                    </tr>

                    <tr className='col'>
                    <th>Score</th> 
                    <th>{props.score}</th>
                    </tr>

                    <tr className='col'>
                    <th>Serving Size Unit</th> 
                    <th>{props.servingSizeUnit}</th>
                    </tr>

                    <tr className='col'>
                    <th>HouseHold Serving</th> 
                    <th>{props.householdServingFullText}</th>
                    </tr>

                    
                  </MDBTableBody>
               
            </MDBTable>







            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn type='button' color='danger' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}