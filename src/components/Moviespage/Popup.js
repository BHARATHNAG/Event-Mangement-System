// Popup.js

import React from "react";
import styles from "./Popup.module.css";

const Popup = ({ message, onClose }) => {
  return (
    <div className={styles.popup}>
      <img
        src="https://media.istockphoto.com/id/1205148147/vector/checkmark-icon-check-mark-vector-isolated-illustration.jpg?s=612x612&w=0&k=20&c=OybmJBTh6t2B9N6B2k3vSPjcDFmqG9rFrRvTI42jKFA=" // Replace with the actual URL of your tick icon
        alt="Tick Icon"
        className={styles.tickIcon}
      />
      <p>{message}</p>
      <button className={styles.closeBtn} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Popup;
