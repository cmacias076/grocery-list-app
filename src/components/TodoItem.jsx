export default function TodoItem({ todo, onToggle, onRemove }) {
    return (
        <li className={`todo-item ${todo.bought ? "completed" : ""}`}>
            <input
                type="checkbox"
                aria-label={`Mark ${todo.name} as completed`}
                checked={todo.bought}
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