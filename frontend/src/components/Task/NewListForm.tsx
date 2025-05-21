import React, { useState } from 'react'

interface NewListFormProps {
  onAddList: (name: string) => boolean
}

const NewListForm: React.FC<NewListFormProps> = ({ onAddList }) => {
  const [newListName, setNewListName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onAddList(newListName)) {
      setNewListName('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 rounded-lg">
      <h2 className="mb-4 text-xl font-semibold">Create New List</h2>
      <div className="flex">
        <input
          type="text"
          value={newListName}
          onChange={e => setNewListName(e.target.value)}
          placeholder="Enter list name"
          className="flex-1 p-2 border rounded-l"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600">
          Create List
        </button>
      </div>
    </form>
  )
}

export default NewListForm
