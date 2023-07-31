import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Logout from "./logout"; // Import the Logout component

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesFromAPI = () => {
      fetch("https://honest-bear-95.loca.lt/public/movies") // Replace with your actual API endpoint
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data, data.data);
          let resultdata = [...JSON.parse(JSON.stringify(data.data))];
          setMovies(resultdata[0]);
        })
        .catch((error) => console.error("Error fetching movie data:", error));
    };

    fetchMoviesFromAPI();
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Logout button at the top right corner */}
      <div className={styles.logoutButtonContainer}>
        <Logout />
      </div>

      <h1 className={styles.appName}>Movie Club</h1>

      <div className={styles.movieList}>
        {movies?.map((x) => {
          return (
            <Link to={`/movie/${x._id}`} state={{ data: x }} key={x.id} className={styles.movieItem}>
              <img src={x.imgLink} alt={x.name} className={styles.movieImage} />
              <h3 className={styles.movieName}>{x.name}</h3>
              <p className={styles.movieRating}>Rating: {x.rating}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;




