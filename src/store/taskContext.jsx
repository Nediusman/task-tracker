import { createContext, useState, useEffect, useContext } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // Initialize tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Initialize dark mode from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Apply dark mode class on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Persist tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Persist dark mode and update document class
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const addTask = (text) => {
    if (!text.trim()) return;
    
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    };
    
    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const stats = {
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    remaining: tasks.filter(task => !task.completed).length
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      darkMode,
      addTask,
      deleteTask,
      toggleTask,
      toggleDarkMode,
      stats
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};