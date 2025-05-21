import React, { useState } from 'react'
import TaskListView from '../components/Task/TaskListView'
import Modal from '../components/Modal'
import { useTodoLists } from '../hooks/useTodoLists'

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newListName, setNewListName] = useState('')

  const {
    taskLists,
    addList,
    renameList,
    deleteList,
    addTodo,
    editTodo,
    toggleTodo,
    deleteTodo,
  } = useTodoLists()

  const handleAddList = (e: React.FormEvent) => {
    e.preventDefault()
    if (addList(newListName)) {
      setNewListName('')
      setIsModalOpen(false)
    }
  }

  return (
    <div className="container max-w-4xl p-4 mx-auto">
      <header className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold">Task Manager</h1>
      </header>

      <div className="mb-8 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          + Create New List
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New List">
        <form onSubmit={handleAddList}>
          <input
            type="text"
            value={newListName}
            onChange={e => setNewListName(e.target.value)}
            placeholder="Enter list name"
            className="w-full p-2 border rounded mb-4"
            required
            autoFocus
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 mr-2 bg-gray-200 rounded">
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded">
              Create
            </button>
          </div>
        </form>
      </Modal>

      {taskLists.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-1">
          {taskLists.map(list => (
            <TaskListView
              key={list.id}
              listId={list.id}
              name={list.name}
              tasks={list.tasks}
              onRenameList={renameList}
              onDeleteList={deleteList}
              onAddTodo={addTodo}
              onEditTodo={editTodo}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-white border rounded-lg">
          <p className="text-gray-500">
            No task lists yet. Create your first list above!
          </p>
        </div>
      )}
    </div>
  )
}

export default Dashboard
