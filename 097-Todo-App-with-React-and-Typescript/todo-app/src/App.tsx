import { useState } from 'react'

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    const newTodo: Todo = { id: Date.now(), text: text, completed: false };
    setTodos([...todos, newTodo]);
    setText('');
  };
  
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <div className="app-container">
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    <button onClick={addTodo}>Add Todo</button>
    <ul>
      {todos.map(todo => (
        <li key={todo.id} onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className={todo.completed ? 'completed' : ''}>
          {todo.text}
        </li>
      ))}
    </ul>
  </div>
  );
}


export default App
