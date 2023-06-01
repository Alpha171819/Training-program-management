"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import axios from "axios";



// Example usage


const TimeTable = () => {
 
  const [course, setcourse] = useState([]);
  //create a get request to get the instructors data

const { startOfWeek, differenceInWeeks, endOfWeek, format } = require('date-fns');

const getWeekNumber = (startDate, currentDate) => {
  const startOfWeekDate = startOfWeek(startDate);
  const weeksDifference = differenceInWeeks(currentDate, startOfWeekDate);
  return weeksDifference + 1; // Adding 1 to make the week numbers start from 1
};






  const url = process.env.NEXT_PUBLIC_SERVER_URL

  useEffect(() => {
    axios.get(`${url}/courses`).then((res) => {
        setcourse(res.data);
      console.log(" course data ", res.data);
    });
  }, []);


  const startDate = new Date(course[0]?.start_date); // start date

  const currentDate = new Date(); // Today
  
  const weekNumber = getWeekNumber(startDate, currentDate);
  console.log(weekNumber); // Output: 23

  const endOfWeekDate = endOfWeek(currentDate);

  return (
  
   
   < div className={styles.body}>
     <div className={styles.grid_container}>
       <div className={`${styles.grid_item} ${styles.item1}`}><b><u>FACULTY OF ELECTRONICS</u></b></div>
       <div className={`${styles.grid_item} ${styles.item2}`}>Weekly</div>
       <div className={`${styles.grid_item} ${styles.item3}`}><u>TPG PGME: COURSE SER NO: {course[0]?.course_name}</u></div>
       <div className={`${styles.grid_item} ${styles.item4}`}>Course Strength</div>
       <div className={`${styles.grid_item} ${styles.item5}`}>27</div>
       <div className={`${styles.grid_item} ${styles.item6}`}>Week Ending</div>
       <div className={`${styles.grid_item} ${styles.item7}`}>{format(new Date(endOfWeekDate), 'dd-MMM-yyyy')}</div>
       <div className={`${styles.grid_item} ${styles.item8}`}><u>(Semester: From { new Date(course[0]?.start_date).toDateString()} to { new Date(course[0]?.end_date).toDateString()})</u></div>
       <div className={`${styles.grid_item} ${styles.item9}`}>Commenced On</div>
       <div className={`${styles.grid_item} ${styles.item10}`}>28-Sept-23</div>
       <div className={`${styles.grid_item} ${styles.item11}`}>Week Running</div>
       <div className={`${styles.grid_item} ${styles.item12}`}>Week {weekNumber}</div>
       <div className={`${styles.grid_item} ${styles.item13}`}><u>(TEA BREAK : 10:55 TO 11:20 Hrs)</u></div>
       <div className={`${styles.grid_item} ${styles.item14}`}>Termination on</div>
       <div className={`${styles.grid_item} ${styles.item15}`}>21-Nov-23</div>
       <div className={`${styles.grid_item} ${styles.item16}`}>Day & Date</div>
       <div className={`${styles.grid_item} ${styles.item17}`}>08:00H-08:40H</div>
       <div className={`${styles.grid_item} ${styles.item18}`}>08:40H-09:25H</div>
       <div className={`${styles.grid_item} ${styles.item19}`}>09:30H-10:10H</div>
       <div className={`${styles.grid_item} ${styles.item20}`}>10:15H-10:55H</div>
       <div className={`${styles.grid_item} ${styles.item21}`}>11:20H-12:40H</div>
       <div className={`${styles.grid_item} ${styles.item22}`}>12:05H-12:45H</div>
       <div className={`${styles.grid_item} ${styles.item23}`}>12:50H-13:30H</div>
       <div className={`${styles.grid_item} ${styles.item24}`}>15:00H-16:30H</div>
       <div className={`${styles.grid_item} ${styles.item25}`}>1</div>
       <div className={`${styles.grid_item} ${styles.item26}`}>2</div>
       <div className={`${styles.grid_item} ${styles.item27}`}>3</div>
       <div className={`${styles.grid_item} ${styles.item28}`}>4</div>
       <div className={`${styles.grid_item} ${styles.item29}`}>5</div>
       <div className={`${styles.grid_item} ${styles.item30}`}>6</div>
       <div className={`${styles.grid_item} ${styles.item31}`}>7</div>
       <div className={`${styles.grid_item} ${styles.item32}`}>A/N Classes</div>
       <div className={`${styles.grid_item} ${styles.item33}`}>MON 08 May 23</div>
       <div className={`${styles.grid_item} ${styles.item34}`}>Adv RDBMS(T)</div>
       <div className={`${styles.grid_item} ${styles.item35}`}>Adv VAS(ITP)</div>
       <div className={`${styles.grid_item} ${styles.item36}`}>Introduction to DBMS, Advantage of DBMS over Files System, Various types of DBMS available in the market, Data Model of DBMS, Level of data abstraction, Entity Relationship Model & Entity</div>
       <div className={`${styles.grid_item} ${styles.item37}`}>Test for installation of online UPS, How to check the components like MOV, Fuse, Transistors, Diodes, MOSFETs, IGBTs, Transformers & Capacitors.</div>
       <div className={`${styles.grid_item} ${styles.item38}`}>HW Lab</div>
       <div className={`${styles.grid_item} ${styles.item39}`}>4/34</div>
       <div className={`${styles.grid_item} ${styles.item40}`}>Self Study</div>
       <div className={`${styles.grid_item} ${styles.item41}`}>STP</div>
       <div className={`${styles.grid_item} ${styles.item42}`}>HW Lab</div>
       <div className={`${styles.grid_item} ${styles.item43}`}>119/152</div>
       <div className={`${styles.grid_item} ${styles.item44}`}>HNS/NPY/HNS/SSG/AKT</div>
       <div className={`${styles.grid_item} ${styles.item45}`}>TUE 09 May 23</div>
       <div className={`${styles.grid_item} ${styles.item46}`}>Adv RDBMS(T)</div>
       <div className={`${styles.grid_item} ${styles.item47}`}>Adv VAS(ITP)</div>
       <div className={`${styles.grid_item} ${styles.item48}`}>Relationship Attributes, Relational Model, ER Diagram Representation, Generalization, Aggregation, Relational Model & Relational Model Concepts</div>
       <div className={`${styles.grid_item} ${styles.item49}`}>Checking of following, Inv card, Rectifiers Card, Control Card, Filter cards, Examine common faults in UPS & Reasons and preventive measures</div>
       <div className={`${styles.grid_item} ${styles.item50}`}>HW Lab</div>
       <div className={`${styles.grid_item} ${styles.item51}`}>8/34</div>
       <div className={`${styles.grid_item} ${styles.item53}`}>STP</div>
       <div className={`${styles.grid_item} ${styles.item54}`}>HW Lab</div>
       <div className={`${styles.grid_item} ${styles.item55}`}>122/152</div>
       <div className={`${styles.grid_item} ${styles.item56}`}>HS/NPY/HNS/SSG/AKT</div>
       <div className={`${styles.grid_item} ${styles.item57}`}>WED 10 May 23</div>
       <div className={`${styles.grid_item} ${styles.item58}`}>Adv RDBMS(T)</div>
       <div className={`${styles.grid_item} ${styles.item59}`}>Adv VAS(ITP)</div>
       <div className={`${styles.grid_item} ${styles.item60}`}>Data Definition Language (DDL), Data Manipulation Language (DML) & Basic Operators</div>
       <div className={`${styles.grid_item} ${styles.item61}`}>Practical: Troubleshooting on No Backup, Not switching to main supply, Charging circuit not working & UPS on but no output</div>
       <div className={`${styles.grid_item} ${styles.item62}`}>HW Lab</div>
       <div className={`${styles.grid_item} ${styles.item63}`}>12/34</div>
       <div className={`${styles.grid_item} ${styles.item64}`}>Half Day</div>
       <div className={`${styles.grid_item} ${styles.item665}`}>STP</div>
       <div className={`${styles.grid_item} ${styles.item66}`}>HW Lab</div>
       <div className={`${styles.grid_item} ${styles.item67}`}>125/152</div>
       <div className={`${styles.grid_item} ${styles.item68}`}>HS/NPY/HNS/SSG/AKT</div>
       <div className={`${styles.grid_item} ${styles.item69}`}>THU 11 May 23</div>
       <div className={`${styles.grid_item} ${styles.item70}`}>Adv RDBMS(T)</div>
       <div className={`${styles.grid_item} ${styles.item71}`}>Adv VAS(ITP)</div>
       <div className={`${styles.grid_item} ${styles.item72}`}>Additional operator & Functional Dependency</div>
       <div className={`${styles.grid_item} ${styles.item73}`}>MFD: Test for repair, replacement & discard policy of MFD. Echelon of Repair of the MFD & Practical on Test configuration and connectivity of latest MFDs</div>
       <div className={`${styles.grid_item} ${styles.item74}`}>HW Lab</div>
       <div className={`${styles.grid_item} ${styles.item75}`}>16/34</div>
       <div className={`${styles.grid_item} ${styles.item76}`}>Self Study</div>
       <div className={`${styles.grid_item} ${styles.item77}`}>STP</div>
       <div className={`${styles.grid_item} ${styles.item78}`}>HW Lab</div>
       <div className={`${styles.grid_item} ${styles.item79}`}>128/152</div>
       <div className={`${styles.grid_item} ${styles.item80}`}>HNS/NPY/HNS/SSG/AKT</div>
       <div className={`${styles.grid_item} ${styles.item81}`}>FRI 12 May 23</div>
       <div className={`${styles.grid_item} ${styles.item82}`}>Adv RDBMS(T & P)</div>
       <div className={`${styles.grid_item} ${styles.item83}`}>Adv IT Trg(E)</div>
       <div className={`${styles.grid_item} ${styles.item84}`}>Inference Rule, DBMS 1NF, 2NF, 3NF, 4NF, 5NF, SQL Server, Practical Installation of SQL, server, Practical on Installation procedure of SQL server in a system, Create Database in SQL, Drop Database in SQL, Backup Database in SQL & Practical on Create and Drop Database using the Designer tools and queries</div>
       <div className={`${styles.grid_item} ${styles.item85}`}>Theory exam on Adv IT Trg (E)</div>
       <div className={`${styles.grid_item} ${styles.item86}`}>HW Lab</div>
       <div className={`${styles.grid_item} ${styles.item87}`}>19/34, 1/59</div>
       <div className={`${styles.grid_item} ${styles.item89}`}>STP/BBR/SKS/NVN/SDS</div>
       <div className={`${styles.grid_item} ${styles.item90}`}>Exam Hall</div>
       <div className={`${styles.grid_item} ${styles.item91}`}>3/3</div>
       <div className={`${styles.grid_item} ${styles.item92}`}>NRB</div>
       <div className={`${styles.grid_item} ${styles.item93}`}>SAT 13 May 23</div>
       <div className={`${styles.grid_item} ${styles.item94}`}>Adv RDBMS(T & P)</div>
       <div className={`${styles.grid_item} ${styles.item95}`}>Adv VAS(ITP)</div>
       <div className={`${styles.grid_item} ${styles.item96}`}>Installation Procedure of SQL server in a system, Create Database in SQL, Drop Database in SQL & Backup Database in SQL</div>
       <div className={`${styles.grid_item} ${styles.item97}`}>Installation of driver of different type of latest MFDs, fault finding and troubleshooting procedure & common faults. Reasons and preventive maintenance</div>
       <div className={`${styles.grid_item} ${styles.item98}`}>HW Lab</div>
       <div className={`${styles.grid_item} ${styles.item99}`}>20/34, 4/59</div>
       <div className={`${styles.grid_item} ${styles.item100}`}>Half Day</div>
       <div className={`${styles.grid_item} ${styles.item101}`}>STP/BBR/SKS/NVN/SDS</div>
       <div className={`${styles.grid_item} ${styles.item102}`}>HW Lab</div>
       <div className={`${styles.grid_item} ${styles.item103}`}>131/152</div>
       <div className={`${styles.grid_item} ${styles.item104}`}>HS/NPY/HNS/SSG/AKT</div>
       <div className={`${styles.grid_item} ${styles.item105}`}></div>
       <div className={`${styles.grid_item} ${styles.item106}`}>Course offr: LtCol Harmeet Singh House Master</div>
       <div className={`${styles.grid_item} ${styles.item107}`}>INSTRUCTOR</div>
       <div className={`${styles.grid_item} ${styles.item108}`}>Theory</div>
       <div className={`${styles.grid_item} ${styles.item109}`}>Practical</div>
       <div className={`${styles.grid_item} ${styles.item110}`}>ITP</div>
       <div className={`${styles.grid_item} ${styles.item110}`}>Misc/Exam/Eve</div>
     </div>
  </div>
    

  
  );
};

export default TimeTable;
