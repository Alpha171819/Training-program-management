"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./page.module.css";
import Dashboard from '../dashboard/page';

const DisplayTopics = () => {
  const [topics, setTopics] = useState([]);
  const [subjects, setSubject] = useState({});

  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    axios
      .get(`${url}/topics`) // Replace with your API endpoint for fetching topics
      .then((res) => setTopics(res.data))
      .catch((error) => {
        console.error(
          "error fetching topics, check api endpoint in displayTopics.js"
        );
        alert(
          "An error occured, if you are a developer, check the console for more information."
        );
      });
  }, [url]);

  const deleteTopic = (id) => {
    // alert to confirm delete
    if (!confirm("Are you sure you want to delete this topic?")) return;
    axios
      .delete(`${url}/topic/${id}`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    setTopics(topics.filter((topic) => topic.id !== id));

    axios
      .delete(`${url}/topicReference/${id}`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    setTopics(topics.filter((topic) => topic.id !== id));

 

  };

  useEffect(() => {
    axios.get(`${url}/subjects`).then((res) => {
      setSubject(res.data);
     
    });
  }, [url]);

  console.log("timed subjects",subjects);


  return (
    <div>
    <Dashboard />
    <div className={styles.container}>
      <h1>Topics</h1>
     
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Subject</th>
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
              <td>{subjects[topic.sub_id-1].sub_name}</td>            
              <td>{topic.terminal_obj}</td>
              <td>{topic.enabling_obj}</td>
              <td>{topic.learning_obj}</td>
              <td>{topic.bloom_level}</td>
              <td>{topic.LD}</td>
              <td>{topic.theory_cnt}</td>
              <td>{topic.practical_cnt}</td>
              <td>{topic.itp_cnt}</td>
              <td>{topic.evng_classes}</td>
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
    </div>
  );
};

export default DisplayTopics;

