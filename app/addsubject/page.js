"use client"
import React, { useState } from 'react';
import styles from './AddSubject.module.css';

const AddSubject = () => {
  // State variables for subject details
  const [subjectName, setSubjectName] = useState('');
  const [subjectCode, setSubjectCode] = useState('');
  const [subjectCredits, setSubjectCredits] = useState('');
  const [subjectInstructor, setSubjectInstructor] = useState('');
  const [totalTheoryClasses, setTotalTheoryClasses] = useState('');
  const [totalPracticalClasses, setTotalPracticalClasses] = useState('');
  const [totalITPClasses, setTotalITPClasses] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(''); // State variable for selected course

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle subject details submission

    // Redirect to another page
  };

  return (
    <>
      <h2>Add Subject</h2>
      <form className={styles.subjectForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="subjectName">Subject Name:</label>
          <input
            type="text"
            id="subjectName"
            name="subjectName"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subjectCode">Subject Code:</label>
          <input
            type="text"
            id="subjectCode"
            name="subjectCode"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subjectCredits">Subject Credits:</label>
          <input
            type="number"
            id="subjectCredits"
            name="subjectCredits"
            value={subjectCredits}
            onChange={(e) => setSubjectCredits(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subjectInstructor">Subject Instructor:</label>
          <input
            type="text"
            id="subjectInstructor"
            name="subjectInstructor"
            value={subjectInstructor}
            onChange={(e) => setSubjectInstructor(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="totalTheoryClasses">Total Theory Classes:</label>
          <input
            type="number"
            id="totalTheoryClasses"
            name="totalTheoryClasses"
            value={totalTheoryClasses}
            onChange={(e) => setTotalTheoryClasses(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="totalPracticalClasses">Total Practical Classes:</label>
          <input
            type="number"
            id="totalPracticalClasses"
            name="totalPracticalClasses"
            value={totalPracticalClasses}
            onChange={(e) => setTotalPracticalClasses(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="totalITPClasses">Total ITP Classes (Integrated Theory and Practical):</label>
          <input
            type="number"
            id="totalITPClasses"
            name="totalITPClasses"
            value={totalITPClasses}
            onChange={(e) => setTotalITPClasses(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="course">Course:</label>
<select
id="course"
name="course"
value={selectedCourse}
onChange={(e) => setSelectedCourse(e.target.value)}
>
<option value="">Select Course</option>
<option value="dee">DEE</option>
<option value="cse">CSE</option>
<option value="ce">CE</option>
</select>
</div>
<div className={styles.buttonWrapper}>
      <button type="submit">Submit</button>
    </div>
  </form>
</>
);
};

export default AddSubject;
