import React, { useState } from 'react'
import type { Todo } from '../../types'

interface TodoItemProps {
  todo: Todo
  onToggleComplete: (id: string) => void
  onEdit: (id: string, title: string) => void
  onDelete: (id: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onEdit,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      onEdit(todo.id, title)
      setIsEditing(false)
    }
  }

  return (
    <div
      className={`p-3 mb-2 border rounded-md transition-colors ${
        todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'
      }`}>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="flex-1 p-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            required
            autoFocus
          />
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="p-1 text-gray-500 hover:bg-gray-100 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button
            type="submit"
            className="p-1 text-blue-500 hover:bg-blue-50 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </form>
      ) : (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
            className="w-4 h-4 accent-blue-500 cursor-pointer mr-3"
          />
          <span
            className={`flex-1 ${
              todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
            }`}>
            {todo.title}
          </span>
          <div className="flex gap-1 ml-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-gray-500 hover:bg-gray-100 rounded"
              aria-label="Edit task">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="p-1 text-gray-500 hover:bg-gray-100 rounded"
              aria-label="Delete task">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoItem
