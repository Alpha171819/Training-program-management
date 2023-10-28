
"use client"

import React, { useState, useEffect } from 'react';
import styles from '../displayTopics/page.module.css';
import axios from 'axios';
import Dashboard from '../dashboard/page';
import { set } from 'date-fns';




const Selectsubjectfortopic = () => {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');

    const [topics, setTopics] = useState([]); // Add this line
  
    const url = process.env.NEXT_PUBLIC_SERVER_URL

    useEffect(() => {
      axios
        .get(`${url}/subjects`) // Replace with your API endpoint for fetching subjects
        .then((res) => setSubjects(res.data))
        .catch((error) => console.log(error));
      
    }, [url]);

useEffect(() => {
    console.log("selected subject is", selectedSubject);
    axios.get(`${url}/topic/${selectedSubject}`)
    .then((res) => {setTopics(res.data)
        console.log(res.data, 'topicsssssssssssssssssssssssssssss')
    })
    .catch((error) => console.log(error));
  
}
, [selectedSubject]);

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









