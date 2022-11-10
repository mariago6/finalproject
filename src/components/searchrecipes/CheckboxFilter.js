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

      {/* <input 
        type='checkbox'
        id='vegan'
        checked={isVegan}
        onChange={(e) => setIsVegan(e.target.checked)}
        name='vegan'
      />
      <label htmlFor="vegan" className="mx-2"> Vegan</label> */}
    </Card.Text>

  )
}

export default CheckboxFilter; 