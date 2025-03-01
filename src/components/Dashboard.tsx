import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../styles/Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <div className="button-container">
        <Link to="/counter" className="button-link">
          <Button variant="contained" color="primary">Go to Counter</Button>
        </Link>
        <Link to="/user-form" className="button-link">
          <Button variant="contained" color="secondary">Go to User Form</Button>
        </Link>
        <Link to="/rich-text-editor" className="button-link">
          <Button variant="contained" color="success">Go to Rich Text Editor</Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
