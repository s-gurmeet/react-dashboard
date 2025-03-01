import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import RichTextEditor from "../components/RichTextEditor";
import Dashboard from "../components/Dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/user-form" element={<UserForm />} />
      <Route path="/rich-text-editor" element={<RichTextEditor />} />
    </Routes>
  );
};

export default AppRoutes;
