import React, { useState } from 'react';
import Comp from '../Components/Comp';
import './App.css'
function Form() {
  const [inputs, setInputs] = useState([{ value: '' }]);

  const handleAddInput = () => {
    setInputs([...inputs, { value: '' }]);
  };

  const handleInputChange = (e, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
  };
  return (
    <div className='container'>
      <div className='left' >

        {inputs.map((input, index) => (
          <div>
          <Comp input={input} index={index} handleInputChange={handleInputChange}/>
          </div>   
        ))}
      <button onClick={handleAddInput}>Add Input</button>
     </div>
    

     
    </div>
  );
}

export default Form;