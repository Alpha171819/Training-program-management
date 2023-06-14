"use client"
import styles from './Dashboard.module.css';
import React, { useState, useEffect } from 'react';


const Dashboard = () => {
  
  return (
    <>
      <nav className={styles.nav}>
        <ol className={styles.navList}>
          <li><a href="/Dashboard_body">Home</a></li>
          <li><a href="#">Notification</a></li>
          <li className={styles.training}>
            <a href="#">Instructors</a>
            <ol className={styles.subList}>
              <li><a href="/AddTTI">Add TTI</a></li>
              <li><a href="ViewTTI">View TTI</a></li>
            </ol>
          </li>
          <li className={styles.training}>
            <a href="#">Subjects</a>
            <ol className={styles.subList}>
              <li><a href="/addsubject">Add Subject</a></li>
              <li><a href="/view_subjects">View Sbujects</a></li>
             

            </ol>
          </li>
          <li className={styles.training}>
            <a href="#">Course</a>
            <ol className={styles.subList}>
            <li><a href="/addcourse">Add Course</a></li>
              <li><a href="/view_courses">View Course</a></li>
            </ol>
          </li>

          <li className={styles.training}>
            <a href="/time_table">Time Table</a>
          </li>

          <li className={styles.training}>
            <a href="/topics">Add Topics</a>
          </li><li className={styles.training}>
            <a href="/displayTopics">View Topics</a>
          </li>
         
        </ol>
      </nav>

    </>
  );
};

export default Dashboard;
