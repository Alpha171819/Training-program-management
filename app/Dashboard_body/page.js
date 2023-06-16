"use client"

import React, { useEffect, useState } from 'react'
import styles from '../dashboard/Dashboard.module.css';
import axios from 'axios';
import Dashboard from '../dashboard/page'; 


const Dashboard_body = () => {

  // state for notifications 
  const [notifications, setNotifications] = useState([])
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    axios.get(`${url}/getNotification`).then((res) => {
      setNotifications(res.data);
      console.log(res.data);
    });
  }, [url]);



  return (

    <div>

    <Dashboard />
    <div className={styles.container}>
    <div className={styles.leftBox}>

        <h2>Notifications</h2>
        <marquee className={styles.notificationsBox} direction="up" scrollamount="2" height="200px">
          <ul>
            {notifications?.map((item, idx) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>{new Date(item.date).toLocaleDateString()}</p>
              </li>
            ))}
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
