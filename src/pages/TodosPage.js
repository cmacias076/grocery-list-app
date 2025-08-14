import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addGrocery,
    deleteGrocery,
    toggleBought
} from '../features/groceries/groceriesSlice';

const TodosPage = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.groceries);
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('all');

const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
        dispatch(addGrocery({
            name: input.trim(),
            quantity: 1,
            category: 'General',
        }));
        setInput('');
    }
};

const handleToggle = (id) => {
    dispatch(toggleBought(id));
};

const handleDelete = (id) => {
    dispatch(deleteGrocery(id));
};

const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.bought;
    if (filter === 'imcomplete') return !todo.bought;
    return true;
});

return (
    <div style ={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Todo List</h1>

        {/* Add Todo Form */}
        <form onSubmit={handleAdd} style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Enter a task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ padding: '8pc', width: '70%' }}
              />
            <button type="submit" style={{ padding: '8px 12px', marginLeft: '0.5rem' }}>
               Add
            </button>
        </form>

        {/* Filter Buttons */}
        <div style={{ marginBottom: '1rem' }}>
            <button onClick={() => setFilter('all')} disabled={filter === 'all'}>All</button>
            <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>Completed</button>
            <button onClick={() => setFilter('incomplete')} disabled={filter === 'incomplete'}>Incomplete</button>
    </div>

        {/* Todo List */}
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {filteredTodos.map(todo => (
                <li key={todo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <input
                        type="checkbox"
                        checked={todo.bought}
                        onChange={() => handleToggle(todo.id)}
                        />
                        <span
                          style={{
                            marginLeft: '10px',
                            textDecoration: todo.bought ? 'line-through' : 'none',
                            flex: 1
                          }}
                        >
                            {todo.name}
                        </span>
                        <button onClick={() => handleDelete(todo.id)} style={{ marginLeft: '1rem' }}>Delete</button>
                      </li>
                    ))}
        </ul>
    </div>
    );
};

export default TodosPage;
               