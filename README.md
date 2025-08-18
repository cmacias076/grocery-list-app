# Grocery List App

## Author
Christine Macias

## Overview
The Grocery List App is a React-Redux project that allows users to manage a grocery list.  
Users can add new items with name, quantity, and category, mark them as completed, filter by status, and remove items.  
The app also includes a contact page with a form for user input.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/cmacias076/grocery-list-app.git
  
2. Navigate into the project directory:
   cd grocery-list-app

3. Install the dependencies:
   npm install

4. Start the development server:
   npm start

5. Open your browser and go to http://localhost:3000 to view the app.



## How to Use
1. Navigate to the **Todos** page:
   - Add a new grocery item by filling out the form (name, quantity, category).
   - Items will display in a list, where you can mark them as completed or delete them.
   - Use filter buttons allow you to view *all*, *active*, or *completed* items.
2. Navigate to the **Contact** page:
   - Fill out the form to simulate sending a message or feedback.

## Technologies Used
- React (functional components, hooks, and Redux state management)
- Redux Toolkit (for state management)
- CSS (custom styles with media queries for responsiveness)
- GitHub Pages (for deployment)

## Ideas for Future Improvement
1. Save todos in **localStorage** so they persist after a refresh.  
2. Add **categories with icons** for better organization.  
3. Implement **user authentication** so each user has their own grocery list.  
4. Add a **dark mode toggle** for accessibility.  

## Project Structure
src/
├── app/
├── components/
│ ├── Navbar.js
│ ├── Navbar.css
│ └── TodoItem.jsx
├── features/
├── pages/
│ ├── ContactPage.jsx
│ └── TodosPage.jsx
├── App.js
├── App.css
├── index.js
└── index.css

## Planning Artifacts
Located in the `planning/` folder:
- `User Stories.txt` (user stories)
- `TodoListWireframe.drawio` and `.png` (wireframes)
- `state-tree.txt` (state tree)
- `components-list.txt` (components list)

## Deployment
This app is hosted on GitHub Pages:  
👉 [Live Demo](https://cmacias076.github.io/grocery-list-app/)

