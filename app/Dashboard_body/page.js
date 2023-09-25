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
      const notifications = res.data;
  
      // Filter notifications that have not passed their date
      const validNotifications = notifications.filter((item) => {
        const date1 = new Date(item.date);
        const date2 = new Date();
        const diffDays = Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
  
        if (diffDays <= 0) {
          // Delete the notification if the date has passed
          axios.delete(`${url}/deleteNotification/${item.id}`).then((res) => {
            console.log(res.data);
          });
          return false; // Do not include this notification in validNotifications
        } else if (diffDays <= 13) {
          // Display an alert for notifications with 13 or fewer days left
          alert(`Days left for ${item.name}: ${diffDays}`);
        }
  
        return true; // Include this notification in validNotifications
      });
  
      // Update state with valid notifications
      setNotifications(validNotifications);
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
        
          <button className={styles.courseButton}>Diploma 69 A & B</button>
        
      </ol>
    </div>
  </div>
  </div>
  )
}

export default  Dashboard_body
