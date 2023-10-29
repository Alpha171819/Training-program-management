

"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../dashboard/page';
import { set } from 'date-fns';
import { ru } from 'date-fns/locale';
import { PieChart } from 'react-minimal-pie-chart';




const Piechart = () => {
const[completed_subjects, setCompletedSubjects] = useState([]);
const[uncompleted_subjects, setUncompletedSubjects] = useState([]);
const[running_subjects, setRunningSubjects] = useState([]);

    const [subjects, setSubjects] = useState([]);

    var total_subjects=subjects.length;

    const [clickDisplay, setClickDisplay] = useState ([]);

    var uncompleted_subjects_len=uncompleted_subjects.length;
    var completed_subjects_len=completed_subjects.length;
    
    





    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    const clickDisplayORsubjects = clickDisplay.length ? clickDisplay :[];

    // get completed subjects data
    useEffect(() => {
        axios.get(`${url}/completedSubjects`)
        .then((res) => {console.log(" completed subjects datassssssssssssssss ", res.data)
        setCompletedSubjects (res.data)
        })
    }, [url]);

    // get uncompleted subjects data
    useEffect(() => {
        axios.get(`${url}/uncompletedSubjects`)
        .then((res) => {console.log(" uncompleted subjects datassssssssssssssss ", res.data)
        setUncompletedSubjects (res.data)
        setRunningSubjects (res.data.slice(0,2))
        })
    }, [url]);

  // get subjects data
  useEffect(() => {
    axios.get(`${url}/subjects`).then((res) => {
      console.log(" subjects data ", res.data);
      setSubjects(res.data);
    });
  }, [url]);


  return (
    <div>
      <Dashboard />
      <center>
        {" "}
        <h1>Subjects Completion Status of DEE (NW)</h1>
      </center>
      <PieChart
        style={{ height: "400px" }}
        onClick={(event, index) => {
          switch (index) {
            case 0:
              setClickDisplay(uncompleted_subjects);
              break;
            case 1:
              setClickDisplay(completed_subjects);
              break;
            case 2:
              setClickDisplay(running_subjects);
              break;
            default:
              break;
          }
          console.log("index", index);
        }}
        labelStyle={{ fontSize: "4px" }}
        label={({ dataEntry }) => dataEntry.title + " " + dataEntry.value}
        data={[
          {
            title: "UnCompleted Subjects",
            value: uncompleted_subjects_len,
            color: "red",
          },
          {
            title: "Completed Subjects",
            value: completed_subjects_len,
            color: "green",
          },
          { title: "Running Subjects", value: 2, color: "orange" },
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Subject Name</th>
                </tr>
              </thead>
              <tbody>
                {clickDisplayORsubjects.map((subject, idx) => (
                  <tr key={subject._id}>
                    <td>{subject.sub_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piechart;














