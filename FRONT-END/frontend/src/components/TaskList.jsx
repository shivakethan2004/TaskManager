import axios from "axios";
import React, { useState, useEffect } from "react";
import './TaskList.css';

const TaskList = () => {
    const [tasks, setTask] = useState([]);

    // Fetch tasks from the backend when the component mounts
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('/api/v1/tasks');
                setTask(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTasks();
    }, []);

    // Handle task deletion
    const handleDelete = async (_id) => {
        try {
            await axios.delete(`/api/v1/tasks/${_id}`);
            // Update the local state to remove the deleted task
            setTask(tasks.filter(task => task._id !== _id));
            console.log(`Task with id ${_id} deleted`)
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };


    const handleCheckboxChange = async(id, complete) => {
        try {
            await axios.patch(`/api/v1/tasks/${id}`,{complete: !complete})
            setTask(tasks.map(task =>
                task._id === id ? { ...task, complete: !complete } : task
            ));
            
        } catch (error) {
            console.error("Error updating task:", error);
        }
    }
    return (
        <div>
            <h1>Task List</h1>
            <div className="list">
                <ul>
                    {tasks.map(task => (
                        <li key={task._id}>
                            <div className="task-name">{task.name}</div>
                            <input type="checkbox" checked={task.complete}
                            onChange={() => handleCheckboxChange(task._id)}  /> - 
                            {task.complete ? "completed" : "Not completed"}
                            <button onClick={() => handleDelete(task._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
