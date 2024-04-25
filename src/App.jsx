import { useEffect, useState } from "react"
import Task from "./Components/Task"
import { ToDoContextProvider } from "./Context/ToDoContext";
function App() {
  const [ToDos, SetToDos] = useState([]);
  const [ToDoNumber, SetToDoNumber] = useState("0");

  const addToDo = (ToDo) => {
    SetToDos((PrevState) => [{ id: Date.now(), ...ToDo }, ...PrevState]);
  }

  const deleteToDo = (id) => {
    SetToDos((PrevState) => PrevState.filter((items) => items.id !== id));
  }


  const updateToDo = (id, ToDo) => {
    SetToDos((PrevState) => PrevState.map((items) => (items.id === id ? ToDo : items)))
  }

  const toggleToDo = (id) => {
    SetToDos((PrevState) =>
      PrevState.map((items) =>
        items.id === id ? { ...items, completed: !items.completed } : items
      ))
  }
  function AddNewOnClick() {
    window.location.reload(true);
    addToDo({ ToDo: "Click To Edit", completed: false })
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("ToDos"))

    if (todos && todos.length > 0) {
      SetToDos(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("ToDos", JSON.stringify(ToDos))
    SetToDoNumber(ToDos.length)
  }, [ToDos])

  const today = new Date();
  const year = today.getFullYear(); // Current year (e.g., 2024)
  const month = today.getMonth() + 1; // Current month (1-12)
  const day = today.getDate();

  return (
    <ToDoContextProvider value={{ ToDos, addToDo, deleteToDo, updateToDo, toggleToDo }}>
      <div className="z-1 mx-5 px-7 py-4 text-xl text-white flex flex-col   font-Ubuntu items-start justify-start rounded-xl h-[550px]  gap-3 overflow-auto w-full max-w-[1200px] relative"
        style={{ background: "linear-gradient(45deg, #0a0a0a, #3a4452)", boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}
      >
        <div className="text-pink-700 flex flex-wrap w-full gap-3 h-fit py-3 items-center justify-between">
          <div className="flex flex-wrap justify-between items-center text-4xl ">
            <div className="font-Sansita ">
              You've got<span className="mx-2 text-white underline decoration-gray-400 underline-offset-7 font-DM">{ToDoNumber} Tasks</span>
            </div>
            <div className="font-Sansita"> Today <span className="text-xl text-white">{day}/{month}/{year}</span> </div>
          </div>

          <div className="text-white h-[35px] w-[95px] flex flex-row justify-center items-center rounded-xl gap-2 px-2 cursor-pointer bg-pink-700"
            style={{ boxShadow: "rgba(0, 0, 0, 0.20) 0px 14px 28px, rgba(0, 0, 0, 0.15) 0px 10px 10px" }}
          >
            <div className="h-[15px] w-[15px]"
            ><img src="post.png" className=""></img>
            </div>
            <div className="text-sm"
              onClick={AddNewOnClick}
            >Add New</div>
          </div>


        </div>
        <div className="w-full font-Arsenal top-0" id="Display">
          {
            ToDos.map((items) => (
              <Task ToDo={items} />
            ))
          }
        </div>

      </div>
    </ToDoContextProvider>
  )
}

export default App
