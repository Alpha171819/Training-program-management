"use client"
import styles from './Dashboard.module.css';


const Dashboard = () => {



  
  return (
    <>

      <nav className={styles.nav}>

   
        <ol className={styles.navList}>
          <li><a href="/Dashboard_body">Home</a></li>
<<<<<<< Updated upstream
          <li><a href="/addNotification">Notification</a></li>
=======
          <li><a href="/Notifications">Notification</a></li>
>>>>>>> Stashed changes
          <li className={styles.training}>
            <a href="#">Instructors</a>
            <ol className={styles.subList}>
              <li><a href="/AddTTI">Add TTI</a></li>
              <li><a href="ViewTTI">View TTI</a></li>
            </ol>
          </li>
          <li className={styles.training}>
            <a href="#">Subjects</a>
            <ol className={styles.subList}>
              <li><a href="/addsubject">Add Subjects</a></li>
              <li><a href="/view_subjects">View Subjects</a></li>
            </ol>
          </li>
          <li className={styles.training}>
            <a href="#">Course</a>
            <ol className={styles.subList}>
            <li><a href="/addcourse">Add Course</a></li>
              <li><a href="/view_courses">View Course</a></li>
            </ol>
          </li>

          <li className={styles.training}>
            <a href="#">Topics</a>
            <ol className={styles.subList}>
            <li><a href="/topics">Add Topics</a></li>
              <li><a href="/displayTopics">View Topics</a></li>
            </ol>
          </li>

          <li className={styles.training}>
            <a href="/time_table">Time Table</a>
          </li>
         
        </ol>
      </nav>

    </>
  );
};

export default Dashboard;
