import React from 'react'; 
import FormGroup from "./FormGroup";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ButtonSubmit from "./ButtonSubmit";
import Card from 'react-bootstrap/Card';

function ResetComponent({validated, handleSubmit, handleChangeEmail, email}) {
  return(
    <section className='sectionLoginSignup'>
        <Card className='loginSignupCard  mx-5'>
          <Form noValidate validated={validated} onSubmit={handleSubmit} className="m-4">
            <h1 className='text-center mb-4'>Reset Password</h1>
            <Row className="mb-3">
              <FormGroup 
                controlId="validationCustom10"
                md="12"
                textlabel="Write your email"
                type="email"
                placeholder="email"
                textinvalid="The email is incorrect. Please, try it again"
                onChange={handleChangeEmail}
                name='email'
                value={email}
                className="my-2 text-start"
              />
            </Row>
            <div className='text-center'>
              <ButtonSubmit type="submit" textbutton="Reset password" />
            </div>
          </Form>
        </Card>  
    </section>
  )
}

export default ResetComponent; 
