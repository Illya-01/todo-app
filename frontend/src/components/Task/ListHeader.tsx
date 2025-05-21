import React, { useState, useEffect } from 'react'

interface ListHeaderProps {
  listId: string
  name: string
  onRenameList: (id: string, name: string) => void
  onDeleteList: (id: string) => void
}

const ListHeader: React.FC<ListHeaderProps> = ({
  listId,
  name,
  onRenameList,
  onDeleteList,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [listName, setListName] = useState(name)

  // Update local state when prop changes
  useEffect(() => {
    setListName(name)
  }, [name])

  const handleSubmitRename = (e: React.FormEvent) => {
    e.preventDefault()
    onRenameList(listId, listName)
    setIsEditing(false)
  }

  return (
    <div className="flex items-center justify-between mb-4 pb-2 border-b">
      {isEditing ? (
        <form onSubmit={handleSubmitRename} className="flex-1">
          <div className="flex gap-2">
            <input
              type="text"
              value={listName}
              onChange={e => setListName(e.target.value)}
              className="flex-1 p-2 border rounded"
              required
              autoFocus
            />
            <button
              type="submit"
              className="px-3 py-1 text-white bg-blue-500 rounded text-sm">
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 bg-gray-200 rounded text-sm">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h2 className="text-xl font-bold">{name}</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-gray-500 hover:bg-gray-100 rounded"
              aria-label="Rename list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button
              onClick={() => onDeleteList(listId)}
              className="p-1 text-gray-500 hover:bg-gray-100 rounded"
              aria-label="Delete list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default ListHeader
