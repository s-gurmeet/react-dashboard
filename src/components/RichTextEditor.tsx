import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "../styles/RichTextEditor.css";

const RichTextEditor: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>("");

  return (
    <div className="editor-container">
      <Editor
        initialValue="<p>Start typing here...</p>"
        apiKey="tkz7274d69pas5bahfi05oluryite0mfml110kut1u5soaoz"
        onEditorChange={(content) => setEditorContent(content)}
        init={{
          height: 400,
          menubar: false,
          plugins: "lists",
          toolbar: "bold italic underline | bullist numlist",
        }}
      />
      <div className="editor-content">
        <h3>Content Preview:</h3>
        <div>{editorContent}</div>
      </div>
    </div>
  );
};

export default RichTextEditor;
