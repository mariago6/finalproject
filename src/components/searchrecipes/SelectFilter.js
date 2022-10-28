import React from 'react'; 
import Form from 'react-bootstrap/Form';

function SelectFilter() {
  return(
    <Form.Select aria-label="Default select example" className='mb-4'>
      <option>Choose a ingredient</option>
      <option value="1">Avocado</option>
      <option value="2">Bacon</option>
      <option value="3">Beef</option>
      <option value="4">Cheese</option>
      <option value="5">Brocoli</option>
      <option value="6">Carrots</option>
      <option value="7">Chicken</option>
      <option value="8">Chocolate</option>
      <option value="9">Cucumber</option>
      <option value="10">Egg</option>
      <option value="11">Garlic</option>
      <option value="12">Milk</option>
      <option value="13">Onion</option>
      <option value="14">Potato</option>
      <option value="15">Rice</option>
      <option value="16">Pasta</option>
      <option value="17">Salmon</option>
      <option value="18">Tomato</option>
      <option value="19">Tuna</option>
    </Form.Select>
  )
}

export default SelectFilter; 