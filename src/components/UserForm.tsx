import React, { useState, useEffect } from "react";
import { TextField, Button, Alert } from "@mui/material";
import "../styles/UserForm.css";  


const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", address: "", email: "", phone: "" });
  const [userId, setUserId] = useState<string>("");
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);

  useEffect(() => {
    const userIdGenerated = Math.random().toString(36).substring(7);
    setUserId(userIdGenerated);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUnsavedChanges(true);
  };

  const handleSubmit = () => {
    localStorage.setItem(userId, JSON.stringify(formData));
    setUnsavedChanges(false);
  };

  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (unsavedChanges) {
      e.preventDefault();
      e.returnValue = "";
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);

  return (
    <div className="form-container">
      {unsavedChanges && <Alert severity="warning">You have unsaved changes!</Alert>}
      <h1>User Form</h1>
      <TextField
        label="Name"
        name="name"
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Address"
        name="address"
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Email"
        name="email"
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      <TextField
        label="Phone"
        name="phone"
        onChange={handleChange}
        fullWidth
        variant="outlined"
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
      >
        Submit
      </Button>
    </div>
  );
};

export default UserForm;
