"use client"
import styles from './Dashboard.module.css';


const Dashboard = () => {



  
  return (
    <>

      <nav className={styles.nav}>

   
        <ol className={styles.navList}>
          <li><a href="/Dashboard_body">Home</a></li>
          <li><a href="#">Notification</a>
          <ol className={styles.subList}>
              <li><a href="/addNotification">Add Notifications</a></li>
              <li><a href="/viewNotifications">View Notifications</a></li>
            </ol>
          </li>

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
              <li><a href="/selectsubjectfortopic">View Topics</a></li>
            </ol>
          </li>

          <li className={styles.training}>
            <a href="/courseselectfortt">Time Table</a>
          </li>
         
        </ol>
      </nav>

    </>
  );
};

export default Dashboard;
