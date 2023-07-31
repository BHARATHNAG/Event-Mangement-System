import React from "react";
import { Route, Routes  } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Movies from "./components/Moviespage/MovieDetails";
import Logout from "./components/home/logout"

import Admin from "./components/Admin/Admin"; // Import the new component
import PrivateRoute from "./PrivateRoute";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/public/movies"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/movie/:_id"
        element={
          <PrivateRoute>
            <Movies />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      /> <Route path="/logout" element={<Logout />} />

   
    </Routes>
  );
}
export default App;

