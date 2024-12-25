import './SingleTodo.css'
import { useState } from "react";
import { Todo } from "../../../TodoModel";
import { MdEdit, MdDelete, MdFileDownloadDone } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        )
        setEdit(false);
        toast.success("Todo updated successfully!", {
            position: "top-right",
        });
    }

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    if (!todo.isDone) {
                        toast.success("Task marked as done!", {
                            position: "top-right",
                        });
                    } else {
                        toast.info("Task marked as undone!", {
                            position: "top-right",
                        });
                    }
                    return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            })
        );
    };


    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        toast.error("Task deleted!", {
            position: "top-right",
        });
    }


    return (
        <>
            <div className='container'>

                <form onSubmit={(e) => handleEdit(e, todo.id)}>
                    <div className="container_single-todo mb-3">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div className="container-todo-box border border-1 p-3 rounded-3">
                                    <div className="row">
                                        <div className="col-12 col-lg-7 col-xl-8">
                                            <div className="mb-3">
                                                {edit ? (
                                                    <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='border border-1 p-2' />
                                                ) : todo.isDone ? (
                                                    <s>{todo.todo}</s>
                                                ) : (
                                                    <p className="todo-data mb-0 text-start">{todo.todo}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-5 col-xl-4">
                                            <div className="btns text-sm-start">
                                                <span className="icon btn btn-info me-2 px-md-3" onClick={() => {
                                                    if (!edit && !todo.isDone) {
                                                        setEdit(!edit);
                                                    }
                                                }}>
                                                    <MdEdit />
                                                </span>

                                                <span className="icon btn btn-danger me-2 px-3" onClick={() => handleDelete(todo.id)}>
                                                    <MdDelete />
                                                </span>

                                                <span className="icon btn btn-warning me-2 px-3" onClick={() => handleDone(todo.id)}>
                                                    <MdFileDownloadDone />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SingleTodo
