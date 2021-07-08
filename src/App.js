import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Get some sleep',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Grab some beer',
            day: 'Feb 8th at 14:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Do workout',
            day: 'Feb 17th at 10:30am',
            reminder: false,
        }
    ]
  )

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addTask= (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    { ...task, reminder: !task.reminder } : task
    ))
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? ( 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
       : (
         'No Tasks To Show' 
       )}
    </div>
  );
}

export default App;
