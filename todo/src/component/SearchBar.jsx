import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, onSearch, filter, onFilterChange, onClear }) => {
  return (
    <div>
      <div className="mt-4 flex gap-2">
        <div className="relative flex-1">
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            className="w-full pl-8 p-2 border rounded-md"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <select
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <button onClick={onClear} className="bg-red-500 text-white px-3 py-2 rounded-md">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
