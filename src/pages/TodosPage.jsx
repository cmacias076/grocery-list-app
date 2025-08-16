import React, { useState } from "react";
import TodoItem from "../components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import {
  addGrocery,
  deleteGrocery,
  toggleBought,
} from "../features/groceries/groceriesSlice";

const TodosPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.groceries);

  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(
        addGrocery({
          name: input.trim(),
          quantity: quantity,
          category: category,
        })
      );
      setInput("");
      setQuantity(1);
      setCategory("");
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleBought(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteGrocery(id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.bought;
    if (filter === "incomplete") return !todo.bought; // ✅ fixed typo
    return true;
  });

  return (
    <>
      <h2 className="section-title">Your Groceries</h2>

      <div className="todo-layout">
        {/* LEFT: Add form + Filters */}
        <section className="form-panel">
          <div className="filter-buttons"
               role="tablist" 
               aria-label="Todo filters">
         
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={filter === "completed" ? "active" : ""}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
            <button
              className={filter === "incomplete" ? "active" : ""}
              onClick={() => setFilter("incomplete")}
            >
              Incomplete
            </button>
          </div>

          {/* Add form (controlled) */}
          <form
            onSubmit={handleAdd}
            aria-label="Add grocery item"
            className="add-form"
          >
            <div className="form-row">
              <input
                type="text"
                placeholder="Item name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                />
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Beverages">Beverages</option>
                </select>
              <button type="submit" className="add-btn">
                Add Item
              </button>
            </div>
          </form>
        </section>

        {/* RIGHT: Todo List */}
        <section className="list-panel">
          {filteredTodos.length === 0 ? (
            <p className="empty-state">
              No items to show. Try adding one above!
            </p>
          ) : (
            <ul className="todo-list" aria-live="polite">
              {filteredTodos.map((todo) => (
                <TodoItem
                 key={todo.id} 
                 todo={{ text: todo.name, completed: todo.bought }}
                    onToggle={() => handleToggle(todo.id)}
                    onRemove={() => handleDelete(todo.id)}
                />
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
};

export default TodosPage;