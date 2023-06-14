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
        <marquee className={styles.notificationsBox} direction="up" scrollamount="2" height="200px">
          <ul>
            <li>Notification 1</li>
            <li>Notification 2</li>
            <li>Notification 3</li>
            <li>Notification 4</li>
            <li>Notification 5</li>
            <li>Notification 6</li>
            <li>Notification 7</li>
            <li>Notification 8</li>
            <li>Notification 9</li>
            <li>Notification 10</li>
          </ul>
        </marquee>




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
