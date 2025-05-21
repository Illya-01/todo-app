import React from 'react'
import ListHeader from './ListHeader'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import type { Task } from '../../types'

interface TaskListViewProps {
  listId: string
  name: string
  tasks: Task[]
  onRenameList: (id: string, name: string) => void
  onDeleteList: (id: string) => void
  onAddTask: (listId: string, title: string, description: string) => void
  onEditTask: (taskId: string, title: string, description: string) => void
  onToggleTask: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
}

const TaskListView: React.FC<TaskListViewProps> = ({
  listId,
  name,
  tasks,
  onRenameList,
  onDeleteList,
  onAddTask,
  onEditTask,
  onToggleTask,
  onDeleteTask,
}) => {
  return (
    <div className="p-5 bg-white border rounded-lg shadow-sm">
      <ListHeader
        listId={listId}
        name={name}
        onRenameList={onRenameList}
        onDeleteList={onDeleteList}
      />

      <TaskInput listId={listId} onAddTask={onAddTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={onToggleTask}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  )
}

export default TaskListView
