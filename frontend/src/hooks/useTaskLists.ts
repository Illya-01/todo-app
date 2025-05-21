import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import type { TaskList, Task } from '../types'

export function useTaskLists() {
  const [taskLists, setTaskLists] = useState<TaskList[]>([])

  // Add a new task list
  const addList = (name: string) => {
    if (name.trim()) {
      const newList: TaskList = {
        id: uuid(),
        name,
        tasks: [],
      }
      setTaskLists(prevLists => [...prevLists, newList])
      return true
    }
    return false
  }

  // Rename a task list
  const renameList = (listId: string, newName: string) => {
    setTaskLists(
      taskLists.map(list => (list.id === listId ? { ...list, name: newName } : list))
    )
  }

  // Delete a task list
  const deleteList = (listId: string) => {
    setTaskLists(taskLists.filter(list => list.id !== listId))
  }

  // Add a new task to a list
  const addTask = (listId: string, title: string, description: string) => {
    setTaskLists(
      taskLists.map(list => {
        if (list.id === listId) {
          const newTask: Task = {
            id: uuid(),
            title,
            description,
            completed: false,
          }
          return {
            ...list,
            tasks: [...list.tasks, newTask],
          }
        }
        return list
      })
    )
  }

  // Edit a task
  const editTask = (taskId: string, title: string, description: string) => {
    setTaskLists(
      taskLists.map(list => ({
        ...list,
        tasks: list.tasks.map(task =>
          task.id === taskId ? { ...task, title, description } : task
        ),
      }))
    )
  }

  // Toggle a task's completed status
  const toggleTask = (taskId: string) => {
    setTaskLists(
      taskLists.map(list => ({
        ...list,
        tasks: list.tasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        ),
      }))
    )
  }

  // Delete a task
  const deleteTask = (taskId: string) => {
    setTaskLists(
      taskLists.map(list => ({
        ...list,
        tasks: list.tasks.filter(task => task.id !== taskId),
      }))
    )
  }

  return {
    taskLists,
    addList,
    renameList,
    deleteList,
    addTask,
    editTask,
    toggleTask,
    deleteTask,
  }
}
