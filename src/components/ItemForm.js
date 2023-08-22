import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Produce');

  function handleNewItemCategoryChange(e) {
    setNewItemCategory(e.target.value);
  }

  function handleNewItemChange(e) {
    setNewItemName(e.target.value);
  }

  function handleFormSubmit (e) {
  e.preventDefault();
    const newItem = {
    id: uuid(),
    name:newItemName,
    category:newItemCategory
  }
  onItemFormSubmit(newItem)
  }


  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItemName} onChange={handleNewItemChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItemCategory} onChange={handleNewItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
