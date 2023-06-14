"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../view_subjects/view_subjects.module.css";
import Link from "next/link";
import Dashboard from '../dashboard/page';

const ViewTTI = () => {
    const [data, setData] = useState([]);
    const url = process.env.NEXT_PUBLIC_SERVER_URL;

    // create a get request to fetch all instructors from the database
    useEffect(() => {
        axios.get(`${url}/instructors`).then((res) => {
            setData(res.data);
            console.log( "TTI data is ",res.data);
        });
    }, [url]);

    // create a delete request to delete a particular instructor from the database
 

    const DeleteId = (id) => {
        // alert the user to delete the subject or not
        const areyousure = window.confirm("Are you sure you want to delete?");
        if (areyousure) {
          axios
          .delete(`${url}/instructors/${id}`)
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
    
    <h2>View TTI</h2>
    <ul className={styles["responsive-table"]}>
      <li className={`${styles["table-header"]} ${styles.row} `}>
        <div className={`${styles.col} ${styles["col-1"]}`}> RANK</div>
        <div className={`${styles.col} ${styles["col-2"]}`}> NAME</div>
        <div className={`${styles.col} ${styles["col-3"]}`}>CODE</div>
        <div className={`${styles.col} ${styles["col-4"]}`}>Action</div>
      </li>

      {data?.map((item, idx) => (
        <li
          key={item.inst_id}
          className={`${styles["table-row"]} ${styles.row}`}
        >
          <div
            className={`${styles.col} ${styles["col-1"]}`}
            data-label="Job Id"
          >
            {item.rank}
          </div>
          <div
            className={`${styles.col} ${styles["col-2"]}`}
            data-label="Customer Name"
          >
            {item.name}
          </div>
          <div
            className={`${styles.col} ${styles["col-3"]}`}
            data-label="Amount"
          >
            {item.inst_code}
          </div>
          <Link className={styles.button} href={`/addsubject/${item.inst_id}`}>
            <p>EDIT</p>
          </Link>

          <button
            onClick={() => {
              DeleteId(item.inst_id);
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
  )
}

export default ViewTTI
