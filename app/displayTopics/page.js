"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';

const DisplayTopics = () => {
    const [topics, setTopics] = useState([]);
    
    const url = process.env.NEXT_PUBLIC_SERVER_URL
    
    useEffect(() => {
        axios
        .get(`${url}/topics`) // Replace with your API endpoint for fetching topics
        .then((res) => setTopics(res.data))
        .catch((error) => console.log(error));
    }, []);
    
    const deleteTopic = (id) => {
        axios
        .delete(`${url}/topics/${id}`)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
    
        setTopics(topics.filter((topic) => topic.id !== id));
    };
    
    return (
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
                <td>{topic.sub_id}</td>
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
    );
    }

export default DisplayTopics;
