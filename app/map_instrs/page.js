"use client"
import React, { useEffect, useState } from 'react';
import './page.module.css';
import axios from "axios";


const Dropdown = () => {
 
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);


  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked && !selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
    } else if (!checked && selectedOptions.includes(value)) {
      const updatedOptions = selectedOptions.filter((option) => option !== value);
      setSelectedOptions(updatedOptions);
    }
  };

  const url = process.env.NEXT_PUBLIC_SERVER_URL

  useEffect(() => {
    axios.get(`${url}/subjects`).then((res) => {
        setOptions(res.data);
      console.log(" subjects data ", res.data);
    });
  }, []);


  return (
   
        <div className="dropdown">
      <button className="dropdown-btn">
        {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select Options'}
      </button>
     
   
    <div className="dropdown-content">
    {options.map((item)=>{
        return(


            <label>
                <input
                type="checkbox"
                name= {item.sub_name}
                value={item.sub_name}
                onChange={handleCheckboxChange}
                />{' '}
                {item.sub_name}
            </label>  
        )  
    })}
   
  </div>
  </div>
  );
};

export default Dropdown;
