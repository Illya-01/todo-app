import React, { useState } from 'react'

interface TodoInputProps {
  listId: string
  onAddTodo: (listId: string, title: string) => void
}

const TodoInput: React.FC<TodoInputProps> = ({ listId, onAddTodo }) => {
  const [newTodoTitle, setNewTodoTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodoTitle.trim()) {
      onAddTodo(listId, newTodoTitle)
      setNewTodoTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="flex">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodoTitle}
          onChange={e => setNewTodoTitle(e.target.value)}
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

export default TodoInput
