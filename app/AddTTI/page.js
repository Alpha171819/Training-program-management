"use client"
import React from 'react';
import styles from './AddTTI.module.css';

const AddTTI = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add TTI</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="employeeId">Employee ID:</label>
        <input type="text" id="employeeId" name="employeeId" />

        <label htmlFor="instructorName">Instructor Name:</label>
        <input type="text" id="instructorName" name="instructorName" />

        <label htmlFor="code">Instructor Code:</label>
        <input type="text" id="code" name="code" />

        <label htmlFor="subjects">Subjects:</label>
        <select id="subjects" name="subjects">
          <option value="operating-system">Operating System</option>
          <option value="python">Python</option>
          <option value="dbms">DBMS</option>
          <option value="machine-drawing">Machine Drawing</option>
          <option value="cbrn">CBRN</option>
          <option value="maths">Maths</option>
          <option value="ai">AI</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTTI;
