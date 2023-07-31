// DeleteEventModal.js

import React from "react";
import styles from "./DeleteEventModal.module.css"; // Replace with the CSS styles for the modal

const DeleteEventModal = ({ eventId, onCancel, onDelete }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <h2>Are you sure you want to delete this event?</h2>
        <div className={styles.buttonsContainer}>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={() => onDelete(eventId)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEventModal;
