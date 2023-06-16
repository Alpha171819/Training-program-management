"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./view_subjects.module.css";
import Link from "next/link";
import Dashboard from '../dashboard/page';


const TableComponent = () => {
  const [data, setData] = useState([]);
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    axios.get(`${url}/subjects`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [url]);

  const DeleteId = (id) => {
    // alert the user to delete the subject or not
    const areyousure = window.confirm("Are you sure you want to delete?");
    if (areyousure) {
      axios
        .delete(`${url}/subjects/${id}`)
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          window.location.reload();
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
          <div className={`${styles.col} ${styles["col-1"]}`}>Sub ID</div>
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

        {data?.map((item, idx) => (
          <li
            key={item.sub_id}
            className={`${styles["table-row"]} ${styles.row}`}
          >
            <div
              className={`${styles.col} ${styles["col-1"]}`}
              data-label="Job Id"
            >
              {item.sub_id}
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
    </div>
  );
};



export default TableComponent;
