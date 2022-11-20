import React, { useState } from 'react'
import { Row, Col, Form, Image, Button, FormGroup } from 'react-bootstrap'
// img
import imgsuccess from '../../assets/images/pages/img-success.png'
import Link from 'next/link'
import Card from '../../components/Card'
import AdminLayout from '../../components/Layouts/AdminLayout'

const Registerland = () => {
    const [show, AccountShow] = useState('A');
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
                            <Form>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Form.Label>Land Title</Form.Label>
                                                <Form.Control size='sm' width="10px" readOnly type="text" placeholder="title" />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Form.Label htmlFor='landSize'>Land Size</Form.Label>
                                                <select className="form-select" id="landSize">
                                                    <option>Select your size</option>
                                                    <option>100 x 100ft</option>
                                                    <option>100 x 70ft</option>
                                                    <option>74 ft x 38 ft</option>
                                                    <option>1 acre</option>
                                                    <option>2 acres</option>
                                                    <option>3 acres</option>
                                                </select>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="exampleFormControlSelect1">Select Location</Form.Label>
                                        <select className="form-select" id="exampleFormControlSelect1">
                                            <option>Select your age</option>
                                            <option>Accra</option>
                                            <option>Adenta</option>
                                            <option>Kasoa</option>
                                            <option>Madina</option>
                                            <option>East Legon</option>
                                        </select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="choices-single-default">Select Input New</Form.Label>
                                        <select className="form-select" data-trigger name="choices-single-default" id="choices-single-default">
                                            <option defaultValue>This is a placeholder</option>
                                            <option value="Choice 1">Choice 1</option>
                                            <option value="Choice 2">Choice 2</option>
                                            <option value="Choice 3">Choice 3</option>
                                        </select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="exampleFormControlSelect2">Example multiple select</Form.Label>
                                        <select multiple="" className="form-select" id="exampleFormControlSelect2">
                                            <option>select-1</option>
                                            <option>select-2</option>
                                            <option>select-3</option>
                                            <option>select-4</option>
                                            <option>select-5</option>
                                            <option>select-6</option>
                                            <option>select-7</option>
                                            <option>select-8</option>
                                        </select>
                                    </Form.Group>
                                    <Form.Group className="form-group">

                                        <Form.Group className="form-group">
                                            <Form.Check className="d-block">
                                                <Form.Check.Input className="me-2" type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked />
                                                <Form.Check.Label htmlFor="flexCheckChecked">
                                                    Checked checkbox
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>

                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Group>
                                            <Form.Label className="custom-file-input">Choose file</Form.Label>
                                            <Form.Control type="file" id="customFile1" />
                                        </Form.Group>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label className="custom-file-input">Example file input</Form.Label>
                                        <Form.Control type="file" id="customFile" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 form-group">
                                        <Form.Label className="custom-file-input">Choose file</Form.Label>
                                        <Form.Control type="file" id="customFile" />
                                    </Form.Group>
                                    <Button type="button" variant="btn btn-primary">Submit</Button>{' '}
                                    <Button type="button" variant="btn btn-danger">cancel</Button>
                                </Card.Body>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </AdminLayout>
    )
}

export default Registerland