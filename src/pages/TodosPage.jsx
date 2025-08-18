import React, { useState, useReducer } from "react";
import TodoItem from "../components/TodoItem";
import PropTypes from "prop-types";


// Reducer to manage todos list actions: add, toggle completion, remove
function FilterButtons({ currentFilter, onFilterChange }) {
  return (
    <div className="filter-buttons" role="tablist" aria-label="Todo filters">
      {["all", "completed", "incomplete"].map((filterType) => (
        <button
          key={filterType}
          className={currentFilter === filterType ? "active" : ""}
          onClick={() => onFilterChange(filterType)}
        >
          {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
        </button>
      ))}
    </div>
  );
}
FilterButtons.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
export default function TodosPage() {
  const [filter, setFilter] = useState("all");

  // Reducer to handle todo actions
  function todosReducer(todos, action) {
  switch (action.type) {
    case "add":
      return [...todos, action.todo];
    case "toggle":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "remove":
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

  const [todos, dispatch] = useReducer(todosReducer, []);

  // Filter todos based on the selected filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  // Add new todo item to list from the form input
  function handleAdd(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const quantity = Number(form.elements.quantity.value);
    const category = form.elements.category.value.trim();

    if (!name) return;

    dispatch({
      type: "add",
      todo: {
        id: crypto.randomUUID(),
        name,
        quantity,
        category,
        bought: false,
      },
    });

    form.reset();
  }

  // Toggle the completed status of a todo item by id
  function handleToggle(id) {
    dispatch({ type: "toggle", id });
  }

  // Removes a todo item by id
  function handleDelete(id) {
    dispatch({ type: "remove", id });
  }

  return (
    <div>
      <h1>Todo List</h1>


      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

      <form onSubmit={handleAdd}>
  <input name="name" placeholder="Todo name" required />
  <input name="quantity" type="number" min="1" placeholder="Quantity" required />

  <select name="category" required defaultValue="">
    <option value="" disabled>
      Select Category
    </option>
    <option value="Produce">Produce</option>
    <option value="Dairy">Dairy</option>
    <option value="Bakery">Bakery</option>
    <option value="Meat">Meat</option>
    <option value="Beverages">Beverages</option>
    <option value="Misc./Other">Misc./Other</option>
  </select>

  <button type="submit">Add Todo</button>
</form>

      <ul>
        {/* Use 'todo' instead of 'item' for readability */}
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => handleToggle(todo.id)}
            onRemove={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}