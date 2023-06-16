"use client"

import React,{ useState, useEffect }from 'react'
import styles from '../dashboard/Dashboard.module.css';
import Dashboard from '../dashboard/page'; 
import axios from "axios";



const Notifications = () => {

    const [notification, setnotification] = useState("");
    const [notifications, setnotifications] = useState([]);

    const url = process.env.NEXT_PUBLIC_SERVER_URL;

    useEffect(() => {
        axios.get(`${url}/notifications`).then((res) => {
            setnotifications(res.data);
        });
    }, [url]);

    const addnotification = () => {
        axios
            .post(`${url}/notifications`, {
                notification: notification,
            })
            .then((res) => {
                console.log(res.data);
            });
    };

  return (
    <div>
        <Dashboard/>  
<div className={styles.notificationBox}>
    <input type="text" id="notification" name="notification" value={notification}
            onChange={(e) => setnotification(e.target.value)} />
    <button onClick={addnotification} type="submit">Save</button>
    </div>
    </div>
  )
}

export default Notifications
