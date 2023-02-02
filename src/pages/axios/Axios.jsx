import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./axios.module.css";
import axios from "axios";

const Axios = () => {
  const [showGet, setShowGet] = useState(null);
  // Function get request here

  const handleGet = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/4", {
        params: { _limit: 5 },
      })
      .then((res) => setShowGet(res))
      .catch((err) => console.log(err));
  };
  const handlePost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
            title: 'New List',
            body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ratione deleniti vitae animi sunt repellendus mollitia numquam corrupti suscipit consectetur.'
      })
      .then((res) => setShowGet(res))
      .catch((err) => console.log(err));
  };
  const handleDelete = () => {
    axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((res)=> setShowGet(res))
    .catch((err)=> console.log(err))
  };
  const handleRequest = () => {
    console.log("Request all handles");
  };
  return (
    <>
      <Container className={styles.axios_container}>
        <Row className={styles.heading}>
          <Col>
            <h2>Axios Crash Course</h2>
          </Col>
        </Row>
        <div className={styles.axios_btn}>
          <button onClick={handleGet} className={styles.get_button}>
            Get
          </button>
          <button onClick={handlePost} className={styles.post_button}>
            Post
          </button>
          <button onClick={handleRequest} className={styles.put_button}>
            Put/Patch
          </button>
          <button onClick={handleDelete} className={styles.delete_button}>
            Delete
          </button>
        </div>
        <Row className={styles.display_row}>
          <Col>
            {showGet ? (
              <>
                <h5>Title</h5>
                <h3>{showGet.data.title}</h3>
                <p>Section</p>
                <h3>{showGet.data.body}</h3>
                <p>User Identity</p>
                <h3>{showGet.data.userId}</h3>
              </>
            ) : (
              <p>Get data to display</p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Axios;
