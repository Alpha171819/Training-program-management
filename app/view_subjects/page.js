"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './view_subjects.module.css';


const TableComponent = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.13.136:3131/subjects')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Subjects</h2>
      <ul className={styles['responsive-table']}>
        <li className={`${styles['table-header']} ${styles.row} `}>
          <div className={`${styles.col} ${styles['col-1']}`}>Sub ID</div>
          <div className={`${styles.col} ${styles['col-2']}`}>Subject</div>
          <div className={`${styles.col} ${styles['col-3']}`}>Total Theory</div>
          <div className={`${styles.col} ${styles['col-4']}`}>Total Practical</div>
          <div className={`${styles.col} ${styles['col-4']}`}>Action</div>

        </li>

          {data?.map((item) => (
            <li className={`${styles['table-row']} ${styles.row}`}>
                <div className={`${styles.col} ${styles['col-1']}`} data-label="Job Id">{item.sub_id}</div>
                <div className={`${styles.col} ${styles['col-2']}`} data-label="Customer Name">{item.sub_name}</div>
                <div className={`${styles.col} ${styles['col-3']}`} data-label="Amount">{item.total_theory}</div>    
                <div className={`${styles.col} ${styles['col-4']}`} data-label="Payment Status">{item.total_practical}</div>
                <button type="submit" className={styles.button}>
                  ADD
                </button>
                <button type="submit" className={styles.button} >
                  x
                </button>
            
            </li>

           ))
          }
       
      </ul>
    </div>
  );
};

export default TableComponent;
