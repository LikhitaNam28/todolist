import React, { useState } from "react";
import Modal from "./Modal";
import "./TaskBoard.css";

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    ToDo: [],
    InProgress: [],
    InReview: [],
    Completed: [],
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("todo");

  const handleAddTask = (category) => {
    setCurrentCategory(category);
    setModalOpen(true);
  };

  const handleModalClose = () => setModalOpen(false);

  const handleNewTask = (newTask) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [currentCategory]: [...prevTasks[currentCategory], newTask],
    }));
    setModalOpen(false);
  };

  const handleDeleteTask = (category, index) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: prevTasks[category].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="taskboard-container">
      {Object.keys(tasks).map((category) => (
        <div className="task-column" key={category}>
          <h2 className="column-heading">
            <span className="bubble"></span>
            {category.replace(/([a-z])([A-Z])/g, "$1 $2")}
          </h2>
          {tasks[category].map((task, index) => (
            <div key={index} className="task-card">
              <h4>{task.title}</h4>
              <p>Start Date: {task.startDate}</p>
              <p>Deadline: {task.deadline}</p>
              <button
                className="delete-button"
                onClick={() => handleDeleteTask(category, index)}
              >
                Delete
              </button>
            </div>
          ))}
          <button
            onClick={() => handleAddTask(category)}
            className="add-new-button"
          >
            Add New
          </button>
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleNewTask}
      />
    </div>
  );
};

export default TaskBoard;
