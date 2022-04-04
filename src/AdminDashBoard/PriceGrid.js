import React from "react";
import Container from 'react-bootstrap/Container'
import { InputGroup, Dropdown, SplitButton, FormControl, DropdownButton, Form, Button, Row, Col } from 'react-bootstrap';
import './Admin.css';

function PriceGrid() {
    return (
        <div>
            <h2 className="heading-price-grid">Price Grid</h2>
            <Container>
                <Row>
                    <Col lg={4}>
                        <label>Select a Brand</label>
                        <div>
                            <Form.Select aria-label="select example" >
                                <option>Select</option>
                                <option value="1">AcromaPro</option>
                                <option value="2">AcromaPro++</option>
                                <option value="3">AcromaPro+</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <label>Select Quality</label>
                        <div className="Price-grid-Inputs">
                            <Form.Select aria-label="Default select example" >
                                <option>Select</option>
                                <option value="1">AcromaPro</option>
                                <option value="2">AcromaPro++</option>
                                <option value="3">AcromaPro+</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col lg={3} > 
                    <button className="Grid-Button">Search</button>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default PriceGrid;