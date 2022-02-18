import React from "react";
import Layout from "./shared/Layout";
import { Link } from "react-router-dom";

const NotFoud = () => {
  const style = {
    fontWeight: "bold",
    textAlign: "center",
  };
  const notfound = {
    textDecoration: "none",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    color: "teal",
    fontSize: "1.5rem",
    border: "1px solid teal",
    width: "30% ",
    margin: "auto",
  };

  return (
    <Layout>
      <h3 style={style}> Page Not Found!</h3>
      <Link to="/" style={notfound}>
        Back to Home Page
      </Link>
    </Layout>
  );
};

export default NotFoud;
