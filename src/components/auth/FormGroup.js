import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../../custom.scss';

function FormGroup({controlId, md, textlabel, type, placeholder, textinvalid, name, onChange, className }) {
  return(
    <Form.Group as={Col} md={md} controlId={controlId} className={className}> 
      <Form.Label>{textlabel}</Form.Label>
      <Form.Control
        required
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      <Form.Control.Feedback type="invalid">
          {textinvalid}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormGroup; 