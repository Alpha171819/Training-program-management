"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../view_subjects/view_subjects.module.css";
import Link from "next/link";
import Dashboard from '../dashboard/page';


const TableComponent = () => {
  const [data, setData] = useState([]);
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    axios.get(`${url}/getNotification`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [url]);

  const DeleteId = (id) => {
    // alert the user to delete the subject or not
    const areyousure = window.confirm("Are you sure you want to delete?");
    if (areyousure) {
      axios
        .delete(`${url}/deleteNotification/${id}`)
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          window.location.reload();
          alert("Deleted Successfully");
        });
    }
  };

  return (
    <div>
      <Dashboard />
    <div className={styles.container}>
      
      <h2>Subjects</h2>
      <ul className={styles["responsive-table"]}>
        <li className={`${styles["table-header"]} ${styles.row} `}>
          <div className={`${styles.col} ${styles["col-1"]}`}>Name</div>
          <div className={`${styles.col} ${styles["col-2"]}`}>Date</div>
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
              {item.name}
            </div>
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="Job Id"
            >
              {new Date(item.date).toLocaleDateString()}
            </div>

            <button
              onClick={() => {
                DeleteId(item.id);
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
  );
};



export default TableComponent;
