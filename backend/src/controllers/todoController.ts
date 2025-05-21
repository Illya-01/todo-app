import { Request, Response } from 'express'
import Todo from '../models/todo'

export const getTodos = async (_: Request, res: Response) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 })
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch todos' })
  }
}

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body
    const todo = new Todo({ title })
    await todo.save()
    res.status(201).json(todo)
  } catch (error) {
    res.status(400).json({ message: 'Failed to create todo' })
  }
}

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { title, completed } = req.body
    const todo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    )

    if (!todo) {
      res.status(404).json({ message: 'Todo not found' })
      return
    }

    res.json(todo)
  } catch (error) {
    res.status(400).json({ message: 'Failed to update todo' })
  }
}

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const todo = await Todo.findByIdAndDelete(id)

    if (!todo) {
      res.status(404).json({ message: 'Todo not found' })
      return
    }

    res.json({ message: 'Todo deleted' })
  } catch (error) {
    res.status(400).json({ message: 'Failed to delete todo' })
  }
}
