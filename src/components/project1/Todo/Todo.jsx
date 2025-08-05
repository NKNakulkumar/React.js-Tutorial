import { useEffect, useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import './Todo.css';
const todokey = "reactTodo";
export const Todo = () => {
    const [inputValue, setInputValue] = useState(""); // Initialize as an empty string
    const [tasks, setTasks] = useState(()=>{
    const rawTodo = localStorage.getItem(todokey)
    if(!rawTodo) return [];
    return JSON.parse(rawTodo)
    });

    const [time, setTime] = useState("");

    const handleChange = (value) => {
        setInputValue(value); // Update input value
    }; 

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (!inputValue) return; // Check if input is empty
        const isTaskContentMatch = tasks.some(task => task.content === inputValue);
        if (isTaskContentMatch) return; // Prevent duplicate tasks

        const newTask = { id: Date.now(), content: inputValue, checked: false }; // Create new task
        setTasks(prevTasks => [...prevTasks, newTask]); // Add new task to the list
        setInputValue(""); // Reset input value
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const dateUpdate = now.toLocaleDateString();
            const timeUpdate = now.toLocaleTimeString().toUpperCase();
            setTime(`${dateUpdate} - ${timeUpdate}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
// add local storage 
localStorage.setItem(todokey ,JSON.stringify(tasks) )
//
    const handleDelete = (value) => {
        const updatedTasks = tasks.filter(task => task.content !== value);
        setTasks(updatedTasks); // Update tasks after deletion
    };

    const handleDeleteAll = () => {
        setTasks([]); // Clear all tasks
    };

    // Checked functionality
    const Handlecheckedtodo = (content) => {
        const updatetask = tasks.map((currtask) => {
            if (currtask.content === content) {
                return { ...currtask, checked: !currtask.checked };
            }
            return currtask;
        });
        setTasks(updatetask);
    };
    
    return (
        <section className="text-white pt-5">
            <header>
                <h1 className='text-4xl text-shadow-custom'>Todo List</h1>
                <h2 className='mb-4 mt-4 font-semibold'>{time}</h2>
            </header>
            <section>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            autoComplete="off" 
                            className='bg-white text-black font-nunito font-bold flex-1/2 p-2 border-4 border-purple-500 transition-all duration-300 w-[16vw]' 
                            value={inputValue} 
                            onChange={(e) => handleChange(e.target.value)} 
                        />
                    </div>
                    <div>
                        <ul>
                            {tasks.map((curr) => (
                                <li key={curr.id} className='justify-center justify-self-center font-nunito font-bold flex items-center mt-10 p-2 bg-white text-black flex-1/2 border-4 border-purple-500 transition-all duration-300 w-[16vw] hover:bg-[#6a5acd] hover:text-white hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(106,_90,_205,_0.8)]'>
                                    <input 
                                        type="checkbox" 
                                        className="hidden-checkbox" // Add the class to hide the checkbox
                                        checked={curr.checked} 
                                        onChange={() => Handlecheckedtodo(curr.content)} 
                                    />
                                    <span className={curr.checked ? "checklist" : "unchecklist"}>{curr.content}</span>
                                    <button type="button" className='pl-20 font-nunito font-bold text-3xl border-0 cursor-pointer ' onClick={() => Handlecheckedtodo(curr.content)}><FaCircleCheck /></button>
                                    <button type="button" className='pl-4 font-nunito font-bold mr-0 text-3xl border-0 cursor-pointer' onClick={() => handleDelete(curr.content)}><MdDelete /></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button type="submit" className='py-3 px-3 mt-5 bg-[#7f00ff] border-0 p-2.5 font-nunito font-bold text-[white] rounded-[5px] cursor-pointer transition-all duration-300 transform hover:scale-110 ml-35 absolute top-32 flex-1/2'>Add Task</button>
                    <section>
                        <button type="button" className='inline-flex items-center justify-center w-[180px] min-h-[60px] text-[22px] uppercase text-center tracking-[1.3px] font-nunito font-bold text-[white] bg-gradient-to-r from-[#7f00ff] to-[#30cdbd] border-0 rounded-full shadow-[12px_12px_24px_rgba(79,_209,_197,.64)] cursor-pointer outline-none p-2.5 relative transform hover:translate-y-[-6px] transition-all duration-300 mt-6' onClick={handleDeleteAll}>Clear All</button>
                    </section>
                </form>
            </section>
        </section>
    );
};