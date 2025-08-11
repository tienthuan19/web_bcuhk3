import React, { useState } from "react";

function TodoListCombined() {
  const [todos, setTodos] = useState([
    "take shower",
    "clean the house",
    "grocery shopping",
    "finish homework",
    "watch a movie",
    "plan weekend trip",
    "organize workspace",
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Thêm công việc mới
  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  // Lọc danh sách theo searchTerm
  const filteredTodos = todos.filter((todo) =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Todo List with Search</h3>

      {/* Ô tìm kiếm */}
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          width: "60%",
          maxWidth: "300px",
          marginBottom: "12px",
        }}
      />

      <br />

      {/* Ô nhập và nút thêm */}
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          width: "60%",
          maxWidth: "300px",
        }}
      />

      <button
        onClick={handleAdd}
        style={{
          padding: "8px 16px",
          marginLeft: "10px",
          fontSize: "16px",
          backgroundColor: "#5c4cafff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Add
      </button>

      {/* Danh sách công việc */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#f0f0f0",
                padding: "10px",
                marginBottom: "8px",
              }}
            >
              {todo}
            </li>
          ))
        ) : (
          <p>No todo.</p>
        )}
      </ul>
    </div>
  );
}

export default TodoListCombined;
