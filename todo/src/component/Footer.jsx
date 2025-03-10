import React from "react";

const Footer = ({ filter, onFilterChange }) => {
  return (
    <div className="space-x-2 flex justify-center">
      <button
        className={`px-2 py-1 ${filter === "all" ? "bg-blue-500" : "bg-gray-200"} text-white`}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        className={`px-2 py-1 ${filter === "pending" ? "bg-blue-500" : "bg-gray-200"} text-white`}
        onClick={() => onFilterChange("pending")}
      >
        Active
      </button>
      <button
        className={`px-2 py-1 ${filter === "completed" ? "bg-blue-500" : "bg-gray-200"} text-white`}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default Footer;
