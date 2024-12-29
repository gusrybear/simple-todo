import "./App.css"
import Button from "./components/Button"

function App() {
  return (
    <>
      <div className="container max-w-[900px] w-full mx-auto">
        <div>
          <h1 className="text-3xl mb-2">Simple Todo</h1>

          <div className="grid grid-cols-3 gap-x-3 gap-y-3">
            <div className="status-header col-span-3 grid grid-cols-3 text-center border-b-2 border-white">
              <h2 className="bg-slate-900">Open</h2>
              <h2 className="bg-blue-400">In-progress</h2>
              <h2 className="bg-green-800">Done</h2>
            </div>

            <div className="todo-card bg-slate-200 text-black rounded-lg p-2">
              <p>name task</p>
              <p>status</p>
              <Button onClick={() => console.log("Move")}>
                <p className="text-2xl text-red-400">Move</p>
              </Button>
            </div>

            <div className="todo-card bg-slate-200 text-black rounded-lg p-2">
              <p>name task</p>
              <p>status</p>
              <button>Done</button>
            </div>

            <div className="todo-card bg-slate-200 text-black rounded-lg p-2">
              <p>name task</p>
              <p>status</p>
              <button>Done</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
