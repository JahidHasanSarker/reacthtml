import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Form from "./components/Form";
import UserData from "./components/UserData";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      ></Form>
      <UserData todos={todos} setTodos={setTodos}></UserData>
    </div>
  );
}

export default App;
