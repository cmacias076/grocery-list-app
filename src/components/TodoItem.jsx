import React from "react";
import PropTypes from "prop-types";


/**
 *  TodoItem component
 * Represents a single item in the todo list with toggle and remove functionality
 */
TodoItem.displayName = "TodoItem";
export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        aria-label={`Mark ${todo.name} as completed`}
        checked={todo.completed}
        onChange={onToggle}
        className="todo-checkbox"
      />

      <div className="todo-item-details">
        <span className="todo-item-name">{todo.name}</span>
        <span className="todo-item-quantity">Qty: {todo.quantity}</span>
        <span className="todo-item-category">Category: {todo.category}</span>
      </div>

      <button className="remove-btn" onClick={onRemove}>
        Remove
      </button>
    </li>
  );
}

// PropTypes for type-checking and better maintainability
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};