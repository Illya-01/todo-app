import React, { useState } from 'react'

interface TaskInputProps {
  listId: string
  onAddTask: (listId: string, title: string, description: string) => void
}

const TaskInput: React.FC<TaskInputProps> = ({ listId, onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTaskTitle.trim()) {
      onAddTask(listId, newTaskTitle, '') // Empty description
      setNewTaskTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="flex">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTaskTitle}
          onChange={e => setNewTaskTitle(e.target.value)}
          className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-r hover:bg-green-600">
          Add
        </button>
      </div>
    </form>
  )
}

export default TaskInput
