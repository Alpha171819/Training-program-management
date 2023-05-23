"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./view_subjects.module.css";
import Link from "next/link";

const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3131/subjects").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Subjects</h2>
      <ul className={styles["responsive-table"]}>
        <li className={`${styles["table-header"]} ${styles.row} `}>
          <div className={`${styles.col} ${styles["col-1"]}`}>Sub ID</div>
          <div className={`${styles.col} ${styles["col-2"]}`}>Subject</div>
          <div className={`${styles.col} ${styles["col-3"]}`}>Total Theory</div>
          <div className={`${styles.col} ${styles["col-4"]}`}>
            Total Practical
          </div>
          <div className={`${styles.col} ${styles["col-4"]}`}>Action</div>
        </li>

        {data?.map((item, idx) => (
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
            <Link
              className={styles.button}
              href={`/addsubject/${item.sub_id}`}
            >
              <p>EDIT</p>
            </Link>

            <button
              onClick={() => {
                DeleteId(item.sub_id);
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
  );
};

const DeleteId = (id) => {
  // alert the user to delete the subject or not
  const areyousure = window.confirm("Are you sure you want to delete?");
  if (areyousure) {
    axios.delete(`http://localhost:3131/subjects/${id}`).catch((error) => {
      console.log(error);
    });
    // reload the page
    window.location.reload();
  }
};

export default TableComponent;
