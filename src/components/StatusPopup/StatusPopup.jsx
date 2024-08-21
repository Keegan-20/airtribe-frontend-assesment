import React, { useState } from "react";
import "./StatusPopup.css";

const StatusPopup = ({ onAddStatus, onClose }) => {
  const [statusName, setStatusName] = useState("");

  const handleChange = (e) => {
    setStatusName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (statusName) {
      onAddStatus(statusName);
    }
  };

  return (
    <div className="popup_overlay" onClick={onClose}>
      <div className="popup_content" onClick={(e) => e.stopPropagation()}>
        <h2>Add New Status</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={statusName}
            onChange={handleChange}
            placeholder="Enter new status name"
            required
          />
          <button type="submit">Add Status</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default StatusPopup;
