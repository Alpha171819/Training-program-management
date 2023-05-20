"use client"
import { useState } from 'react';
import styles from './AddCourse.module.css';


const AddCoursePage = () => {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [numberOfSubjects, setNumberOfSubjects] = useState('');
  const [subjectNames, setSubjectNames] = useState('');
  const [numberOfPeriods, setNumberOfPeriods] = useState('');
  const [theoryCount, setTheoryCount] = useState('');
  const [practicalCount, setPracticalCount] = useState('');
  const [numberOfStudents, setNumberOfStudents] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [duration, setDuration] = useState('');
  const [courseOfficer, setCourseOfficer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary actions with the entered course details
    // For example, send a request to a backend API to save the course details

    // Reset the form fields
    setCourseId('');
    setCourseName('');
    setNumberOfSubjects('');
    setSubjectNames('');
    setNumberOfPeriods('');
    setTheoryCount('');
    setPracticalCount('');
    setNumberOfStudents('');
    setStartDate('');
    setEndDate('');
    setDuration('');
    setCourseOfficer('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Course</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="courseId" className={styles.label}>Course ID:</label>
        <input
          type="text"
          id="courseId"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="courseName" className={styles.label}>Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="numberOfSubjects" className={styles.label}>Number of Subjects:</label>
        <input
          type="number"
          id="numberOfSubjects"
          value={numberOfSubjects}
          onChange={(e) => setNumberOfSubjects(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="subjectNames" className={styles.label}>Subject Names:</label>
        <input
          type="text"
          id="subjectNames"
          value={subjectNames}
          onChange={(e) => setSubjectNames(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="numberOfPeriods" className={styles.label}>Number of Periods:</label>
        <input
          type="number"
          id="numberOfPeriods"
          value={numberOfPeriods}
          onChange={(e) => setNumberOfPeriods(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="theoryCount" className={styles.label}>Theory Count:</label>
        <input
          type="number"
          id="theoryCount"
          value={theoryCount}
          onChange={(e) => setTheoryCount(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="practicalCount" className={styles.label}>Practical Count:</label>
        <input
          type="number"
          id="practicalCount"
          value={practicalCount}
          onChange={(e) => setPracticalCount(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="numberOfStudents" className={styles.label}>Number of Students:</label>
        <input
          type="number"
          id="numberOfStudents"
          value={numberOfStudents}
          onChange={(e) => setNumberOfStudents(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="startDate" className={styles.label}>Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="endDate" className={styles.label}>End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
          className={styles.input}
        />
  
        <label htmlFor="duration" className={styles.label}>Duration:</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          className={styles.input}
        />
  





<label htmlFor="duration" className={styles.label}>Duration:</label>
<input
  type="text"
  id="duration"
  value={duration}
  onChange={(e) => setDuration(e.target.value)}
  required
  className={styles.input}
/>

<label htmlFor="courseOfficer" className={styles.label}>Course Officer:</label>
<input
  type="text"
  id="courseOfficer"
  value={courseOfficer}
  onChange={(e) => setCourseOfficer(e.target.value)}
  required
  className={styles.input}
/>

<input type="submit" value="Submit" className={styles.submitButton} />
</form>
</div>
);



};

export default AddCoursePage;
