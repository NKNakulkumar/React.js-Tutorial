import { FaCircleCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import './RTK.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addTask, clearTask, deleteTask } from "./Store";

export const Todo=()=>{
const[inputValue,setinputvalue]=useState("")
const [time,settime]=useState("")

useEffect(() => {
    const interval = setInterval(()=>{
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString().toUpperCase();
        settime(`${date}-${time}`);

    })
    return () => {
        clearInterval(interval)
    };
}, []);

const handleChange=(e)=>{
e.preventDefault();
dispatch(addTask(inputValue));
setinputvalue("")
}

const handledelete=(index)=>{
    dispatch(deleteTask(index));
}

const handledeleteall=()=>{
    // console.log("Clear All button clicked"); // Debugging line
    dispatch(clearTask());
}

const taskArray = useSelector((state)=>state.taskreducer.task)
const dispatch =useDispatch()


    return (
    <section className="text-white pt-5 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
  <header className="text-center mb-6">
    <h1 className="text-4xl sm:text-5xl font-bold text-shadow-custom mb-2">
      Todo List
    </h1>
    <h2 className="text-lg sm:text-xl font-semibold">{time}</h2>
  </header>

  <form onSubmit={handleChange} className="space-y-6">
    <div className="flex justify-center">
      <input
        type="text"
        autoComplete="off"
        className="bg-white text-black font-nunito font-bold text-lg p-3 border-4 border-purple-500 rounded-lg w-full max-w-sm  transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
        value={inputValue}
        onChange={(e) => setinputvalue(e.target.value)}
        placeholder="Enter a task"
      />
    </div>

    <div className="w-full  flex flex-col items-center">
      <ul className="w-full max-w-sm space-y-4">
        {taskArray?.map((curr, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 bg-white text-black font-nunito font-bold border-4 border-purple-500 rounded-lg transition-all duration-300 hover:bg-[#6a5acd] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(106,_90,_205,_0.8)]"
          >
            <span className={curr.checked ? "checklist" : "unchecklist"}>{curr}</span>
            <div className="flex space-x-3">
              <button type="button" className="text-3xl cursor-pointer text-green-500 flex items-center justify-center rounded-full hover:shadow-[0_0_20px_5px_cyan] transition-all duration-300">
                <FaCircleCheck />
              </button>
              <button
                type="button"
                className="text-3xl cursor-pointer text-red-500 items-center justify-center  hover:shadow-[0_0_20px_5px_cyan] transition-all duration-300"
                onClick={() => handledelete(index)}
              >
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="flex justify-center">
      <button
        type="submit"
        className="py-3 px-6 bg-[#7f00ff] text-white font-nunito font-bold rounded-lg transition-all duration-300 transform hover:scale-110"
      >
        Add Task
      </button>
    </div>

    <div className="flex justify-center">
      <button
        type="button"
        className="inline-flex items-center justify-center w-48 h-14 text-lg uppercase tracking-wide font-nunito font-bold text-white bg-gradient-to-r from-[#7f00ff] to-[#30cdbd] rounded-full shadow-[0px_8px_24px_rgba(79,_209,_197,.64)] transition-all duration-300 transform hover:-translate-y-1"
        onClick={handledeleteall}
      >
        Clear All
      </button>
    </div>
  </form>
</section>

    )
}