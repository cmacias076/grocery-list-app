export default function TodoItem({ todo, onToggle, onRemove }) {
    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <div className="todo-main">
                <input
                    type="checkbox"
                    aria-label={`Mark ${todo.text} as completed`}
                    checked={todo.completed}
                    onChange={onToggle}
                />
                <span className="todo-text">{todo.text}</span>
            </div>
            <div className="todo-actions">
                <button onClick={onRemove} aria-label={`Remove ${todo.text}`}>
                    Remove
                </button>
            </div>
        </li>
    );
}