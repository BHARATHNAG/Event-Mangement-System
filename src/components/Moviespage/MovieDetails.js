
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./styles.modules.css";
import { useLocation } from "react-router-dom";
import Popup from "./Popup";

// Import your custom image
import CustomImage from "./moviebackground.avif";
import Image1 from "./cinema.webp"

const Movies = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const { data } = location.state;
  const [singleMovie, setSingleMovie] = useState(data);
  const [showPopup, setShowPopup] = useState(false);

  const handleBookTicket = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.movieDetailsContainer}>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            width: "100%",
          }}
        ></div>
        <div
          className={styles.movieInfo}
          style={{
            fontSize: "25px",
            position: "absolute",
            top: "5%",
            fontFamily: "Roboto, sans-serif", // Change the font family here
            color: "white",
            left: "40%",
          }}
        >
          <h2 className={styles.movieTitle}>{singleMovie.name}</h2>
          <h3 className={styles.movieInfoItem}>Start: {singleMovie.start_time}</h3>
          <h3 className={styles.movieInfoItem}>Capacity: {singleMovie.capacity}</h3>
          <h3 className={styles.movieInfoItem}>Price: {singleMovie.price}</h3>
          <h3 className={styles.movieInfoItem}>seats: {singleMovie.seats}</h3>
          <img src={Image1} alt={singleMovie.name} className={styles.movieImage} style={{ top :"40%", position: "center", width: "40%", left: "20%" }}/>
        </div>
        <button
          className={styles.bookTicketBtn}
          onClick={handleBookTicket}
          style={{ fontSize: "27px", position: "absolute", top: "70%", background: "red", right: "19%" }}
        >
          Book Ticket
        </button>
        {/* Replace the existing img tag with your custom image */}
        <img src={CustomImage} alt={singleMovie.name} className={styles.movieImage} style={{ width: "100%" }} />
      </div>

      {/* Add "Book Ticket" button and link to the booking page */}

      {/* Show the popup if showPopup is true */}
      {showPopup && (
        <Popup
          message={`Thank you for Booking ticket for ${singleMovie.name}. Tickets booked successfully.`}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default Movies;