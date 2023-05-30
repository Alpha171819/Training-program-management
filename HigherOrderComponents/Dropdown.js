import React, { useEffect, useState } from 'react';
import './page.module.css';
import axios from "axios";


const Dropdown = () => {
 
  const [options, setOptions] = useState([]);



  useEffect(() => {
    axios.get(`${url}/subjects`).then((res) => {
        setOptions(res.data);
      console.log(" subjects data ", res.data);
    });
  }, []);

  const url = process.env.NEXT_PUBLIC_SERVER_URL

  

  return (
   
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

  );
};

export default Dropdown;
