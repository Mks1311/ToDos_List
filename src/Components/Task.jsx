import { useToDoContext } from "../Context/ToDoContext";
import "./TaskCSS.css"
import React, { useState, useRef, useEffect } from "react";
function Task({ ToDo }) {
    const { ToDos, deleteToDo, updateToDo, toggleToDo } = useToDoContext();
    const MsgRef = useRef(null);
    const [edit, SetEdit] = useState(false);
    const [ToDoMsg, SetToDoMsg] = useState(ToDo.ToDo)

    const HandleDelete = () => {
        deleteToDo(ToDo.id)
        window.location.reload(true);
    }
    const HandleToggle = () => {
        toggleToDo(ToDo.id)
    }

    const EditToDo = () => {
        updateToDo(ToDo.id,{...ToDo,ToDo:ToDoMsg})
        SetEdit(false);
        // window.location.reload(true);
    }

    return (
        <>
            <div className="flex items-center mt-3 mb-5 w-full relative  p-2 pt-3 rounded-2xl"
                style={{ boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px" }}
            >
                <div class="container" className="h-[30px] w-[30px] mb-1 ">
                    <div class="round">
                        <input type="checkbox" id={ToDo.id}
                            onChange={HandleToggle}
                            checked={ToDo.completed}
                        />
                        <label htmlFor={ToDo.id}></label>
                    </div>
                </div>
                <input className={`mx-2 mb-2 cursor-pointer bg-transparent focus:outline-none  duration-300 text-left 
                ${ToDo.completed ? "line-through opacity-50" : ""}`}
                    value={ToDoMsg}
                    onChange={(e) => SetToDoMsg(e.target.value)}
                    readOnly={!edit}
                    ref={MsgRef}
                />
                <div className="cursor-pointer right-0  mb-1 mr-5 absolute flex gap-4">
                    <div className="h-[23px] w-[23px] duration-300"
                        onClick={() => {
                            if (ToDo.completed) return;
                            if (edit) {
                                EditToDo(); 
                            } else {
                                MsgRef.current?.select();
                                SetEdit((prev) => (!prev))
                            }
                        }}
                    >
                        {(!edit ? <img src="pen.png" className={`duration-300 ${ToDo.completed ? "opacity-50" : ""}`}></img> : <img src="save.png" className={`duration-300 ${!edit?"":"scale-150"} scale-100`}></img>)}
                    </div>

                    <div className="h-[23px] w-[23px]">
                        <img src="delete.png" onClick={HandleDelete}></img>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Task;