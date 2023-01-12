import React, { useState } from 'react';
import './../Pages/App.css'
const Comp = ( {input , index , handleInputChange}) => {
    const [inputsRight, setInputsRight] = useState([{ value: '' }]);

    const handleAddInputRight = () => {
      setInputsRight([...inputsRight, { value: '' }]);
    };

    const handleInputChangeRight = (e, index) => {
        const newInputs = [...inputsRight];
        newInputs[index].value = e.target.value;
        setInputsRight(newInputs);
      };
  return (
    <div className='any'>
         <input
            className='input3'
            placeholder='default variable'
            value={input.value}
              onChange={(e) => handleInputChange(e , index)}
            />
  {inputsRight.map((input, index) => (
          <div>
       <input
            placeholder='default environment'
            value={input.value}
              onChange={(e) => handleInputChangeRight(e , index)}
            />
          </div>   
        ))}
             <button className='btn' onClick={handleAddInputRight} >Add Environment</button>
    </div>
  )
}

export default Comp