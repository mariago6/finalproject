import React from 'react'; 
import Form from 'react-bootstrap/Form';

function SelectFilter({onChange}) {
  return(
    <Form.Select aria-label="Default select example" onChange={onChange}>
      <option>Choose a ingredient</option>
      <option value="avocado">Avocado</option>
      <option value="bacon">Bacon</option>
      <option value="beef">Beef</option>
      <option value="cheese">Cheese</option>
      <option value="brocoli">Brocoli</option>
      <option value="carrots">Carrots</option>
      <option value="chicken">Chicken</option>
      <option value="chocolate">Chocolate</option>
      <option value="cucumber">Cucumber</option>
      <option value="egg">Egg</option>
      <option value="garlic">Garlic</option>
      <option value="milk">Milk</option>
      <option value="onion">Onion</option>
      <option value="potato">Potato</option>
      <option value="rice">Rice</option>
      <option value="pasta">Pasta</option>
      <option value="salmon">Salmon</option>
      <option value="tomato">Tomato</option>
      <option value="tuna">Tuna</option>
    </Form.Select>
  )
}

export default SelectFilter; 