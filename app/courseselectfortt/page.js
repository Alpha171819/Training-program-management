
"use client"

import React, { useState, useEffect } from 'react';
import styles from '../displayTopics/page.module.css';
import axios from 'axios';
import Dashboard from '../dashboard/page';
import { set } from 'date-fns';




const CourseSelect = () => {
// get course details and store in a state
const[course, setCourse] = useState([]);
const[course_id, setCourse_id] = useState("");


  const createTimetable = () => {
    window.location.href = `/time_table`;
  };






// get course details
const url = process.env.NEXT_PUBLIC_SERVER_URL
useEffect(() => {
    axios.get(`${url}/courses`)
    .then((res) => {setCourse (res.data)
        console.log("course data is this one for dropdown", res.data)}).catch((error) => console.log(error));
}, [url]);


  return (
    <div>
      <Dashboard />
    <div className={styles.container}>
      <h1>Select a course To Generate Time Table</h1>
     
      <form className={styles.form}>
      <div className={styles.formGroup}>
          <label htmlFor="subject">Course</label>
          <select
            name="subject"
            id="subject"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select a Course</option>
            {course.map((course) => (
              <option key={course.course_name} value={course.course_id}>
                {course.course_name} {course.course_id}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => {
              setCourse_id(course);
              createTimetable();
              console.log("course id is ", course_id);
            }}
          >
            Submit
          </button>
         

          
        
        </div>

        
       
      </form>

    
    </div>
    

   

    </div>
  );
};

export default CourseSelect;









