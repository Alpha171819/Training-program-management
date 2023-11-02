
"use client"

import React, { useState, useEffect } from 'react';
import styles from '../displayTopics/page.module.css';
import axios from 'axios';
import Dashboard from '../dashboard/page';
import { set } from 'date-fns';




const Selectsubjectfortopic = () => {
    const [subjects, setSubjects] = useState([]);
    const [data, setDate] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');

    const [topics, setTopics] = useState([]); // Add this line
  
    const url = process.env.NEXT_PUBLIC_SERVER_URL
    console.log("selected course is", selectedCourse);

    function calculateWeeks(start, end) {
      const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
      const durationInMilliseconds = end.getTime() - start.getTime();
      const durationInWeeks = Math.floor(
        durationInMilliseconds / millisecondsPerWeek
      );
      return durationInWeeks;
    }

    useEffect(() => {
      axios.get(`${url}/courses`).then((res) => {
        const updatedData = res.data.map((item) => {
          const startDate = new Date(item.start_date);
          const endDate = new Date(item.end_date);
          const durationInWeeks = calculateWeeks(startDate, endDate);
          return { ...item, durationInWeeks };
        });
        setDate(updatedData);

       

      });
    }, [url]);
    useEffect(() => {
      axios
        .get(`${url}/subjectsssss/${selectedCourse}`) // Replace with your API endpoint for fetching subjects
        .then((res) => setSubjects(res.data))
        .catch((error) => console.log(error));
      
    }, [selectedCourse, url]);

useEffect(() => {
    console.log("selected subject is", selectedSubject);
    axios.get(`${url}/topic/${selectedSubject}/${selectedCourse}`)
    .then((res) => {setTopics(res.data)
        console.log(res.data, 'topicsssssssssssssssssssssssssssss')
    })
    .catch((error) => console.log(error));
  
}
, [selectedSubject,url,selectedCourse]);

const deleteTopic = (id) => {
    // alert to confirm delete
    if (!confirm("Are you sure you want to delete this topic?")) return;
    axios
      .delete(`${url}/topic/${id}`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
      console.log("topic deleted");
    setTopics(topics.filter((topic) => topic.id !== id));
  };




  return (
    <div>
      <Dashboard />

    <div className={styles.container}>
    <h1>Select a Course To View Subjects</h1>
     
     <form className={styles.form}>
     <div className={styles.formGroup}>
         <label htmlFor="subject">Courses</label>
         <select
           name="subject"
           id="subject"
           value={selectedCourse}
           onChange={(e) => setSelectedCourse(e.target.value)}
         >
          <option value="">Select a Course</option>
           {data.map((subject) => (
             <option key={subject.course_name} value={subject.course_id}>
               {subject.course_name} {subject.course_id}
             </option>
           ))}
         </select>
       
       </div>

       
      
     </form>
      <h1>Select a Subject To View Topics</h1>
     
      <form className={styles.form}>
      <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <select
            name="subject"
            id="subject"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject.sub_name} value={subject.sub_id}>
                {subject.sub_name} {subject.sub_id}
              </option>
            ))}
          </select>
        
        </div>

        
       
      </form>

      {topics.length > 0 && (
        
        <div className={styles.container}>
          <h1>Topics</h1>
         
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Terminal Objective</th>
                <th>Enabling Objective</th>
                <th>Learning Objective</th>
                <th>Bloom Level</th>
                <th>L/D</th>
                <th>Theory Classes</th>
                <th>Practical Classes</th>
                <th>ITP</th>
                <th>Evening Classes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic) => (
                <tr key={topic.id}>
                  <td>{topic.terminal_obj}</td>
                  <td>{topic.enabling_obj}</td>
                  <td>{topic.learning_objl}</td>
                  <td>{topic.blooms_level}</td>
                  <td>{topic.LD}</td>
                  <td>{topic.theory_cnt}</td>
                  <td>{topic.practical_cnt}</td>
                  <td>{topic.itp_cnt}</td>
                  <td>{topic.evening_cnt}</td>
                  <td>
                    <button
                      className={styles.button}
                      onClick={() => deleteTopic(topic.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )    
    }
    </div>
    

   

    </div>
  );
};

export default Selectsubjectfortopic;









