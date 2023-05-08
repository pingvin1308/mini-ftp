import React, { useState } from "react";
import ApiService from "../services/apiService";

interface ComponentProps {
  name?: string;
}

const FilesPage: React.FC<ComponentProps> = (props) => {

  const [files, setFiles] = useState<string[]>([]);

  const getFiles = async () => {
    var files = await ApiService.getInstance().getFiles();
    setFiles(files);
  };

  return (
    <>
      <div>FilesPage</div>
      <button onClick={getFiles}>Get Files</button>

      <ul>
        {files.map((file) => (<li>{file}</li>))}
      </ul>
    </>
  );
};

export default FilesPage;
