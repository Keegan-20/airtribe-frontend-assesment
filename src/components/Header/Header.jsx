import React, { useState } from "react";
import { Plus } from "lucide-react";
import "./Header.css";
import StatusPopup from "../StatusPopup/StatusPopup";

const Header = ({ onAddColumn }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleAddColumn = () => {
    setPopupOpen(true); // Show the popup
  };

  const handleClosePopup = () => {
    setPopupOpen(false); // Hide the popup
  };

  const handleAddStatus = (statusName) => {
    onAddColumn(statusName); // Pass the new status name to the parent
    handleClosePopup(); 
  };

  return (
    <header className="header">
      <h1 className="header_title">Modern Task Manager</h1>
      <button className="add_column_button" onClick={handleAddColumn}>
        <Plus /> Add Task Column
      </button>
      {isPopupOpen && (
        <StatusPopup
          onAddStatus={handleAddStatus}
          onClose={handleClosePopup}
        />
      )}
    </header>
  );
};

export default Header;
