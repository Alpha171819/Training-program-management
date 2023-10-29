

"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../dashboard/page';
import { set } from 'date-fns';
import { ru } from 'date-fns/locale';
import { PieChart } from 'react-minimal-pie-chart';




const Piechart = () => {
  const [runningSubjectsID, setRunningSubjectsID] = useState ([]);
  console.log(" running subjects datassssssssssssssss ", runningSubjectsID);

    const [subjects, setSubjects] = useState([]);
    const [completedSubjects, setCompletedSubjects] = useState ([]);
    const [selectedSubject, setSelectedSubject] = useState('');

    var total_subjects=32;

    const [clickDisplay, setClickDisplay] = useState ([]);

    var uncompleted_subjects=runningSubjectsID.length;
    var completed_subjects=total_subjects-uncompleted_subjects -2;





    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    const clickDisplayORsubjects = clickDisplay.length ? clickDisplay : subjects;

//get the running subjects data
useEffect(() => {
    axios.get(`${url}/runningSubjects`).then((res) => {
     
      console.log(" running subjects data ", res.data);
      setRunningSubjectsID(res.data);
      console.log(" running subjects datassssssssssssssss ", runningSubjectsID);
    });
  }, [url]);
  useEffect(() => {
    axios.get(`${url}/completedSubjects`).then((res) => {
      console.log(" running subjects data ", res.data);
      setCompletedSubjects(res.data);
      console.log(" running subjects datassssssssssssssss ", completedSubjects);
    });
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
              setClickDisplay(runningSubjectsID);
              break;
            case 1:
              setClickDisplay(completedSubjects);
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
            value: uncompleted_subjects,
            color: "red",
          },
          {
            title: "Completed Subjects",
            value: completed_subjects,
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
                  <th>Subject Status</th>
                </tr>
              </thead>
              <tbody>
                {clickDisplayORsubjects.map((subject, idx) => (
                  <tr key={subject._id}>
                    <td>{subject.sub_name}</td>
                    <td>
                      {runningSubjectsID.includes(subject.sub_id) ? (
                        <span className="badge badge-danger">
                          Not Completed
                        </span>
                      ) : (
                        <span className="badge badge-success">Completed</span>
                      )}
                    </td>
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














