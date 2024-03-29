"use client";
import React, { useEffect, useState } from "react";
import styles from "../view_subjects/view_subjects.module.css";
import axios from "axios";
import Dashboard from "../dashboard/page";

const Home = () => {
  const [data, setDate] = useState([]);

  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    axios.get(`${url}/courses`).then((res) => {
        console.log("course data is ", res.data);

      const updatedData = res.data.map((item) => {
        const startDate = new Date(item.start_date);
        const endDate = new Date(item.end_date);
        const durationInWeeks = calculateWeeks(startDate, endDate);
        return { ...item, durationInWeeks };
      });
      setDate(updatedData);
      console.log("updated data is ", updatedData);
    });
  }, [url]);



  function deleteCourse(id) {
    // alert to confirm delete
    if (!confirm("Are you sure you want to delete this course..?")) return;
    axios
      .delete(`${url}/courses/${id}`)
      .then((res) => {
        console.log(res.data);
        res.status(200).send("deleted");
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
        <h2>Courses</h2>
        <ul className={styles["responsive-table"]}>
          <li className={`${styles["table-header"]} ${styles.row} `}>
            <div className={`${styles.col} ${styles["col-1"]}`}>N.O</div>
            <div className={`${styles.col} ${styles["col-2"]}`}>
              Course Name
            </div>
            <div className={`${styles.col} ${styles["col-3"]}`}>
              Course Officer
            </div>
            <div className={`${styles.col} ${styles["col-4"]}`}>
              Number of Subjects
            </div>
            <div className={`${styles.col} ${styles["col-4"]}`}>
              Course Strength
            </div>
            <div className={`${styles.col} ${styles["col-4"]}`}>End Date</div>
            <div className={`${styles.col} ${styles["col-4"]}`}>
              Duration (Weeks)
            </div>
            <div className={`${styles.col} ${styles["col-4"]}`}>Action</div>
          </li>

          {data?.map((item, idx) => (
            <li
              key={item.course_id}
              className={`${styles["table-row"]}  ${styles.row}`}
            >
              <div
                className={`${styles.col} ${styles["col-1"]}`}
                data-label="Job Id"
              >
                {" "}
                {idx + 1}
              </div>
              <div
                className={`${styles.col} ${styles["col-2"]}`}
                data-label="Customer Name"
              >
                {item.course_name}
              </div>
              <div
                className={`${styles.col} ${styles["col-3"]}`}
                data-label="Amount"
              >
                {" "}
                {item.course_officer}
              </div>
              <div
                className={`${styles.col} ${styles["col-4"]}`}
                data-label="Payment Status"
              >
                {item.no_subjects}
              </div>
              <div
                className={`${styles.col} ${styles["col-4"]}`}
                data-label="Payment Status"
              >
                {item.course_strength}
              </div>
              <div
                className={`${styles.col} ${styles["col-4"]}`}
                data-label="Payment Status"
              >
                {new Date(item.start_date).toLocaleDateString("hi-IN")}
              </div>
              <div
                className={`${styles.col} ${styles["col-4"]}`}
                data-label="Payment Status"
              >
                {new Date(item.end_date).toLocaleDateString("hi-IN")}
              </div>
              <div
                className={`${styles.col} ${styles["col-4"]}`}
                data-label="Payment Status"
              >
                {item.durationInWeeks}
              </div>
              <div
                className={`${styles.col} ${styles["col-4"]} ${styles["flex"]} `}
                data-label="Payment Status"
              >
              
                <button
                  type="submit"
                  onClick={() => {
                    deleteCourse(item.course_id);
                  }}
                  className={styles.button}
                  formAction="sub2"
                >
                  x
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
