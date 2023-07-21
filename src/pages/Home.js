// import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Hometable from '../components/Hometable'
import Emsspinner from '../components/Emsspinner'

function Home() {

  const navigate = useNavigate()
  const [showSpin,setShowspin]= useState(true)
  const adduser = () => {
    navigate("/register")
  }

useEffect(()=>{
  setTimeout(()=>{
    setShowspin(false)
  },2000);
})


  return (
    <div className='container ' style={{margin:"100px auto"}} >
      <div className="main-div">
        <div className="search-add d-flex justify-content-between">
          <div className="search col-md-4">
            <Form className='d-flex'>
              <Form.Control type="text" placeholder="Search" />
              <button className='btn btn-success'>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </Form>
          </div>
          <div className="add-btn">
            <Button className='btn btn-info' onClick={adduser}>
              <i class="fa-solid fa-user-plus"></i>  Add
            </Button>
          </div>

        </div>
        <div className="table-div">
          {showSpin?
            <Emsspinner/>:
          <Hometable />
          }
        </div>
      </div>
    </div>
  )
}

export default Home