"use client"
import { useState } from 'react';
import styles from './AddCourse.module.css';
import axios from 'axios';

const AddCoursePage = () => {
  const [courseName, setCourseName] = useState('');
  const [numberOfSubjects, setNumberOfSubjects] = useState('');
  const [Studentcount, setStudentcount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [courseOfficer, setCourseOfficer] = useState('');

 

  const AddCourse = (e) => {
    e.preventDefault();
  const url = process.env.NEXT_PUBLIC_SERVER_URL
    axios
      .post(`${url}/courses`, {
        course_name: courseName,
        course_officer: courseOfficer,
        course_strength: Studentcount,
        start_date: startDate,
        end_date: endDate,
        no_subjects: numberOfSubjects,

      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Course</h2>
      <form  className={styles.form}>
  
        <label htmlFor="courseName" className={styles.label}>Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="numberOfSubjects" className={styles.label}>Number of Subjects:</label>
        <input
          type="number"
          id="numberOfSubjects"
          value={numberOfSubjects}
          onChange={(e) => setNumberOfSubjects(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="Studentcount" className={styles.label}>Number of Students:</label>
        <input
          type="text"
          id="Studentcount"
          value={Studentcount}
          onChange={(e) => setStudentcount(e.target.value)}
          required
          className={styles.input}
        />

        <label htmlFor="startDate" className={styles.label}>Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="endDate" className={styles.label}>End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
          className={styles.input}
        />


<label htmlFor="courseOfficer" className={styles.label}>Course Officer:</label>
<input
  type="text"
  id="courseOfficer"
  value={courseOfficer}
  onChange={(e) => setCourseOfficer(e.target.value)}
  required
  className={styles.input}
/>

<input type="submit" onClick={AddCourse} value="Submit" className={styles.submitButton} />
</form>
</div>
);



};

export default AddCoursePage;




// var date = new Date();
// console.log(date)
// var tdate = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getUTCFullYear();
// if (month < 10) {
//     month = '0' + month;
// }
// if (tdate < 10) {
//     tdate = '0' + tdate;
// }
// var minDate = year + '-' + month + '-' + tdate;
// $('#return').attr('min', minDate);