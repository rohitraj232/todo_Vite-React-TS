import { Todo } from "../../../TodoModel";
import SingleTodo from "../singleTodo/SingleTodo";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {

    return (
        <div>

            <div className="done">
                <h5 className="mb-4">All Tasks</h5>
                {
                    todos.map((todo) => (
                        <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
                    ))
                }
            </div>

        </div>
    )
}

export default TodoList;