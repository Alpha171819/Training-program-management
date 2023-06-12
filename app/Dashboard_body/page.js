"use client"

import React from 'react'
import styles from '../dashboard/Dashboard.module.css';
import Dashboard from '../dashboard/page'; 

const Dashboard_body = () => {
  return (

    <div>

    <Dashboard />
    <div className={styles.container}>
    <div className={styles.leftBox}>

  
        <h2>Notifications</h2>
            <p>Notification 1</p>
            <p>Notification 2</p>
            <p>Notification 3</p>


    </div>

    <div className={styles.centerBox}>
      <h2>Running Courses</h2>
      <ol>
        <li>Diploma 69 A & B</li>
      </ol>
    </div>
  </div>
  </div>
  )
}

export default  Dashboard_body
