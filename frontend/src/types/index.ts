export interface Task {
  id: string
  title: string
  description: string
  completed: boolean
}

export interface TaskList {
  id: string
  name: string
  tasks: Task[]
}
