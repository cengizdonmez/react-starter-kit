import { useReducer } from "react";
import Header from '../components/Header'

function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [...state.todos, state.todo],
      };
  }
}

function UseReducerExp() {
  console.log('render UseReducerExp');
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
  });
  // const [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", todo: state.todo });
    // setTodos([...todos, todo]);
    // setTodo("");
  };

  const onChange = (e) => {
    // setTodo(e.target.value);
    dispatch({ type: "SET_TODO", value: e.target.value });
  };

  return (
    <div>
      <Header />
      <h1>Todo App</h1>
      <form onSubmit={submitHandle}>
        <input
          className="text-red-500"
          type="text"
          value={state.todo}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducerExp;
