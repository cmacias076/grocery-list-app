import { useMemo, useState } from "react";
import TodoItem from "../components/TodoItem";

export default function TodosPage() {
    const [todos, setTodos] = useState([
        { id: crypto.randomUUID(), text: "Milk", completed: false },
        { id: crypto.randomUUID(), text: "Bread", completed: true },  
    ])

    const [newText, setNewText] = useState("");
    const [filter, setFilter] = useState("all");

    function handleAdd(e) {
        e.preventDefault();
        const text = newText.trim();
        if (!text) return;
        setTodos([{ id: crypto.randomUUID(), text, completed: false }, ...todos]);
        setNewText("");
    }

    function toggleComplete(id) {
        setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
    }

    function removeTodo(id) {
        setTodos(todos.filter(t => t.id !== id));
    }

    const filtered = useMemo(() => {
        if (filter === "completed") return todos.filter(t => t.completed);
        if (filter === "incomplete") return todos.filter(t => !t.completed);
        return todos;
    }, [todos, filter]);

    return (
      <>
        <h2 className="section-title">Your Groceries</h2>
        
        {/* Filter Buttons */}
        <div className="filter-buttons" role="tablist" aria-label="Todo filters">
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
        <form onSubmit={handleAdd} aria-label="Add grocery item">
        <label htmlFor="newItem" className="visually-hidden">New item</label>
        <input
          id="newItem"
          type="text"
          placeholder="Add a grocery item..."
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button type="submit" className="add-btn">Add Item</button>
      </form>

      {/* List */}
      {filtered.length === 0 ? (
        <p className="empty-state">No items to show. Try adding one above!</p>
      ) : (
        <ul className="todo-list" aria-live="polite">
          {filtered.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => toggleComplete(todo.id)}
              onRemove={() => removeTodo(todo.id)}
            />
          ))}
        </ul>
      )}
    </>
  );
}
