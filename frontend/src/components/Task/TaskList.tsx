import React from 'react'
import TaskItem from './TaskItem'
import type { Task } from '../../types'

interface TaskListProps {
  tasks: Task[]
  onToggleTask: (taskId: string) => void
  onEditTask: (taskId: string, title: string, description: string) => void
  onDeleteTask: (taskId: string) => void
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onEditTask,
  onDeleteTask,
}) => {
  if (tasks.length === 0) {
    return (
      <p className="py-4 text-center text-gray-500">No tasks in this list yet.</p>
    )
  }

  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleTask}
          onEdit={onEditTask}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  )
}

export default TaskList
