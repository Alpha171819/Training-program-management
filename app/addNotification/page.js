"use client";

import  { useState } from "react";
import axios from "axios";

import Dashboard from '../dashboard/page';
import styles from '../addcourse/AddCourse.module.css';




const Notification = () => {

    // state for notification fields
    const [notification, setNotification] = useState({
        id: new Date().getTime().toString(),
        name: "",
        date: "",
    });
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    // function to handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${url}/addNotification`, notification).then((res) => {
            console.log(res.data);
            alert("Notification Added Successfully");
        });

        // call api to add notification
    }

  return (
    <div>
      <Dashboard />
      <div className={styles.container}>
      
      <h2 className={styles.title}>Notification</h2>
      <form  className={styles.form}>
            <label className={styles.label}>Notification</label>
            <input type="text" placeholder="Enter Notification" value={notification.name}  className={styles.input} onChange={
                (e) => {
                    setNotification({
                        ...notification,
                        name: e.target.value
                    })
                }
            }/>
            <label>Notification Date</label>
            <input type="date" placeholder="Enter Notification Date" value={notification.date}  className={styles.input} onChange={
                (e) => {
                    setNotification({
                        ...notification,
                        date: e.target.value
                    })
                }
            } />
            <button className={styles.submitButton} onClick={handleSubmit} >Add Notification</button>
        </form>
        </div>
    </div>

  )
};

export default Notification;
