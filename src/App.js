import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App d-flex flex-wrap align-items-center justify-content-center">
      <div className="to-do-container shadow-lg rounded">
        <h1 className="to-do-title text-center">My To-Do List</h1>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;