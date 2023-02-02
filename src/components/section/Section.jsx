import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import styles from "./section.module.css";

const Section = () => {
  const [count, setCount] = useReducer((prev, next) => Math.min(next, 10), 0);
  return (
    <div className={styles.container}>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      <Link to="/axios">Axios</Link>
    </div>
  );
};

export default Section;
