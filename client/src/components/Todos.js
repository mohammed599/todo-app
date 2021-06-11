import React from "react";
import PropTypes from "prop-types";

const Todos = ({ todos, removeTodo }) => {
  return (
    <div>
      <table className="table table-striped table-info">
        <thead>
          <tr className="table-dark">
            <th colSpan="3" style={{ textAlign: "center" }}>
              {" "}
              Todolist
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td colSpan="2">{todo.task}</td>
              <td onClick={(e) => removeTodo(todo.id)}> X </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array,
};

export default Todos;
