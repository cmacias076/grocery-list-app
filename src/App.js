import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import TodosPage from './pages/TodosPage';
import ContactPage from './pages/ContactPage';
import './App.css';

export default function App() {
  return (
    <Router>
      <header>
        <div className="container">
          <h1>Grocery List</h1>
          <nav className="nav">
            <NavLink to="/todos" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Todos
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}
