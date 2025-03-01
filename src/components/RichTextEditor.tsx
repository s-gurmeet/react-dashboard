import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "../styles/RichTextEditor.css";

const RichTextEditor: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>("");

  return (
    <div className="editor-container">
      <Editor
        initialValue="<p>Start typing here...</p>"
        apiKey="99bbyec6xuggu6q96pc9eoet1relaui3ewcrrqt8yfvsrety"
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
