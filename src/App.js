import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import data from './data'
import Column from './components/Column'

const App = () => {
  const onDragEnd = (result) => {

  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
  )
}

export default App
