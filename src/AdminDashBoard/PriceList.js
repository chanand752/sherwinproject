import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
import './Admin.css';
import { InputGroup, Dropdown, SplitButton, FormControl, DropdownButton, Form, Button } from 'react-bootstrap'

function PriceList() {
    const [currency, setCurrency] = React.useState('');
    function handleChange(event) {
        setCurrency(event.target.value);
    };

    return (
        <div className='Price-component-body'>
            <h2>Price List</h2>
            <label>Please Select a Brand to start</label>
            <div>
                <Form.Select aria-label="Default select example"  className='w-25 mb-2 mt-2'>
                    <option>Select</option>
                    <option value="1">AcromaPro</option>
                    <option value="2">AcromaPro++</option>
                    <option value="3">AcromaPro+</option>
                </Form.Select>
            </div>

            <label>Add New Ingredient Price</label>
            <div className='mt-2 input'>
                <InputGroup size="sm" className="input-width">
                    <FormControl aria-label="Small" placeholder='Sales Number' aria-describedby="inputGroup-sizing-sm" className='form-width' />
                    </InputGroup>
                    <InputGroup size="sm" className="input-width">
                    <FormControl aria-label="Small" placeholder='List Price' aria-describedby="inputGroup-sizing-sm" className='form-width-1' />
                    </InputGroup>
                    <InputGroup size="sm" className="input-width">
                    <FormControl aria-label="Small" placeholder='List Price' aria-describedby="inputGroup-sizing-sm" className='form-width-1' />
                    </InputGroup>
                    <InputGroup size="sm" className="input-width">
                    <FormControl aria-label="Small" placeholder='Jobber Price' aria-describedby="inputGroup-sizing-sm" className='form-width-1'/>
                    </InputGroup>
                    <InputGroup size="sm" className="input-width">
                    <FormControl aria-label="Small" placeholder='Container Size' aria-describedby="inputGroup-sizing-sm" className='form-width-1'/>
                    </InputGroup>
                   <Button variant="primary" className=' m-3'>Add Price</Button>
            </div>

        </div>
    );
}

export default PriceList;