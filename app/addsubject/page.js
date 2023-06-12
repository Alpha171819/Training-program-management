"use client";
import React, { useEffect, useState } from "react";
import styles from "./AddSubject.module.css";
import axios from "axios";
import Dashboard from '../dashboard/page';

// get the course name from api and display it in the dropdown
// const getCourses = () => {
//   axios.get("http://localhost:3131/courses").then((res) => {
//     setData(res.data);
//     console.log(res.data);
//   });
// };

const AddSubject = () => {
  // State variables for subject details
  const [subjectName, setSubjectName] = useState("");
  const [totalTheoryClasses, setTotalTheoryClasses] = useState("");
  const [totalPracticalClasses, setTotalPracticalClasses] = useState("");
  const [totalITPClasses, setTotalITPClasses] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(""); // State variable for selected course
  const [courseDropdown, setCourseDropdown] = useState([]); // State variable for course dropdown
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle subject details submission

    // Redirect to another page
  };

  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    axios.get(`${url}/courses`).then((res) => {
      setCourseDropdown(res.data);
      console.log(" course data ", res.data);
    });
  }, [url]);

  // add the subject details to the database
  const addSubject = () => {
    // ask before adding
    if (
      !window.confirm(
        `Are you sure you want to add ${subjectName} to the database?`
      )
    )
      return;

    axios
      .post(`${url}/subjects`, {
        sub_name: subjectName,
        total_theory: totalTheoryClasses,
        total_practical: totalPracticalClasses,
        total_itp: totalITPClasses,
        course_id: selectedCourse,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <Dashboard />
      <h2>Add Subject</h2>
      <form className={styles.subjectForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="subjectName">Subject Name:</label>
          <input
            type="text"
            id="subjectName"
            name="subjectName"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="totalTheoryClasses">Total Theory Classes:</label>
          <input
            type="number"
            id="totalTheoryClasses"
            name="totalTheoryClasses"
            value={totalTheoryClasses}
            onChange={(e) => setTotalTheoryClasses(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="totalPracticalClasses">
            Total Practical Classes:
          </label>
          <input
            type="number"
            id="totalPracticalClasses"
            name="totalPracticalClasses"
            value={totalPracticalClasses}
            onChange={(e) => setTotalPracticalClasses(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="totalITPClasses">
            Total ITP Classes (Integrated Theory and Practical):
          </label>
          <input
            type="number"
            id="totalITPClasses"
            name="totalITPClasses"
            value={totalITPClasses}
            onChange={(e) => setTotalITPClasses(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            name="course"
            value={selectedCourse}
            onChange={(e) => {
              console.log(e.target.value);
              return setSelectedCourse(e.target.value);
            }}
          >
            <option key="balab" value="">
              Select a course
            </option>
            {courseDropdown.map((course) => (
              <option key={course.course_id} value={course.course_id}>
                {course.course_name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={addSubject} type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddSubject;
