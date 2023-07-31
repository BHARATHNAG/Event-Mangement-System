import React, { Children } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("token");
  console.log("checking Private Route", user);
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;



// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ element }) => {
//   const user = localStorage.getItem("token");
//   const isAdmin = true; // Replace this with the logic to determine if the user is an admin

//   if (!user) {
//     // If user is not logged in, redirect to the login page
//     return <Navigate to="/login" />;
//   }
//     console.log(isAdmin);
//   if (isAdmin) {
//     // If user is an admin, render the admin component
//     return element;
//    } 
//   // else {
//   //   // If user is not an admin, render the public component
//   //   return (
//   //     <>
//   //       <Navigate to="/public/movies" />
//   //       {element}
//   //     </>
//   //   );
//   // }
// };

// export default PrivateRoute;
// import React from "react";
// import { Route, Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = () => {
//   const user = localStorage.getItem("token");
//   console.log("checking Private Route",user)
//  return user?<Outlet /> : <Navigate to="/login" />

// };

// export default PrivateRoute;
