import React, { useState } from "react";
import axios from "axios";
import styles from "./AdminHome.module.css";
import Logout from "./logout";

import createEventIcon from "./create event.png";
import deleteEventIcon from "./delete event.jpg";

const AdminHome = () => {
  const [formData, setFormData] = useState({
    name: "",
    start_time: "",
    imgLink: "",
    rating: "",
    genre: "",
    capacity: "",
    price: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateEvent = async (e) => {
    try {
      let token = localStorage.getItem('token');
      e.preventDefault();
      const url = "https://honest-bear-95.loca.lt/admin/create-event"; // Replace with your API endpoint for creating events
      let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };

      const response = await axios.post(url, formData, { headers });
      console.log("Event created:", response.data);
      if (response.data) {
        setShowForm(false);
        alert("Event created successfully");

        // Refresh the page after successful event creation
        window.location.reload();
      }

    } catch (error) {
      console.error("Error creating event:", error);
      alert("Event not created" + error);
    }
  };

  const handleDeleteEvent = async () => {
    try {
      const eventId = prompt("Enter the ID of the event to delete:");
      if (!eventId) return;

      const url = `https://honest-bear-95.loca.lt/admin/cancel/${eventId}`; // Replace with your API endpoint for deleting events
      const response = await axios.delete(url);
      console.log("Event deleted:", response.data);
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className={styles.adminHomeContainer}>
      <div className={styles.topBar}>
        <h1 className={styles.heading}>Admin HomePage</h1>
        <Logout />
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.createEventBtn} onClick={() => setShowForm(true)}>
        <img src={createEventIcon} alt="Create Event" />
          Create Event
        </button>
        <button className={styles.deleteEventBtn} onClick={handleDeleteEvent}>
        <img src={deleteEventIcon} alt="Delete Event" />
          Delete Event
        </button>
      </div>
      {showForm && (
        <form className={styles.eventForm}>
          {/* Form fields for creating events */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Event Name"
          />
          <input
            type="text"
            name="start_time"
            value={formData.start_time}
            onChange={handleInputChange}
            placeholder="Start Time"
          />
          <input
            type="text"
            name="imgLink"
            value={formData.imgLink}
            onChange={handleInputChange}
            placeholder="Image Link"
          />
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            placeholder="Rating"
          />
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            placeholder="Genre"
          />
          <input
            type="text"
            name="capacity"
            value={formData.capacity}
            onChange={handleInputChange}
            placeholder="Capacity"
          />
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
          <button className={styles.submitBtn} onClick={(e) => handleCreateEvent(e)}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminHome;
