import axios from 'axios'

const API_URL = 'http://localhost:5000/api/todos'

export interface Todo {
  _id: string
  title: string
  completed: boolean
}

export async function fetchTodos(): Promise<Todo[]> {
  const res = await axios.get<Todo[]>(API_URL)
  return res.data
}

export async function createTodo(title: string): Promise<Todo> {
  const res = await axios.post<Todo>(API_URL, { title })
  return res.data
}

export async function updateTodo(
  id: string,
  data: Partial<Pick<Todo, 'title' | 'completed'>>
): Promise<Todo> {
  const res = await axios.put<Todo>(`${API_URL}/${id}`, data)
  return res.data
}

export async function deleteTodo(id: string): Promise<void> {
  await axios.delete(`${API_URL}/${id}`)
}
