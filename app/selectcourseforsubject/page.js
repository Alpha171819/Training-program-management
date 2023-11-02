
"use client";
import React, { useEffect, useState } from "react";
import styles from "../view_subjects/view_subjects.module.css";
import axios from "axios";
import Dashboard from "../dashboard/page";
import Link from "next/link";




const Selectcourseforsubject = () => {
    const [data, setDate] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [subjects, setSubjects] = useState([]);

    console.log(selectedCourse, 'this is selected course')

    const url = process.env.NEXT_PUBLIC_SERVER_URL;
  
    useEffect(() => {
      axios.get(`${url}/courses`).then((res) => {
        const updatedData = res.data.map((item) => {
          const startDate = new Date(item.start_date);
          const endDate = new Date(item.end_date);
          const durationInWeeks = calculateWeeks(startDate, endDate);
          return { ...item, durationInWeeks };
        });
        setDate(updatedData);

      });
    }, [url]);
  
    useEffect(() => {   
        axios.get(`${url}/subjectsssss/${selectedCourse}`).then((res) => {
            console.log("subjects data is ", res.data);
            setSubjects(res.data);
            });
    }, [selectedCourse]);

  
    function deleteCourse(id) {
      // alert to confirm delete
      if (!confirm("Are you sure you want to delete this course..?")) return;
      axios
        .delete(`${url}/subjects/${id}`)
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  
    function calculateWeeks(start, end) {
      const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
      const durationInMilliseconds = end.getTime() - start.getTime();
      const durationInWeeks = Math.floor(
        durationInMilliseconds / millisecondsPerWeek
      );
      return durationInWeeks;
    }
  
  return (
    <div>
      <Dashboard />
    <div className={styles.container}>
      <h1>Select a Course To View Subjects</h1>
     
      <form className={styles.form}>
      <div className={styles.formGroup}>
          <label htmlFor="subject">Courses</label>
          <select
            name="subject"
            id="subject"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select a Course</option>
            {data.map((subject) => (
              <option key={subject.course_name} value={subject.course_id}>
                {subject.course_name} {subject.course_id}
              </option>
            ))}
          </select>
        
        </div>

        
       
      </form>

      <div className={styles.container}>
      
      <h2>Subjects</h2>
      <ul className={styles["responsive-table"]}>
        <li className={`${styles["table-header"]} ${styles.row} `}>
          <div className={`${styles.col} ${styles["col-1"]}`}>N.O</div>
          <div className={`${styles.col} ${styles["col-2"]}`}>Subject</div>
          <div className={`${styles.col} ${styles["col-3"]}`}>Total LD</div>
          <div className={`${styles.col} ${styles["col-3"]}`}>Total Theory</div>
          <div className={`${styles.col} ${styles["col-4"]}`}>Total Practical</div>
          <div className={`${styles.col} ${styles["col-3"]}`}>Total ITP</div>
          <div className={`${styles.col} ${styles["col-3"]}`}>Total Evening Class</div>
          <div className={`${styles.col} ${styles["col-3"]}`}>Total Classes</div>
          <div className={`${styles.col} ${styles["col-4"]}`}>Room Name</div>
          <div className={`${styles.col} ${styles["col-4"]}`}>Action</div>
        </li>

        {subjects?.map((item, idx) => (
          <li
            key={item.sub_id}
            className={`${styles["table-row"]} ${styles.row}`}
          >
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="Job Id"
            >
              {idx+1}
            </div>
            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="Customer Name"
            >
              {item.sub_name}
            </div>

            <div
              className={`${styles.col} ${styles["col-2"]}`}
              data-label="Customer Name"
            >
              {item.total_ld}
            </div>
            <div
              className={`${styles.col} ${styles["col-3"]}`}
              data-label="Amount"
            >
              {item.total_theory}
            </div>
            <div
              className={`${styles.col} ${styles["col-4"]}`}
              data-label="Payment Status"
            >
              {item.total_practical}
            </div>

            <div
              className={`${styles.col} ${styles["col-4"]}`}
              data-label="Payment Status"
            >
              {item.total_itp}
            </div>

            <div
              className={`${styles.col} ${styles["col-4"]}`}
              data-label="Payment Status"
            >
              {item.total_evng_classes}
            </div>

            <div
              className={`${styles.col} ${styles["col-4"]}`}
              data-label="Payment Status"
            >
              {item.total}
            </div>
            <div
              className={`${styles.col} ${styles["col-4"]}`}
              data-label="Payment Status"
            >
              {item.room_name}
            </div>

            <Link className={styles.button} href={`/addsubject/${item.sub_id}`}>
              <p>EDIT</p>
            </Link>

            <button
              onClick={() => {
                deleteCourse(item.sub_id);
              }}
              type="submit"
              className={styles.button}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    

   

    </div>
  );
};

export default Selectcourseforsubject;









