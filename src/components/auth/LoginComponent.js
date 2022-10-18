import React from 'react'; 
import FormGroup from "./FormGroup";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonSubmit from "./ButtonSubmit";
import { Link } from 'react-router-dom';


function LoginComponent({validated, handleSubmit, handleChange, email, password}) {
  return(
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="m-4">
      <Row className="mb-3">
        <FormGroup 
          controlId="validationCustom07"
          md="4"
          textlabel="Email"
          type="email"
          placeholder="example@example.com"
          textinvalid="This email doesn't existe. Please, try it again"
          onChange={handleChange}
          name='email'
          value={email}
          />
        </Row>
        <Row className="mb-3">
          <FormGroup 
            controlId="validationCustom08"
            md="4"
            textlabel="Password"
            type="password"
            placeholder="password"
            textinvalid="The password is incorrect. Please, try it again"
            onChange={handleChange}
            name='password'
            value={password}
          />
        </Row>
      <ButtonSubmit type="submit" textbutton="Log in" />
      <p className="mt-3 fs-6"><small>Forgot your password? <Link to="/reset">Reset it here</Link></small></p>
      <p className="mt-3 fs-6"><small>Do not have an account yet? <Link to="/signup">Sign up</Link></small></p>
    </Form>
  )
}

export default LoginComponent; 