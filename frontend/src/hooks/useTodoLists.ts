import { useEffect, useState } from 'react'
import * as api from '../services/api'
import type { Todo } from '../types'

export function useTodoLists() {
  const [todoLists, setTodoLists] = useState([
    {
      id: 'default',
      name: 'My Todos',
      tasks: [] as Todo[],
    },
  ])
  const [loading, setLoading] = useState(true)

  // map backend todo to frontend Task
  const mapTodo = (todo: api.Todo): Todo => ({
    id: todo._id,
    title: todo.title,
    completed: todo.completed,
  })

  useEffect(() => {
    api.fetchTodos().then(todos => {
      setTodoLists([
        {
          id: 'default',
          name: 'My Todos',
          tasks: todos.map(mapTodo),
        },
      ])
      setLoading(false)
    })
  }, [])

  const addTodo = async (_listId: string, title: string) => {
    const todo = await api.createTodo(title)
    setTodoLists(listArr =>
      listArr.map(list =>
        list.id === 'default'
          ? { ...list, tasks: [mapTodo(todo), ...list.tasks] }
          : list
      )
    )
  }

  const editTodo = async (taskId: string, title: string) => {
    const updated = await api.updateTodo(taskId, { title })
    setTodoLists(listArr =>
      listArr.map(list =>
        list.id === 'default'
          ? {
              ...list,
              tasks: list.tasks.map(t => (t.id === taskId ? mapTodo(updated) : t)),
            }
          : list
      )
    )
  }

  const toggleTodo = async (taskId: string) => {
    const list = todoLists[0]
    const task = list.tasks.find(t => t.id === taskId)
    if (!task) return
    const updated = await api.updateTodo(taskId, { completed: !task.completed })
    setTodoLists(listArr =>
      listArr.map(list =>
        list.id === 'default'
          ? {
              ...list,
              tasks: list.tasks.map(t => (t.id === taskId ? mapTodo(updated) : t)),
            }
          : list
      )
    )
  }

  const deleteTodo = async (taskId: string) => {
    await api.deleteTodo(taskId)
    setTodoLists(listArr =>
      listArr.map(list =>
        list.id === 'default'
          ? {
              ...list,
              tasks: list.tasks.filter(t => t.id !== taskId),
            }
          : list
      )
    )
  }

  // TODO: Implement these functions
  const addList = () => false
  const renameList = () => {}
  const deleteList = () => {}

  return {
    taskLists: todoLists,
    loading,
    addList,
    renameList,
    deleteList,
    addTodo,
    editTodo,
    toggleTodo,
    deleteTodo,
  }
}
