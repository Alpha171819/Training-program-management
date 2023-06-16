"use client"
import { useState } from 'react';
import styles from './page.module.css';




const LoginPage = () =>{

  const [buttonPosition, setButtonPosition] = useState(0);
  const [buttonPosition1, setButtonPosition1] = useState(0);

  function mouseOver() {
    const email = document.forms['suForm']['email'].value;
    const pass = document.forms['suForm']['pass'].value;
  
  

    if (email === 'shivashankarvaraprasad17@gmail.com') {
      if ((email !== 'shivashankarvaraprasad17@gmail.com' || pass !== '12345678910') && buttonPosition1 === 0) {
        buttonMoveLeft();
        setButtonPosition1(1);
        return false;
      }

      if ((email !== 'shivashankarvaraprasad17@gmail.com' || pass !== '12345678910') && buttonPosition1 === 1) {
        buttonMoveRight();
        setButtonPosition1(2);
        return false;
      }

      if ((email !== 'shivashankarvaraprasad17@gmail.com' || pass !== '12345678910') && buttonPosition1 === 2) {
        buttonMoveLeft();
        setButtonPosition1(1);
        return false;
      } else {
        document.getElementById('submit_btn').style.cursor = 'pointer';
        var x = { ao: 1 };
        // Handle AJAX call using Next.js built-in fetch or Axios library
        fetch('/adminlogin/verify', { method: 'GET', body: JSON.stringify(x) })
          .then(() => {
            console.log('Done sending ao details');
          })
          .catch(() => {
            console.log('Error while sending ao details to backend');
          });
      }

      return;
    }

    if ((email !== 'shivashankarvaraprasad1718@gmail.com' || pass !== '123456789') && buttonPosition === 0) {
      buttonMoveLeft();
      setButtonPosition(1);
      return false;
    }

    if ((email !== 'shivashankarvaraprasad1718@gmail.com' || pass !== '123456789') && buttonPosition === 1) {
      buttonMoveRight();
      setButtonPosition(2);
      return false;
    }

    if ((email !== 'shivashankarvaraprasad1718@gmail.com' || pass !== '123456789') && buttonPosition === 2) {
      buttonMoveLeft();
      setButtonPosition(1);
      return false;
    } else {
      document.getElementById('submit_btn').style.cursor = 'pointer';
      // Handle AJAX call using Next.js built-in fetch or Axios library
      fetch('/adminlogin/verify', { method: 'POST', body: {} })
        .then(() => {
          console.log('Data deleted ao details');
        })
        .catch(() => {
          console.log('Error while deleting ao details to backend');
        });
    }
  }

  function buttonMoveLeft() {
    const button = document.getElementById('submit_btn');
    button.style.transform = 'translateX(-210%)';
  }

  function buttonMoveRight() {
    const button = document.getElementById('submit_btn');
    button.style.transform = 'translateX(0%)';
  }

  function resetBtn() {
    const button = document.getElementById('submit_btn');
    button.style.transform = 'translateX(0%)';
  }

  return (
    <div className={styles.signup_box}>
      <img src="32350201_1708164459262769_5233568463657631744_n.jpg" alt="Logo" />

      <form action="index.html" name="suForm" id="supform">
        <input type="text" placeholder="Email" id="email" onClick={resetBtn} />
        <input type="password" placeholder="Password" id="pass" onClick={resetBtn} minLength="8" />
        <input type="submit" id="submit_btn" value="Login"  onMouseOver={mouseOver} />
      </form>
    </div>
  );
}




export default LoginPage;
