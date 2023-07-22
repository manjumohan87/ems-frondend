import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Emsspinner from '../components/Emsspinner'

function View() {
  const [showSpin,setShowspin]= useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setShowspin(false)
    },2000);
  })
  



  return (
    <>

    { showSpin?<Emsspinner className="mb-5" />:

     <div className="container">
        <Card className='shadow col-lg-6 mx-auto mt-5 border'></Card>
        <Card.Body>
          
            <div className="profile d-flex-justify-content-center">
              <div className="image-block text-center">
                <img className=" rounded-circle border p-1" style={{ width: "200px", height: "200px", borderRadius: "100%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5iROb1TgJ_rcl-6r-68v1yjtID052zxSkw&usqp=CAU" alt="image" />
              </div>
            </div>
            <div className="text-center mt-3">
              <h3>Max Miller</h3>
              <h5><i class="fa-solid fa-envelope fa-beat" style={{color:"#ff0000"}}></i> : <span>maxmiller@gmail.com</span></h5>
              <h5><i class="fa-solid fa-mobile-screen-button" style={{color:"#ff0000"}}></i> : <span>9387376032</span></h5>

              <h5><i class="fa-solid fa-venus-mars" style={{color:"#ff8000"}}></i> : <span>Male</span></h5>

              <h5><i class="fa-solid fa-signal-bars" style={{color:"#00ff00"}}></i> : <span>Active</span></h5>

              <h5><i class="fa-solid fa-location-dot" style={{color:"#00ff00"}}></i> : <span>Manhanten</span></h5>

            </div>
          
        </Card.Body>
      </div>
      }
    </>
  )
}

export default View