import logo from './logo.svg';
import './tailwind.css'

function App() {

  const todos = ['Learn React', 'Learn Tailwind', 'Build a todo app']

  return (
    <div className="App bg-slate-800 h-screen">
      <header className="App-header">
        <img src={logo} className="App-logo w-72 mx-auto" alt="logo" />
      </header>
      <main className="App-main">
        <div className="md:container mx-auto text-white">
            <ul>
              {todos.map(todo => (
                <li key={todo}>{todo}</li>
              ))}
            </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
