import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../../custom.scss';

function FormGroup({controlId, md, textlabel, type, placeholder, textinvalid }) {
  return(
    <Form.Group as={Col} md={md} controlId={controlId}>
      <Form.Label>{textlabel}</Form.Label>
      <Form.Control
        required
        type={type}
        placeholder={placeholder}
      />
      <Form.Control.Feedback type="invalid">
          {textinvalid}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default FormGroup; 