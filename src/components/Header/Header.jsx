import React from "react";
import { Plus } from "lucide-react";
import "./Header.css";

const Header = ({ onAddColumn }) => {
  return (
    <header className="header">
      <h1 className="header_title">Modern Task Manager</h1>
      <button className="add_column_button" onClick={onAddColumn}>
        <Plus /> Add Task Column
      </button>
    </header>
  );
};

export default Header;
