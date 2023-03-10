/* import {DatePicker} from 'antd';
function App() {
  return (
    <div> <DatePicker /> </div>
    
  );
}

export default App;
 */

import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Typography, Space } from "antd";
import axios from "axios";
import MyCard from "./Components/MyCard";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import {FaHome} from "react-icons/fa";

const { Title } = Typography;

function App() {
  const [blogs, setBlogs] = useState(null);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setBlogs(response.data);
        setStatus(true);
      })
      .catch(() => {
        console.log("API call Failed...!!!");
        setStatus(false);
      });
  }, []);

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Row gutter={16}>
        <Col className="gutter-row">
          <Title>E - Commerce Website</Title>
        </Col>
      </Row>
      <Divider orientation="center">Navigation</Divider>

<Row>
  <nav>
    <Link to="/home"><FaHome /> Home </Link> |{" "}
    <Link to="/profile">Profile </Link>
  </nav>
      <Divider orientation="center">Items</Divider>

      <Row gutter={16}>
        {status &&
          blogs.map((blogObj) => {
            return (
              <MyCard
                key={blogObj.id}
                title={blogObj.title}
                content={blogObj.body}
              />
            );
          })}
      </Row>

      </Row>
      <Divider orientation="center">Page</Divider>
      <Row>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Row>
    </Space>
  );
}

export default App;