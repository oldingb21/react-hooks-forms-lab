import React from "react";

//use match() method to compare substrings

function Filter({ onCategoryChange, search, onSearchChange, selectedCategory }) {



  return (
    <div className="Filter">
      <input type="text" name="search" value={search} placeholder="Search..." onChange={onSearchChange} />
      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
