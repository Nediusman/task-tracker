import { useTasks } from '../store/taskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask } = useTasks();

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
      <div className="flex items-center space-x-3 flex-grow">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
        />
        <span 
          className={`flex-grow text-lg ${
            task.completed 
              ? 'line-through text-gray-500 dark:text-gray-400' 
              : 'text-gray-900 dark:text-white'
          } break-words`}
        >
          {task.text}
        </span>
      </div>
      
      <button
        onClick={() => deleteTask(task.id)}
        className="ml-4 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
        aria-label={`Delete task: ${task.text}`}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;