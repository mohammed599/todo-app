export default function AddTodo({ addTodo }) {
  return (
    <div>
      <button
        onClick={(e) => addTodo(e.target.nextSibling.nextSibling.value)}
        className="btn btn-primary my-1 btn-block"
      >
        Add todo
      </button>
      <br />
      <input
        type="textbox"
        className="form-control"
        placeholder="Enter a task..."
      />
    </div>
  );
}
