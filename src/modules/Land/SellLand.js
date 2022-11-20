import React, { useState } from 'react'
import { Row, Col, Form, Image, Button } from 'react-bootstrap'
// img
import imgsuccess from '../../assets/images/pages/img-success.png'
import Link from 'next/link'
import Card from '../../components/Card'
import AdminLayout from '../../components/Layouts/AdminLayout'
import { useForm } from 'react-hook-form'
import { postAxios, postAxiosInvoice } from '../../hooks/axiosRequest'

const SellLand = () => {
    const [show, AccountShow] = useState('A');
    const {register,handleSubmit} = useForm();
    const[isLoaded,setIsLoaded] = useState(false);
    const[data,setData] = useState([]);

    // const params = JSON.stringify({
    //     "description": "a test invoice",
    //       "line_items": [
    //           {"name": "item 1", "amount": 20000},
    //           {"name": "item 2", "amount": 20000}
    //       ],
    //       "tax": [
    //           {"name": "VAT", "amount": 2000}
    //       ],
    //       "customer": "CUS_xwaj0txjryg393b",
    //       "due_date": "2020-07-08"
    //   })

    // onClick={() => AccountShow('Image')}

    const handleSellLand = async(data) => {
        console.log(data);
        setIsLoaded(true);
        const saveland = {
            "Landid": data.landId,
            Location: data.location,
            LandSize: data.landSize,
            LandPrice: data.landPrice,
            LandDescription: data.landDescription,
            OwnerId: data.ownerId,           
        }
        const saveTenant = {
            first_name: data.firstName,
            last_name: data.lastName,
            email : data.email,
            phone : data.phoneNumber,
        }
      
       await postAxiosInvoice(saveTenant,"customer").then(async res => {
        const land = {
            description: `Payment for a land at ${data.location} which measures ${data.landSize}`,
            line_items: [
                {name: "Land Payment", amount: data.price},
                // {name: data.name, amount: data.amount}
            ],
            tax: [
                {name: "VAT", amount: 200}
            ],
            customer: res.data.customer_code,
            due_date: "2022-12-08"
        }
           return await postAxiosInvoice(land,"paymentrequest").then(res => {
                console.log("Payment Request",res.data);
                
            }).catch(err => console.log(err))
       }).then(resp => {
        AccountShow('Image');
       }).catch(err => {
        setIsLoaded(false);
              console.log(err)
              
       })
        // console.log(land)
    }
    return (
        <AdminLayout>
            <div>
                <Row>
                    <Col sm="12" lg="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Land Registration</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <form id="form-wizard1" onSubmit={handleSubmit(handleSellLand)} className="text-center mt-3">
                                    <ul id="top-tab-list" className="p-0 row list-inline">
                                        <li className={` ${show === 'Image' ? ' active done' : ''} ${show === 'Personal' ? ' active done' : ''} ${show === 'Account' ? ' active done' : ''} ${show === 'A' ? 'active' : ''} col-lg-3 col-md-6 text-start mb-2 active`} id="account">
                                            <Link href="#">
                                                <div className="iq-icon me-3">
                                                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <span>Tenant Details</span>
                                            </Link>
                                        </li>
                                        <li id="personal" className={`${show === 'Personal' ? ' active done' : ''} ${show === 'Image' ? ' active done' : ''} ${show === 'Account' ? 'active ' : ''} col-lg-3 col-md-6 mb-2 text-start`}>
                                            <Link href="#">
                                                <div className="iq-icon me-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <span>Land Type</span>
                                            </Link>
                                        </li>
                                        <li id="payment" className={`${show === 'Image' ? ' active done' : ''} ${show === 'Personal' ? 'active' : ''} col-lg-3 col-md-6 mb-2 text-start`}>
                                            <Link href="#">
                                                <div className="iq-icon me-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <span>Land Certificates</span>
                                            </Link>
                                        </li>
                                        <li id="confirm" className={`${show === 'Image' ? ' active ' : ''} col-lg-3 col-md-6 mb-2 text-start`}>
                                            <Link href="#">
                                                <div className="iq-icon me-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span>Finish</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <fieldset className={`${show === 'A' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4">Personal Details: </h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 1 - 4</h2>
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                            <Form.Check className="d-block">
                                                <Form.Check.Input type="radio" defaultValue='cash' name="formHorizontalRadios" id="formHorizontalRadios1" />
                                                <Form.Check.Label className="form-check-label" htmlFor="formHorizontalRadios1">Ready Cash</Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check.Input   className="me-2" type="radio" defaultValue="send" id="flexCheckChecked" defaultChecked />
                                                <Form.Check.Label htmlFor="flexCheckChecked">
                                                    Send Request
                                                </Form.Check.Label>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Email: *</label>
                                                        <input {...register("email")} type="email" className="form-control" name="email" placeholder="Email Id" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">First Name: *</label>
                                                        <input {...register("firstName")}  type="text" className="form-control"  placeholder="First name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Last Name: *</label>
                                                        <input {...register("lastName")}  type="text" className="form-control"  placeholder="last name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Phone Number: *</label>
                                                        <input {...register("phoneNumber")}  type="tel" className="form-control"  placeholder="phone" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next" onClick={() => AccountShow('Account')} >Next</button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Account' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4">Land Type:</h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 2 - 4</h2>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Land ID: *</label>
                                                        <input {...register("landId")} type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <Form.Group className="form-group">
                                                <Form.Label htmlFor='landSize'>Land Size</Form.Label>
                                                <select {...register("landSize")}  className="form-select" id="landSize">
                                                    <option>Select your size</option>
                                                    <option>100 x 100ft</option>
                                                    <option>100 x 70ft</option>
                                                    <option>74 ft x 38 ft</option>
                                                    <option>1 acre</option>
                                                    <option>2 acres</option>
                                                    <option>3 acres</option>
                                                </select>
                                                </Form.Group>
                                                <div className="col-md-6">
                                                    <Form.Label htmlFor="choices-single-default">Select Input New</Form.Label>
                                                    <select {...register("location")}  className="form-select" id="exampleFormControlSelect1">
                                                        <option>Select your age</option>
                                                        <option>Accra</option>
                                                        <option>Adenta</option>
                                                        <option>Kasoa</option>
                                                        <option>Madina</option>
                                                        <option>East Legon</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Price *</label>
                                                        <input {...register("price")}  type="text" className="form-control" placeholder="Price" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next" onClick={() => AccountShow('Personal')} >Next</button>
                                        <button type="button" name="previous" className="btn btn-dark previous action-button-previous float-end me-1" value="Previous" onClick={() => AccountShow('A')} >Previous</button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Personal' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4">Documents Upload:</h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 3 - 4</h2>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Upload Land Title</label>
                                                <input type="file" className="form-control" name="pic" accept="image/*" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Upload Signature Photo:</label>
                                                <input type="file" className="form-control" name="pic-2" accept="image/pdf/doc/word/*" />
                                            </div>
                                        </div>
                                        <Button type="onSubmit"  name="next" className="btn btn-primary next action-button float-end" value="Submit" >Submit</Button>
                                        <button type="button" name="previous" className="btn btn-dark previous action-button-previous float-end me-1" value="Previous" onClick={() => AccountShow('Account')} >Previous</button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Image' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4 text-left">Finish:</h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 4 - 4</h2>
                                                </div>
                                            </div>
                                            <br /><br />
                                            <h2 className="text-success text-center"><strong>SUCCESS !</strong></h2>
                                            <br />
                                            <div className="row justify-content-center">
                                                <div className="col-3"> <Image src={imgsuccess} className="img-fluid" alt="fit-image" /> </div>
                                            </div>
                                            <br /><br />
                                            <div className="row justify-content-center">
                                                <div className="col-7 text-center">
                                                    <h5 className="purple-text text-center">Payment request have been sent</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </AdminLayout>
    )
}

export default SellLand