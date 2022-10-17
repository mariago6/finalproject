import React from 'react'; 
import FormGroup from "./FormGroup";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonSubmit from "./ButtonSubmit";

function LoginComponent({validated, handleSubmit}) {
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
          />
        </Row>
      <ButtonSubmit type="submit" textbutton="Log in" />
    </Form>
  )
}

export default LoginComponent; 