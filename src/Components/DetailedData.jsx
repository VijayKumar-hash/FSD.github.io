     

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

export default function DetailedData(props) {
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);

  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
  const data = props.nestedData;



  return (
    <>
      <p onClick={toggleShow}   className='mx-2' >{props.IdName}</p>
      <MDBModal tabIndex='-1' show={fullscreenXlModal} setShow={setFullscreenXlModal}>
        <MDBModalDialog size='fullscreen-xl-down'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Different Types of Nutrition Found for  - {props.IdName}</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

            <MDBTable hover>
              <MDBTableHead dark>
                <tr>
                  <th scope='col' > No </th>
                  <th scope='col'> NutrientId </th>
                  <th scope='col'> NutrientName </th>
                  <th scope='col'> Unit Name </th>
                  <th scope='col'> NutrientNumber </th>
                  
                  
                </tr>
              </MDBTableHead>
              {(
                data.map((item, index) => (
                  <MDBTableBody key={index}>
                    <tr >
                      <th  className='table-primary'>{index + 1}</th>
                      <td style={{backgroundColor: '#C47AFF'}}>{item.nutrientId} </td>
                      <td className='table-info'>{item.nutrientName}</td>
                      <td className='table-light'>{item.unitName}</td>
                      <td className='table-info'>{item.nutrientNumber}</td>
                    </tr>
                  </MDBTableBody>
                ))
              )}
            </MDBTable>







            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn type='button' color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}