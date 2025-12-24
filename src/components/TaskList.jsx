import TaskItem from './TaskItem';
import { useTasks } from '../store/taskContext';

const TaskList = () => {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          No tasks yet
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Add a task above to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;