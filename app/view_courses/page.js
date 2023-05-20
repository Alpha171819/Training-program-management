"use client"
import React, { useEffect, useState } from 'react';
import styles from '../view_subjects/view_subjects.module.css';
import axios from "axios";

const Home = () => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.13.136:3131/courses').then((res) => {
      const updatedData = res.data.map((item) => {
        const startDate = new Date(item.start_date);
        const endDate = new Date(item.end_date);
        const durationInWeeks = calculateWeeks(startDate, endDate);
        return { ...item, durationInWeeks };
      });
      setDate(updatedData);
    });
  }, []);

  function calculateWeeks(start, end) {
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    const durationInMilliseconds = end.getTime() - start.getTime();
    const durationInWeeks = Math.floor(durationInMilliseconds / millisecondsPerWeek);
    return durationInWeeks;
  }

  return (


<div className={styles.container}>
    <h2 >Subjects</h2>
    <ul className={styles['responsive-table']}>
      <li className={`${styles['table-header']} ${styles.row} `}>
        <div className={`${styles.col} ${styles['col-1']}`}>Course ID</div>
        <div className={`${styles.col} ${styles['col-2']}`}>Course Name</div>
        <div className={`${styles.col} ${styles['col-3']}`}>Course Officer</div>
        <div className={`${styles.col} ${styles['col-4']}`}>Number of Subjects</div>
        <div className={`${styles.col} ${styles['col-4']}`}>Course Strength</div>
        <div className={`${styles.col} ${styles['col-4']}`}>End Date</div>
        <div className={`${styles.col} ${styles['col-4']}`}>Duration (Weeks)</div>
        <div className={`${styles.col} ${styles['col-4']}`}>Action</div>

      </li>

        {data?.map((item) => (
          <li className={`${styles['table-row']} ${styles.row}`}>
              <div className={`${styles.col} ${styles['col-1']}`} data-label="Job Id">       {item.course_id}</div>
              <div className={`${styles.col} ${styles['col-2']}`} data-label="Customer Name">{item.course_name}</div>
              <div className={`${styles.col} ${styles['col-3']}`} data-label="Amount">       {item.course_officer}</div>
             <div className={`${styles.col} ${styles['col-4']}`} data-label="Payment Status">{item.no_subjects}</div>
             <div className={`${styles.col} ${styles['col-4']}`} data-label="Payment Status">{item.course_strength}</div>
             <div className={`${styles.col} ${styles['col-4']}`} data-label="Payment Status">{new Date(item.start_date).toLocaleDateString("hi-IN")}</div>
             <div className={`${styles.col} ${styles['col-4']}`} data-label="Payment Status">{new Date(item.end_date).toLocaleDateString("hi-IN")}</div>
             <div className={`${styles.col} ${styles['col-4']}`} data-label="Payment Status">{item.durationInWeeks}</div>
             <div className={`${styles.col} ${styles['col-4']} ${styles['flex']} `} data-label="Payment Status"><button type="submit" className={styles.button} formAction="sub1">
                  ADD
                </button>
                <button type="submit" className={styles.button} formAction="sub2">
                  x
                </button></div>
       
       
         
            
                
             
       
       
          </li>
         ))
        }
     
    </ul>
  </div>


    
  );
};

export default Home;


