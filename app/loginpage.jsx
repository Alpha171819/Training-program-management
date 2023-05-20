"use client"
import { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { push } = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (username === 'admin' && password === 'password') {

        push('/dashboard');
      // Perform any other necessary actions upon successful login

    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Login" className={styles.submitButton} />
      </form>
    </div>
  );
};

export default LoginPage;
