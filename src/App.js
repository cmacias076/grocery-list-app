import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TodosPage from './pages/TodosPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/navbar';
import './App.css';

export default function App() {
  return (
    <Router>
        <Navbar />
         <main className="container">
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}



     