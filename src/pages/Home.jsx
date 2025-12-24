import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Your Tasks
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Add, complete, and manage your daily tasks
          </p>
        </div>
        
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default Home;