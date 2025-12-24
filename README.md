# 📝 Task Tracker

A modern, responsive task management application built with React, featuring dark mode, local storage persistence, and beautiful statistics.

## ✨ Features

- ✅ **Task Management**: Add, complete, and delete tasks
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📊 **Statistics**: Track your productivity with detailed stats
- 💾 **Persistence**: Tasks and preferences saved locally
- 📱 **Responsive**: Works perfectly on all devices
- 🎨 **Modern UI**: Beautiful design with Tailwind CSS

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-tracker.git
   cd task-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 18** - UI library
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Context API** - State management

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # App title + dark mode toggle
│   ├── TaskInput.jsx       # Input + add button
│   ├── TaskItem.jsx        # Single task item
│   └── TaskList.jsx        # List of tasks
├── pages/
│   ├── Home.jsx            # Add & view tasks
│   └── Stats.jsx           # Task statistics
├── store/
│   └── taskContext.jsx     # Context API state management
├── App.jsx                 # Main app with routing
└── main.jsx                # App entry point
```

## 🎯 Key Features

### Task Management
- Add new tasks with validation
- Mark tasks as complete/incomplete
- Delete tasks instantly
- Visual distinction for completed tasks

### Dark Mode
- System-wide dark/light theme toggle
- Smooth transitions between themes
- Preference persistence across sessions

### Statistics
- Total tasks count
- Completed tasks tracking
- Remaining tasks display
- Progress visualization
- Completion percentage

### Data Persistence
- Tasks saved to localStorage
- Dark mode preference saved
- Data restored on page refresh

## 🎨 Screenshots

### Light Mode
- Clean, modern interface
- Intuitive task management
- Beautiful statistics dashboard

### Dark Mode
- Eye-friendly dark theme
- Consistent styling across all components
- Smooth theme transitions

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern React best practices
- Styled with Tailwind CSS
- Icons from Unicode emoji set
- Responsive design principles

---

**Happy task tracking! 🎉**# task-tracker
