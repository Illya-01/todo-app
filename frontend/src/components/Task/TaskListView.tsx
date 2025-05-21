import React from 'react'
import ListHeader from './ListHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import type { Todo } from '../../types'

interface TaskListViewProps {
  listId: string
  name: string
  tasks: Todo[]
  onRenameList: (id: string, name: string) => void
  onDeleteList: (id: string) => void
  onAddTodo: (listId: string, title: string) => void
  onEditTodo: (taskId: string, title: string) => void
  onToggleTodo: (taskId: string) => void
  onDeleteTodo: (taskId: string) => void
}

const TaskListView: React.FC<TaskListViewProps> = ({
  listId,
  name,
  tasks,
  onRenameList,
  onDeleteList,
  onAddTodo,
  onEditTodo,
  onToggleTodo,
  onDeleteTodo,
}) => {
  return (
    <div className="p-5 bg-white border rounded-lg shadow-sm">
      <ListHeader
        listId={listId}
        name={name}
        onRenameList={onRenameList}
        onDeleteList={onDeleteList}
      />

      <TodoInput listId={listId} onAddTodo={onAddTodo} />

      <TodoList
        todos={tasks}
        onToggleTodo={onToggleTodo}
        onEditTodo={onEditTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </div>
  )
}

export default TaskListView
