import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.modules.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear the authentication token from localStorage
    localStorage.removeItem("token");
    // Redirect to the login page after logout
    navigate("/login");
  };

  return (
    <div className={styles.logoutContainer}>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
