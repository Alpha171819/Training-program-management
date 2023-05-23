"use client";
import React, { useEffect, useState } from "react";
import styles from ".././AddSubject.module.css";
import axios from "axios";
// get the course name from api and display it in the dropdown
// const getCourses = () => {
//   axios.get("http://localhost:3131/courses").then((res) => {
//     setData(res.data);
//     console.log(res.data);
//   });
// };

const AddSubject = ({params}) => {


  // State variables for subject details
  const [subjectDetails, setSubjectDetails] = useState({});

  
  useEffect(() => {
    const id = params.slug;
    axios.get(`http://localhost:3131/subjects/${id}`).then((res) => {
      setSubjectDetails(res.data[0]);
      console.log(res.data[0]);
    });
  }, [params])


  console.log(subjectDetails.sub_name)
  // State variables for subject details
  const [subjectName, setSubjectName] = useState(subjectDetails.sub_name);
  const [totalTheoryClasses, setTotalTheoryClasses] = useState(subjectDetails.total_theory);
  const [totalPracticalClasses, setTotalPracticalClasses] = useState(subjectDetails.total_practical);
  const [totalITPClasses, setTotalITPClasses] = useState(subjectDetails.total_itp);
  const [selectedCourse, setSelectedCourse] = useState(subjectDetails.course_id); // State variable for selected course
  const [courseDropdown, setCourseDropdown] = useState([]); // State variable for course dropdown
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle subject details submission

    // Redirect to another page
  };

  useEffect(() => {
    axios.get("http://localhost:3131/courses").then((res) => {
      setCourseDropdown(res.data);
      console.log(" course data ", res.data);
    });
  }, []);
// fetch the subject details from the database



  // console.log(subjectDetails[0].sub_name)
  // add the subject details to the database


  return (
    <>
      <h2 className={styles.edit}>Edit Subject</h2>
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
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddSubject;
