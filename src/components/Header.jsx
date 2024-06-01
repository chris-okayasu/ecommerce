import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = (route) => {
    return route === location.pathname
  }


  return (
    <div className="bg-red-500 border-b shadow sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto relative">
        <div>
          <img
            className="h-10 border-b cursor-pointer"
            srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROdYG7twWWoCzBj6npkQLbhgLvZI1_WvjYg&usqp=CAU"
            alt=""
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10 text-white">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-900
              ${pathMatchRoute("/sign-in") && "text-green-400 border-b-green-100"}
              `}
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-900
              ${pathMatchRoute("/sign-up") && "text-green-400 border-b-green-100"}
              `}
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
