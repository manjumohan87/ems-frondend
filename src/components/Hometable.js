import React from 'react'
import { Card, Row, Table ,Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Hometable() {
    return (
        <div className='container mt-5'>
            <h1>All Employee List</h1>
            <Row>
                <div className="col">
                    <Card className='shadow'>
                        <Table striped hover style={{margin:"0"}}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Employee Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Status</th>
                                    <th>Profile</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark William</td>
                                    <td>mark@gmail.com</td>
                                    <td>9387376032</td>
                                    <td>
                                        <span className='btn btn-success'>Active</span>
                                    </td>
                                    <td>
                                        <img style={{width:"50px",height:"50px",borderRadius:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5iROb1TgJ_rcl-6r-68v1yjtID052zxSkw&usqp=CAU" alt="image" />
                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle style={{margin:"0",border:"none"}} variant="light" id="dropdown-basic">
                                                
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item><Link to={"/view/1"} style={{textDecoration:'none',color:"white"}}><i class="fa-solid fa-eye me-1" style={{color:"#ff8000"}}></i>View </Link></Dropdown.Item>
                                                <Dropdown.Item><Link to={"/edit/1"} style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-pen-to-square me-1" style={{color:"#00ff00"}}></i> Edit</Link></Dropdown.Item>
                                                <Dropdown.Item><i class="fa-solid fa-trash me-1" style={{color:"#ff0000"}}></i> Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </Card>
                </div>
            </Row>
        </div>
    )
}

export default Hometable