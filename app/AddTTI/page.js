"use client"
import React, {  useState, useEffect } from "react";
import styles from './AddTTI.module.css';
import axios from 'axios';

const AddTTI = () => {

  const [instname, setinstname] = useState("");
  const [instrank, setinstrank] = useState("");
  const [instcode, setinstcode] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([]);

  


  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked && !selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
    } else if (!checked && selectedOptions.includes(value)) {
      const updatedOptions = selectedOptions.filter((option) => option !== value);
      setSelectedOptions(updatedOptions);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const url = process.env.NEXT_PUBLIC_SERVER_URL


  const addinstr = (e) => {
    e.preventDefault();
    axios.post( `${url}/instructors`, {
      rank:instrank, 
      name: instname,
      inst_code:instcode
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add TTI</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="instructorName">Instructor Name:</label>
        <input type="text" id="instructorName" name="instructorName" value={instname}
            onChange={(e) => setinstname(e.target.value)} />

        <label htmlFor="code">Instructor Code:</label>
        <input type="text" id="code" name="code" value={instcode}
            onChange={(e) => setinstcode(e.target.value)} />

        <label htmlFor="rank">Instructor Rank:</label>
        <input type="text" id="rank" name="rank" value={instrank}
            onChange={(e) => setinstrank(e.target.value)} />

        <label htmlFor="subjects">Subjects:</label>
        <div className="dropdown">
      <button className="dropdown-btn">
        {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select Options'}
      </button>
     
    </div>
       

        <button onClick={addinstr} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTTI;
