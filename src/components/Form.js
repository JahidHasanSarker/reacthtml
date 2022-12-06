import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="Name">Name: </label>
      <input
        type="text"
        placeholder="Your Name"
        value={input}
        required
        onChange={onInputChange}
      />
      <br />
      <select name="" id="">
        <option value="Project A">Project A</option>
        <option value="Project B">Project B</option>
        <option value="Project C">Project C</option>
      </select>
      <br />
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label htmlFor="vehicle1"> Agree to terms</label>
      <br />
      <input type="submit" value="Save" />
    </form>
  );
};

export default Form;
