// create a component called topics in that component create a form to add topics to the database, the input feilds sholud be terminal objective, enabling objective, learning objective, Bloom level these are text fields and L/D, Therory clases, Practical classes, ITP, evening classes these are number feilds. create usestate for all the feilds and use axios to post the data to the database.

"use client"

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import axios from 'axios';
import Dashboard from '../dashboard/page';



const AddTopic = () => {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [courses, setCourses] = useState([]);
    const [terminalObjective, setTerminalObjective] = useState('');
    const [enablingObjective, setEnablingObjective] = useState('');
    const [learningObjective, setLearningObjective] = useState('');
    const [bloomLevel, setBloomLevel] = useState('');
    const [L_D, setL_D] = useState('');
    const [theoryClasses, setTheoryClasses] = useState('');
    const [practicalClasses, setPracticalClasses] = useState('');
    const [ITP, setITP] = useState('');
    const [eveningClasses, setEveningClasses] = useState('');
  
    const url = process.env.NEXT_PUBLIC_SERVER_URL

    useEffect(() => {
      axios
        .get(`${url}/subjects`) // Replace with your API endpoint for fetching subjects
        .then((res) => setSubjects(res.data))
        .catch((error) => console.log(error));
      
    }, [url]);

    useEffect(() => {
      axios
        .get(`${url}/courses`) // Replace with your API endpoint for fetching subjects
        .then((res) => setCourses(res.data))
        .catch((error) => console.log(error));
      
    }, [url]);

    const addTopicToDB = () => {
      // alert to confirm adding topic
      if (!confirm('Are you sure you want to add this topic?')) return;
      if (
        selectedSubject === "" ||
        terminalObjective === "" ||
        enablingObjective === "" ||
        learningObjective === "" ||
        L_D === "" ||
        theoryClasses === "" ||
        practicalClasses === "" ||
        ITP === "" ||
        eveningClasses === "" ||
        selectedCourse === ""
      ) {
        alert("Please fill all the fields");
        return;
      }

      const newTopic = {
        terminal_obj: terminalObjective,
        enabling_obj: enablingObjective,
        learning_obj: learningObjective,
        blooms_level: bloomLevel,
        LD: L_D,
        theory_cnt: theoryClasses,
        practical_cnt: practicalClasses,
        itp_cnt: ITP,
        evening_classes: eveningClasses,
        sub_id: selectedSubject,
        course_id: selectedCourse,
      };
    console.log("new topic is ", newTopic)  
      axios
        .post(`${url}/topic`, newTopic)
        .then((res) => alert('successfully posted'))
        .catch((error) => alert(error));
  
      
        // axios
        // .post(`${url}/addTopicReference`, newTopic)
        // .then((res) => alert('successfully posted'))
        // .catch((error) => alert(error));
  
      // setSelectedSubject('');
      // setTerminalObjective('');
      // setEnablingObjective('');
      // setLearningObjective('');
      // setBloomLevel('');
      // setL_D('');
      // setTheoryClasses('');
      // setPracticalClasses('');
      // setITP('');
      // setEveningClasses('');
    };
  return (
    <div>
      <Dashboard />
    <div className={styles.container}>
      <h1>Add Topic</h1>
      <button
        className={styles.topButton}
        onClick={() => (window.location.href = "/selectsubjectfortopic")}
      >
        View All Topics
      </button>
      <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="course">course</label>
          <select
            name="course"
            id="course"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course.course_id} value={course.course_id}>
                {course.course_name}
              </option>
            ))}
          </select>
          <label htmlFor="subject">Subject</label>
          <select
            name="subject"
            id="subject"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject.sub_name} value={subject.sub_id}>
                {subject.sub_name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="terminalObjective">Terminal Objective</label>
          <input
            type="text"
            name="terminalObjective"
            id="terminalObjective"
            value={terminalObjective}
            required={true}
            onChange={(e) => setTerminalObjective(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="enablingObjective">Enabling Objective</label>
          <input
            type="text"
            name="enablingObjective"
            id="enablingObjective"
            value={enablingObjective}
            required={true}
            onChange={(e) => setEnablingObjective(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="learningObjective">Learning Objective</label>
          <input
            type="text"
            name="learningObjective"
            id="learningObjective"
            value={learningObjective}
            required={true}
            onChange={(e) => setLearningObjective(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="bloomLevel">Bloom Level</label>
          <input
            type="number"
            min="1" max="5"
            name="bloomLevel"
            id="bloomLevel"
            value={bloomLevel}
            onChange={(e) => setBloomLevel(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="L_D">L/D</label>
          <input
            type="number"
            name="L_D"
            id="L_D"
            required={true}
            value={L_D}
            onChange={(e) => setL_D(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="theoryClasses">Theory Classes</label>
          <input
            type="number"
            required={true}
            name="theoryClasses"
            id="theoryClasses"
            value={theoryClasses}
            onChange={(e) => setTheoryClasses(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="practicalClasses">Practical Classes</label>
          <input
            type="number"
            name="practicalClasses"
            required={true}
            id="practicalClasses"
            value={practicalClasses}
            onChange={(e) => setPracticalClasses(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="ITP">ITP</label>
          <input
            type="number"
            name="ITP"
            id="ITP"
            value={ITP}
            required={true}
            onChange={(e) => setITP(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="eveningClasses">Evening Classes</label>
          <input
            type="number"
            name="eveningClasses"
            id="eveningClasses"
            value={eveningClasses}
            required={true}
            onChange={(e) => setEveningClasses(e.target.value)}
          />
        </div>

        <button className={styles.button} type="button" onClick={addTopicToDB}>Add Topic</button>
      </form>
    </div>
    </div>
  );
};

export default AddTopic;

// create a component called Displaytopics to display the topics added by the user and add a delete button to delete the topic from the table and the database as well 

// add css to the above component












