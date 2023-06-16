"use client";

import  { useState } from "react";
import axios from "axios";



const Notification = () => {

    // state for notification fields
    const [notification, setNotification] = useState({
        id: self.crypto.randomUUID(),
        name: "",
        date: "",
    });
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    // function to handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${url}/addNotification`, notification).then((res) => {
            console.log(res.data);
        });

        // call api to add notification
    }

  return (
    <div>
        <h1>Notification</h1>
        <form>
            <label>Notification</label>
            <input type="text" placeholder="Enter Notification" value={notification.name} onChange={
                (e) => {
                    setNotification({
                        ...notification,
                        name: e.target.value
                    })
                }
            }/>
            <label>Notification Date</label>
            <input type="date" placeholder="Enter Notification Date" value={notification.date} onChange={
                (e) => {
                    setNotification({
                        ...notification,
                        date: e.target.value
                    })
                }
            } />
            <button onClick={handleSubmit} >Add Notification</button>
        </form>
    </div>

  )
};

export default Notification;
