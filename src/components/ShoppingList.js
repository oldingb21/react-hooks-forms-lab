import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

 // will play around with this to figure it out 
  const categoryToDisplay = items.filter((item) => selectedCategory === "All" || selectedCategory === item.category )
  console.log(categoryToDisplay)
  const itemsToDisplay = categoryToDisplay.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))


  // const itemsToDisplay = items.filter((item) => {
  //   const name = item.name
  //   if (selectedCategory === "All" && search === "") return true;
  //   else if (item.category === selectedCategory && search === "") return true;
  //   else if (selectedCategory === "All" && name.toLowerCase().match(search.toLocaleLowerCase())) return true;
  //   else if (item.category === selectedCategory && name.toLowerCase().match(search.toLocaleLowerCase())) return true;
  // });

  function onItemFormSubmit(item) {
    setItems([...items, item])
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearchChange} selectedCategory={selectedCategory} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
