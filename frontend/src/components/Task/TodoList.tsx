import React from 'react'
import TodoItem from './TodoItem'
import type { Todo } from '../../types'

interface TodoListProps {
  todos: Todo[]
  onToggleTodo: (taskId: string) => void
  onEditTodo: (taskId: string, title: string) => void
  onDeleteTodo: (taskId: string) => void
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onEditTodo,
  onDeleteTodo,
}) => {
  if (todos.length === 0) {
    return (
      <p className="py-4 text-center text-gray-500">No tasks in this list yet.</p>
    )
  }

  return (
    <div className="space-y-2">
      {todos.map(task => (
        <TodoItem
          key={task.id}
          todo={task}
          onToggleComplete={onToggleTodo}
          onEdit={onEditTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
