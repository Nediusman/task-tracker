import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './store/taskContext';
import Header from './components/Header';
import Home from './pages/Home';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <TaskProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          {/* Test indicator to verify Tailwind is working */}
          <div className="bg-green-500 text-white p-1 text-center text-sm">
            
          </div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </main>
        </div>
      </TaskProvider>
    </Router>
  );
}

export default App;