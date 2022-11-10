import React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function CheckboxFilter({id, label, onChange}) {
  return(
    <Card.Text className="col-3">
      <Form.Check 
        type='checkbox'
        id={id}
        label={label}
        onChange={onChange}
      />
    </Card.Text>

  )
}

export default CheckboxFilter; 