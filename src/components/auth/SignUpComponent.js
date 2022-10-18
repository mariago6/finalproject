import React from 'react'; 
import FormGroup from "./FormGroup";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonSubmit from './ButtonSubmit'
import { Link } from "react-router-dom"; 

function SignUpComponent({validated, handleSubmit}) {
  return(
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="m-4">
      <Row className="mb-3">
        <FormGroup 
          controlId="validationCustom01"
          md="4"
          textlabel="First name"
          type="text"
          placeholder="ex. Laura"
          textinvalid="Please write a correct first name."
        />
        <FormGroup 
          controlId="validationCustom02"
          md="4"
          textlabel="Surname 1"
          type="text"
          placeholder="ex. Perez"
          textinvalid="Please write a correct surname."
        />
        <FormGroup 
          controlId="validationCustom03"
          md="4"
          textlabel="Surname 2"
          type="text"
          placeholder="ex. Garcia"
          textinvalid="Please write a correct surname."
        />
      </Row>
      <Row className="mb-3">
        <FormGroup 
          controlId="validationCustom04"
          md="4"
          textlabel="Email"
          type="email"
          placeholder="example@example.com"
          textinvalid="Please write a correct email."
          />
        <FormGroup 
          controlId="validationCustom05"
          md="4"
          textlabel="Password"
          type="password"
          placeholder="password"
          textinvalid="Please write a correct password."
        />
        <FormGroup 
          controlId="validationCustom06"
          md="4"
          textlabel="Confirm Password"
          type="password"
          placeholder="repeat password"
          textinvalid="Please write a correct password."
        />
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <ButtonSubmit type="submit" textbutton="Sign up" />
      <p className="mt-3 fs-6"><small>Already have an account? <Link to="/login">Log in</Link></small></p>
    </Form>
  )
}

export default SignUpComponent; 



