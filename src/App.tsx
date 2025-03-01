import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/rich-text-editor" element={<RichTextEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
