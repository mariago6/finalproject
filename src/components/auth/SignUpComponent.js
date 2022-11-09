import React from 'react'; 
import FormGroup from "./FormGroup";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonSubmit from './ButtonSubmit';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"; 

function SignUpComponent({validated, handleSubmit, handleChangeEmail, handleChangePassword, handleChangeCPassword, 
  email, password, cpassword, onChangeCheckBox, handleChangeUsername, username}) {
  return(
    <section className='sectionLoginSignup'>
      <Card className='loginSignupCard mx-5 mb-5'> 
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="m-4">
        <h1 className='text-center mb-4'>Sign up</h1>
          <Row className="mb-3">
          <FormGroup 
              controlId="validationCustom07"
              md="12"
              textlabel="Username"
              type="text"
              placeholder="username"
              textinvalid= "Please write a correct username."
              onChange={handleChangeUsername}
              name='username'
              value={username}
              className="my-2 text-start"
            />
            <FormGroup 
              controlId="validationCustom04"
              md="12"
              textlabel="Email"
              type="email"
              placeholder="example@example.com"
              textinvalid="Please write a correct email."
              onChange={handleChangeEmail}
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
              textinvalid= "Please write a correct password."
              onChange={handleChangePassword}
              name='password'
              value={password}
              className="my-2 text-start"
            />
            <FormGroup 
              controlId="validationCustom06"
              md="12"
              textlabel="Confirm Password"
              type="password"
              placeholder="confirm password"
              textinvalid= "Please write a correct password."
              onChange={handleChangeCPassword}
              name='password'
              value={cpassword}
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
                onChange={onChangeCheckBox}
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



