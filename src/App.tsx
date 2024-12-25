import { useState } from 'react'
import './App.css'
import InputField from './components/inputField/InputField'
import { Todo } from '../TodoModel';
import TodoList from './components/TodoList/TodoList';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  };

  return (

    <>
      <section>
        <div className="container">

          <div className="wrapper_todo-app mt-5 text-center">
            <h1 className='mb-5'>Todo | Vite + React + TS</h1>
            <ToastContainer />

            <InputField todo={todo} setTodo={setTodo} handleTask={handleTask} />

            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </section>


    </>

  )
}

export default App
