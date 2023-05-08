import React from "react";

const Header: React.FC = (props) => {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Files</a>
        </li>
        <li>
          <a href="/fileUpload">File Upload</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
