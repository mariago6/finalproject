import React from 'react'; 
import FormGroup from "./FormGroup";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonSubmit from './ButtonSubmit';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"; 

function SignUpComponent({validated, handleSubmit, handleChange, firstName, surname1, surname2, email, password, confirmPassword}) {
  return(
    <section>
      <Card className='d-flex align-items-center mx-5 mt-4'> 
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="m-4">
        <h1 className='text-center mb-4'>Sign up</h1>
          <Row className="mb-3">
            <FormGroup 
              controlId="validationCustom01"
              md="12"
              textlabel="First name"
              type="text"
              placeholder="ex. Laura"
              textinvalid="Please write a correct first name."
              onChange={handleChange}
              name='firstName'
              value={firstName}
              className="my-2 text-start"
            />
             <FormGroup 
              controlId="validationCustom02"
              md="12"
              textlabel="Surname 1"
              type="text"
              placeholder="ex. Perez"
              textinvalid="Please write a correct surname."
              onChange={handleChange}
              name='surname1'
              value={surname1}
              className="my-2 text-start"
            />
            <FormGroup 
              controlId="validationCustom03"
              md="12"
              textlabel="Surname 2"
              type="text"
              placeholder="ex. Garcia"
              textinvalid="Please write a correct surname."
              onChange={handleChange}
              name='surname2'
              value={surname2}
              className="my-2 text-start"
            />
          </Row>
          <Row className="mb-3">
            <FormGroup 
              controlId="validationCustom04"
              md="12"
              textlabel="Email"
              type="email"
              placeholder="example@example.com"
              textinvalid="Please write a correct email."
              onChange={handleChange}
              name='email'
              value={email}
              className="my-2 text-start"
              />
            <FormGroup 
              controlId="validationCustom05"
              md="12"
              textlabel="Password"
              type="password"
              placeholder="password"
              textinvalid="Please write a correct password."
              onChange={handleChange}
              name='password'
              value={password}
              className="my-2 text-start"
            />
            <FormGroup 
              controlId="validationCustom06"
              md="12"
              textlabel="Confirm Password"
              type="password"
              placeholder="repeat password"
              textinvalid="Please write a correct password."
              onChange={handleChange}
              name='confirmPassword'
              value={confirmPassword}
              className="my-2 text-start"
            />
          </Row>
          <Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                className="my-2 text-start"
              />
            </Form.Group>
          </Row>
          <div className='text-center'>
            <ButtonSubmit type="submit" textbutton="Sign up" />
          </div>
          <p className="text-center mt-3 fs-6"><small>Already have an account? <Link to="/login">Log in</Link></small></p>
        </Form>
      </Card>
    </section>
  )
}

export default SignUpComponent; 



