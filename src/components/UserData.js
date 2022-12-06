import React from "react";

const UserData = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li className="" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default UserData;
