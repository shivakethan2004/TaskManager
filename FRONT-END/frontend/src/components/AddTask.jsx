import React, { useState } from "react";
import axios from "axios";
import "./AddTask.css";

const AddTask = () => {
  const [gettask, setGetTask] = useState(""); // Correct state declaration

  const handleInputChange = (e) => {
    setGetTask(e.target.value);  // Update state with input value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Fix typo

    try {
      const response = await axios.post("/api/v1/tasks", {
        name: gettask,  // Send task data in the request
      });
      console.log("Task Added:", response.data);
      setGetTask("");  // Clear the input after successful submission
    } catch (error) {
      console.error("Error:", error);  // Log any errors
    }
  };

  return (
    <div className="tasklist">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={gettask}  // Bind input value to state
            onChange={handleInputChange}  // Handle input change
            placeholder="ENTER THE TASK"
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
