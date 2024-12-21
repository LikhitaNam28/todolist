import React from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: e.target.title.value,
      startDate: e.target.startDate.value,
      deadline: e.target.deadline.value,
    };
    onSubmit(newTask);
    onClose(); 
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <div style={modalStyles.header}>
          <h2 style={modalStyles.title}>Add New Task</h2>
          <button style={modalStyles.closeButton} onClick={onClose}>
            ✖
          </button>
        </div>
        <form onSubmit={handleSubmit} style={modalStyles.form}>
          <div style={modalStyles.formGroup}>
            <label style={modalStyles.label}>Name of the Task:</label>
            <input
              type="text"
              name="title"
              placeholder="Enter task name"
              style={modalStyles.input}
              required
            />
          </div>
          <div style={modalStyles.dateGroup}>
            <div>
              <label style={modalStyles.label}>Start Date:</label>
              <input
                type="date"
                name="startDate"
                style={modalStyles.input}
                required
              />
            </div>
            <div>
              <label style={modalStyles.label}>Deadline:</label>
              <input
                type="date"
                name="deadline"
                style={modalStyles.input}
                required
              />
            </div>
          </div>
          <div style={modalStyles.footer}>
            <button
              type="button"
              onClick={onClose}
              style={modalStyles.cancelButton}
            >
              Cancel
            </button>
            <button type="submit" style={modalStyles.addButton}>
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  content: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    borderBottom: "1px solid #eaeaea",
    paddingBottom: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    color: "#888",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#666",
  },
  input: {
    width: "90%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  dateGroup: {
    display: "flex",
    gap: "15px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  cancelButton: {
    padding: "10px 20px",
    fontSize: "14px",
    borderRadius: "4px",
    backgroundColor: "#f5f5f5",
    color: "#888",
    border: "1px solid #ddd",
    cursor: "pointer",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "14px",
    borderRadius: "4px",
    backgroundColor: "#6c63ff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Modal;
