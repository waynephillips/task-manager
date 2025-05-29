import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import TaskForm from './components/TaskForm';
import { Task, TaskFormData } from './types';
import './App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState(1);

  const addTask = (formData: TaskFormData) => {
    const newTask: Task = {
      id: nextId,
      title: formData.title,
      completed: false,
      createdAt: new Date(),
    };

    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p>Completed: {completedCount} / {totalCount}</p>
      </header>

      <main className="app-main">
        <TaskForm onSubmit={addTask} />

        <div className="tasks-container">
          {tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add one above!</p>
          ) : (
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
