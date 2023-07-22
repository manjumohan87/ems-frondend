import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'
import Select from 'react-select';
import Emsspinner from '../components/Emsspinner'

function Edit() {

  const [showSpin,setShowspin]= useState(true)

  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' },
  ];


  useEffect(()=>{
    setTimeout(()=>{
      setShowspin(false)
    },2000);
  })
  


  return (
    <>
    {showSpin? <Emsspinner className="mb-5" />:
      <div className="d-flex justify-content-center mb-5">
      <div className="container mt-5">
        <h2 className="text-center mt-3">Update Employee Details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className=" mb-3">
            <div className="image-block text-center">
            <img className=" rounded-circle border p-1" style={{ width: "50px", height: "50px", borderRadius: "100%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5iROb1TgJ_rcl-6r-68v1yjtID052zxSkw&usqp=CAU" alt="image" />
            </div>
            

            <Form>
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
                  <Form.Label className='text-left'>First Name</Form.Label>
                  <Form.Control type="text" name="fname" placeholder="First Name" />                  
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasiclname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lname" placeholder="Last Name" />                  
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicemail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Email Address" />                  
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" name="mobile" placeholder="Mobile Number" />                  
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
                  <Form.Label>Select Gender</Form.Label>
                  <Form.Check type="radio" label={'Male'} name="gender" value={'Male'} aria-label="radio 1" />
                  <Form.Check type="radio" label={'Female'} name="gender" value={'Female'} aria-label="radio 2" />

                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicstaus">
                  <Form.Label>Select Employee status </Form.Label>
                <Select options={options}>

                </Select>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicprofile">
                  <Form.Label>Choose Profile Picture</Form.Label>
                  <Form.Control type="file" name="user_profile" />                  
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasiclocation">
                  <Form.Label>Employee Location</Form.Label>
                  <Form.Control type="text" name="location" placeholder="Employee Location" />                  
                </Form.Group>
                <div className='d-flex justify-content-cener w-100'>
                  <Button variant='primary' className='mt-3 w-25 ' style={{display:"block",margin:"0 auto"}}>Submit</Button>
                </div>
              </Row>
            </Form>
          </div>
        </Card>
      </div>
    </div>
    }
  </>
  )
}

export default Edit