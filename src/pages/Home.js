// import { Button } from 'bootstrap'
import React, { useEffect, useState, useContext } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Hometable from '../components/Hometable'
import Emsspinner from '../components/Emsspinner'
import { registerContext } from '../components/ContextShare';
import { getallemployees } from '../services/allApis'


function Home() {

  const { registerData, setRegisterData } = useContext(registerContext)

  const navigate = useNavigate()
  const [showSpin, setShowspin] = useState(true)
  const adduser = () => {
    navigate("/register")
  }

  useEffect(() => {
    getallusers()
    setTimeout(() => {
      setShowspin(false)
    }, 2000);
  }, [])

  const [users, setusers] = useState([])
  const getallusers = async () => {
    const result = await getallemployees()
    setusers(result.data)
  }
  // console.log(users);


  return (


    <>
      {
        registerData ? <Alert variant="success" onClose={() => setRegisterData("")} dismissible>
          {registerData.fname.toUpperCase()} successfully Registered !!!!
        </Alert> : ""
      }
      <div className='container ' style={{ margin: "100px auto" }} >
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
            {showSpin ?
              <Emsspinner /> :
              <Hometable displaydata={users} />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home