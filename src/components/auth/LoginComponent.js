import React from 'react'; 
import FormGroup from "./FormGroup";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonSubmit from "./ButtonSubmit";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'


function LoginComponent({validated, handleSubmit, handleChangeEmail, handleChangePassword, email, password}) {
  return(
    <section className='sectionLoginSignup mb-5'>
        <Card className='loginSignupCard  mx-5 mt-4'>
          <Form noValidate validated={validated} onSubmit={handleSubmit} className="m-4">
            <h1 className='text-center mb-4'>Log in</h1>
            <Row className="mb-3">
              <FormGroup 
                controlId="validationCustom07"
                md="12"
                textlabel="Email"
                type="email"
                placeholder="example@example.com"
                textinvalid="This email doesn't existe. Please, try it again"
                onChange={handleChangeEmail}
                name='email'
                value={email}
                className="my-2 text-start"
              />
              <FormGroup 
                controlId="validationCustom08"
                md="12"
                textlabel="Password"
                type="password"
                placeholder="password"
                textinvalid="The password is incorrect. Please, try it again"
                onChange={handleChangePassword}
                name='password'
                value={password}
                className="my-2 text-start"
              />
            </Row>
            <div className='text-center'>
              <ButtonSubmit type="submit" textbutton="Log in" />
            </div>
            <p className="text-center mt-3 fs-6"><small>Forgot your password? <Link to="/reset">Reset it here</Link></small></p>
            <p className="text-center mt-3 fs-6"><small>Don't have an account yet? <Link to="/signup">Sign up</Link></small></p>
          </Form>
        </Card>
    </section>
  )
}

export default LoginComponent; 