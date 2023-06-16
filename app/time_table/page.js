"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios, { all } from "axios";
import Dashboard from "../dashboard/page";
import { ru } from "date-fns/locale";

// Example usage

const TimeTable = () => {
  const [instructors, setInstructors] = useState([]);

  const [course, setcourse] = useState([]);
  const [topics, setTopics] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [runningSubjectsID, setRunningSubjectsID] = useState([]);
  const [firstSubjectTopics, setFirstSubjectTopics] = useState([]);
  const [secondSubjectTopics, setSecondSubjectTopics] = useState([]);



  let count = 0;

  //create a get request to get the instructors data
  const {
    startOfWeek,
    differenceInWeeks,
    endOfWeek,
    format,

  } = require("date-fns");

  const getWeekNumber = (startDate, currentDate) => {
    const startOfWeekDate = startOfWeek(startDate);
    const weeksDifference = differenceInWeeks(currentDate, startOfWeekDate);
    return weeksDifference + 1; // Adding 1 to make the week numbers start from 1
  };

  // get the dates between two dates
  const getDates = (startDate, endDate) => {
    let dates = [];
    // check the startDate and endDate data type
    if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
      return dates;
    }
    //to avoid modifying the original date
    const theDate = new Date(startDate);
    while (theDate < endDate) {
      dates = [...dates, new Date(theDate)];
      theDate.setDate(theDate.getDate() + 1);
    }
    dates = [...dates, endDate];
    return dates;
  };

  

  const currentDate = new Date(); // Today
  const dates = getDates(
    startOfWeek(currentDate, { weekStartsOn: 1 }),
    endOfWeek(currentDate)
  );
  const formattedWeekDates = dates.map((date) => format(date, "EEE dd LLL yy"));
  console.log(formattedWeekDates);

  console.log(dates);

  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  useEffect(() => {
    axios.get(`${url}/courses`).then((res) => {
      setcourse(res.data);
      console.log(" course data ", res.data);
    });
  }, [url]);

  useEffect(() => {
    axios.get(`${url}/instructors`).then((res) => {
      setInstructors(res.data);
      console.log("TTI data is ", res.data);
    });
  }, [url]);

  useEffect(() => {
    axios.get(`${url}/runningSubjects`).then((res) => {
      setRunningSubjectsID(res.data);
      console.log(" running subjects data ", res.data);
    });
  }, [url]);

  useEffect(() => {
    // fetch the topics for the first subject
    if (runningSubjectsID.length === 0) return;
    axios
      .get(`${url}/getSixDayTopics/${runningSubjectsID[0]?.sub_id}`)
      .then((res) => {
        setFirstSubjectTopics(res.data);
        console.log("first subject topicsso", res.data);
      });
    axios
      .get(`${url}/getSixDayTopics/${runningSubjectsID[1]?.sub_id}`)
      .then((res) => {
        setSecondSubjectTopics(res.data);
        console.log("second subject topicsso", res.data);
      });
  }, [url, runningSubjectsID]);

  useEffect(() => {
    const refTopics = [];
    runningSubjectsID.forEach((subject) => {
      refTopics.push(axios.get(`${url}/topicReference/${subject.sub_id}`));
    });
    const realTopics = [];
    axios.all(refTopics).then(
      axios.spread((...allData) => {
        allData.forEach((data) => {
          realTopics.push(data.data);
        });
        setTopics(realTopics);
      })
    );
  }, [url, runningSubjectsID]);

  console.log("topics", topics);
  useEffect(() => {
    if (runningSubjectsID.length === 0) return;
    const getSubjectDetails = () => {
      const sub1 = axios.get(`${url}/subjects/${runningSubjectsID[0]?.sub_id}`);
      const sub2 = axios.get(`${url}/subjects/${runningSubjectsID[1]?.sub_id}`);
      axios.all([sub1, sub2]).then(
        axios.spread((...allData) => {
          const allData1 = allData[0];
          const allData2 = allData[1];
          console.log("allData1", allData1);
          console.log("allData2", allData2);

          setSubjects([allData1.data[0], allData2.data[0]]);
        })
      );
    };

    getSubjectDetails();
    // console.log("subjects", subjects);
  }, [runningSubjectsID, url]);

  console.log("subjects", subjects);

  const startDate = new Date(course[0]?.start_date); // start date

  const weekNumber = getWeekNumber(startDate, currentDate);
  console.log(weekNumber); // Output: 23

  const endOfWeekDate = endOfWeek(currentDate);

  useEffect(() => {
    if (topics.length === 0) return;
    console.log(topics);
    console.log("first topic", topics[0][count]?.learning_obj);
    console.log(
      "LD, Theory, ITP",
      topics[0][count]?.LD,
      topics[0][count]?.theory_cnt,
      topics[0][count]?.itp_cnt
    );
  }, [count, topics]);

  if (
    subjects.length === 0 ||
    firstSubjectTopics.length === 0 ||
    secondSubjectTopics.length === 0
  )
    return <div className={styles.loading}>Loading...</div>;
  return (
    <div className={styles.body}>
      <Dashboard />
      <div className={styles.grid_container}>
        <div className={`${styles.grid_item} ${styles.item1}`}>
          <b>
            <u>FACULTY OF ELECTRONICS</u>
          </b>
        </div>
        <div className={`${styles.grid_item} ${styles.item2}`}>Weekly</div>
        <div className={`${styles.grid_item} ${styles.item3}`}>
          <u>TPG PGME: COURSE SER NO: {course[0]?.course_name}</u>
        </div>
        <div className={`${styles.grid_item} ${styles.item4}`}>
          Course Strength
        </div>
        <div className={`${styles.grid_item} ${styles.item5}`}>27</div>
        <div className={`${styles.grid_item} ${styles.item6}`}>Week Ending</div>
        <div className={`${styles.grid_item} ${styles.item7}`}>
          {format(new Date(endOfWeekDate), "dd-MMM-yyyy")}
        </div>
        <div className={`${styles.grid_item} ${styles.item8}`}>
          <u>
            (Semester: From {new Date(course[0]?.start_date).toDateString()} to{" "}
            {new Date(course[0]?.end_date).toDateString()})
          </u>
        </div>
        <div className={`${styles.grid_item} ${styles.item9}`}>
          Commenced On
        </div>
        <div className={`${styles.grid_item} ${styles.item10}`}>28-Sept-23</div>
        <div className={`${styles.grid_item} ${styles.item11}`}>
          Week Running
        </div>
        <div className={`${styles.grid_item} ${styles.item12}`}>
          Week {weekNumber}
        </div>
        <div className={`${styles.grid_item} ${styles.item13}`}>
          <u>(TEA BREAK : 10:55 TO 11:20 Hrs)</u>
        </div>
        <div className={`${styles.grid_item} ${styles.item14}`}>
          Termination on
        </div>
        <div className={`${styles.grid_item} ${styles.item15}`}>21-Nov-23</div>
        <div className={`${styles.grid_item} ${styles.item16}`}>Day & Date</div>
        <div className={`${styles.grid_item} ${styles.item17}`}>
          08:00H-08:40H
        </div>
        <div className={`${styles.grid_item} ${styles.item18}`}>
          08:40H-09:25H
        </div>
        <div className={`${styles.grid_item} ${styles.item19}`}>
          09:30H-10:10H
        </div>
        <div className={`${styles.grid_item} ${styles.item20}`}>
          10:15H-10:55H
        </div>
        <div className={`${styles.grid_item} ${styles.item21}`}>
          11:20H-12:40H
        </div>
        <div className={`${styles.grid_item} ${styles.item22}`}>
          12:05H-12:45H
        </div>
        <div className={`${styles.grid_item} ${styles.item23}`}>
          12:50H-13:30H
        </div>
        <div className={`${styles.grid_item} ${styles.item24}`}>
          15:00H-16:30H
        </div>
        <div className={`${styles.grid_item} ${styles.item25}`}>1</div>
        <div className={`${styles.grid_item} ${styles.item26}`}>2</div>
        <div className={`${styles.grid_item} ${styles.item27}`}>3</div>
        <div className={`${styles.grid_item} ${styles.item28}`}>4</div>
        <div className={`${styles.grid_item} ${styles.item29}`}>5</div>
        <div className={`${styles.grid_item} ${styles.item30}`}>6</div>
        <div className={`${styles.grid_item} ${styles.item31}`}>7</div>
        <div className={`${styles.grid_item} ${styles.item32}`}>
          A/N Classes
        </div>
        <div className={`${styles.grid_item} ${styles.item33}`}>
          {formattedWeekDates[0]}
        </div>
        <div className={`${styles.grid_item} ${styles.item34}`}>
          {subjects[0]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item35}`}>
          {subjects[1]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item36}`}>
          {firstSubjectTopics[0].map((topic, idx) => {
            console.log(topic);
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}
        </div>
        <div className={`${styles.grid_item} ${styles.item37}`}>
        {secondSubjectTopics[0]?.map((topic, idx) => {
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}
        </div>
        <div className={`${styles.grid_item} ${styles.item38}`}>{subjects[0].room_name}</div>
        <div className={`${styles.grid_item} ${styles.item39}`}>4/34</div>
        <div className={`${styles.grid_item} ${styles.item40}`}>Self Study</div>
        <div className={`${styles.grid_item} ${styles.item41}`}>

         
             <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select>
            
         
       

        </div>
        <div className={`${styles.grid_item} ${styles.item42}`}>HW Lab</div>
        <div className={`${styles.grid_item} ${styles.item43}`}>119/152</div>
        <div className={`${styles.grid_item} ${styles.item44}`}>
        <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select>
        </div>
        <div className={`${styles.grid_item} ${styles.item45}`}>
          {formattedWeekDates[1]}
        </div>
        <div className={`${styles.grid_item} ${styles.item46}`}>
          {subjects[0]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item47}`}>
          {subjects[1]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item48}`}>
          {firstSubjectTopics[1].map((topic, idx) => {
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}
        </div>
        <div className={`${styles.grid_item} ${styles.item49}`}>
        {secondSubjectTopics[1]?.map((topic, idx) => {
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}
        </div>
        <div className={`${styles.grid_item} ${styles.item50}`}>{subjects[0].room_name}</div>
        <div className={`${styles.grid_item} ${styles.item51}`}>8/34</div>
        <div className={`${styles.grid_item} ${styles.item53}`}>  <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select></div>
        <div className={`${styles.grid_item} ${styles.item54}`}>HW Lab</div>
        <div className={`${styles.grid_item} ${styles.item55}`}>122/152</div>
        <div className={`${styles.grid_item} ${styles.item56}`}>
        <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select>
        </div>
        <div className={`${styles.grid_item} ${styles.item57}`}>
          {formattedWeekDates[2]}
        </div>
        <div className={`${styles.grid_item} ${styles.item58}`}>
          {subjects[0]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item59}`}>
          {subjects[1]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item60}`}>
          {firstSubjectTopics[2].map((topic, idx) => {
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}
        </div>
        <div className={`${styles.grid_item} ${styles.item61}`}>
        {secondSubjectTopics[2]?.map((topic, idx) => {
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}
        </div>
        <div className={`${styles.grid_item} ${styles.item62}`}>{subjects[0].room_name}</div>
        <div className={`${styles.grid_item} ${styles.item63}`}>12/34</div>
        <div className={`${styles.grid_item} ${styles.item64}`}>Half Day</div>
        <div className={`${styles.grid_item} ${styles.item665}`}>  <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select></div>
        <div className={`${styles.grid_item} ${styles.item66}`}>HW Lab</div>
        <div className={`${styles.grid_item} ${styles.item67}`}>125/152</div>
        <div className={`${styles.grid_item} ${styles.item68}`}>
        <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select>
        </div>
        <div className={`${styles.grid_item} ${styles.item69}`}>
          {formattedWeekDates[3]}
        </div>
        <div className={`${styles.grid_item} ${styles.item70}`}>
          {subjects[0]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item71}`}>
          {subjects[1]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item72}`}>
          {firstSubjectTopics[3].map((topic, idx) => {
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}
        </div>
        <div className={`${styles.grid_item} ${styles.item73}`}>
        {secondSubjectTopics[3]?.map((topic, idx) => {
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}
        </div>
        <div className={`${styles.grid_item} ${styles.item74}`}>{subjects[0].room_name}</div>
        <div className={`${styles.grid_item} ${styles.item75}`}>16/34</div>
        <div className={`${styles.grid_item} ${styles.item76}`}>Self Study</div>
        <div className={`${styles.grid_item} ${styles.item77}`}>  <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select></div>
        <div className={`${styles.grid_item} ${styles.item78}`}>{subjects[1]?.room_name}</div>
        <div className={`${styles.grid_item} ${styles.item79}`}>128/152</div>
        <div className={`${styles.grid_item} ${styles.item80}`}>
        <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select>
        </div>
        <div className={`${styles.grid_item} ${styles.item81}`}>
          {formattedWeekDates[4]}
        </div>
        <div className={`${styles.grid_item} ${styles.item82}`}>
          {subjects[0]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item83}`}>
          {subjects[1]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item84}`}>
          {firstSubjectTopics[4].map((topic, idx) => {
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}
        </div>
        <div className={`${styles.grid_item} ${styles.item85}`}>
        {secondSubjectTopics[4]?.map((topic, idx) => {
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}
        </div>
        <div className={`${styles.grid_item} ${styles.item86}`}>{subjects[0].room_name}</div>
        <div className={`${styles.grid_item} ${styles.item87}`}>
          19/34, 1/59
        </div>
        <div className={`${styles.grid_item} ${styles.item89}`}>
        <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select>
        </div>
        <div className={`${styles.grid_item} ${styles.item90}`}>Exam Hall</div>
        <div className={`${styles.grid_item} ${styles.item91}`}>3/3</div>
        <div className={`${styles.grid_item} ${styles.item92}`}>  <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select></div>
        <div className={`${styles.grid_item} ${styles.item93}`}>
          {formattedWeekDates[5]}
        </div>
        <div className={`${styles.grid_item} ${styles.item94}`}>
          {subjects[0]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item95}`}>
          {subjects[1]?.sub_name}
        </div>
        <div className={`${styles.grid_item} ${styles.item96}`}>
          {firstSubjectTopics[5]?.map((topic, idx) => {
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}
        </div>
        <div className={`${styles.grid_item} ${styles.item97}`}>
        {secondSubjectTopics[5]?.map((topic, idx) => {
            return (
              <p key={topic.id} className={styles.smallText}>
                {topic.topic}
              </p>
            );
          })}

        </div>
        <div className={`${styles.grid_item} ${styles.item98}`}>{subjects[0].room_name}</div>
        <div className={`${styles.grid_item} ${styles.item99}`}>
          20/34, 4/59
        </div>
        <div className={`${styles.grid_item} ${styles.item100}`}>Half Day</div>
        <div className={`${styles.grid_item} ${styles.item101}`}>
        <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select>
        </div>
        <div className={`${styles.grid_item} ${styles.item102}`}>HW Lab</div>
        <div className={`${styles.grid_item} ${styles.item103}`}>131/152</div>
        <div className={`${styles.grid_item} ${styles.item104}`}>
        <select>
              { instructors.map((instructor) => {
                return(
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
              )
              } )}
              </select>
        </div>
        <div className={`${styles.grid_item} ${styles.item105}`}></div>
        <div className={`${styles.grid_item} ${styles.item106}`}>
          Course offficer : {course[0]?.course_officer}
        </div>
        <div className={`${styles.grid_item} ${styles.item107}`}>
          INSTRUCTOR
        </div>
        <div className={`${styles.grid_item} ${styles.item108}`}>Theory</div>
        <div className={`${styles.grid_item} ${styles.item109}`}>Practical</div>
        <div className={`${styles.grid_item} ${styles.item110}`}>ITP</div>
        <div className={`${styles.grid_item} ${styles.item110}`}>
          Misc/Exam/Eve
        </div>
      </div>
      <button className={styles.centerButton}>
        Save TimeTable for {new Date().toLocaleDateString()}
      </button>
    </div>
  );
};

export default TimeTable;
