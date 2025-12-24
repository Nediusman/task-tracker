import { useTasks } from '../store/taskContext';

const Stats = () => {
  const { stats } = useTasks();

  const statCards = [
    {
      title: 'Total Tasks',
      value: stats.total,
      icon: '📋',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Completed',
      value: stats.completed,
      icon: '✅',
      color: 'bg-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: 'Remaining',
      value: stats.remaining,
      icon: '⏳',
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    }
  ];

  const completionPercentage = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Task Statistics
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Track your productivity and progress
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-lg ${stat.bgColor} border border-gray-200 dark:border-gray-700`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className={`${stat.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {stat.title}
                </span>
              </div>
              <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.title.toLowerCase()}
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Progress Overview
          </h3>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700 dark:text-gray-300">Completion Rate</span>
              <span className="font-medium text-gray-900 dark:text-white">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
          
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              You have <span className="font-medium text-gray-900 dark:text-white mx-1">{stats.total}</span> total tasks
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="font-medium text-gray-900 dark:text-white mr-1">{stats.completed}</span> tasks completed
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
              <span className="font-medium text-gray-900 dark:text-white mr-1">{stats.remaining}</span> tasks remaining
            </div>
          </div>
          
          {stats.total > 0 && (
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {stats.remaining === 0 
                  ? "🎉 Congratulations! You've completed all your tasks!" 
                  : `Keep going! You're ${completionPercentage}% done.`
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;