import './InputField.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleTask: (e: React.FormEvent) => void;
}


const InputField = ({ todo, setTodo, handleTask }: Props) => {
  return (
    <>
      <div className='wrapper_input mb-5'>
        <form onSubmit={(e) => handleTask(e)}>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="container_input">
                <div className="row">
                  <div className="col-12 col-md-9 col-xl-10">
                    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter a task..." className='w-100 todo-input-box mb-3 p-2 border border-1 rounded-3' />
                  </div>

                  <div className="col-12 col-md-3 col-xl-2 text-start">
                    <button className='btn btn-primary px-4' type="submit">Go</button>
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

export default InputField
