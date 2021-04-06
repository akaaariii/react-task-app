import React, { useState } from 'react'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import data from './data'
import Column from './components/Column'
import Header from './components/Header'

const App = () => {
  const [todos, setTodos] = useState(data)

  const onDragEnd = (result) => {
    // console.log(result);
    const { destination, source, draggableId } = result;
    if(!destination) {
      return
    }
    if(destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    const column = todos.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);

    // Switch the order
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    }
    const newTodos = {
      ...todos,
      columns: {
        ...todos.columns,
        [newColumn.id]: newColumn
      }
    };
    setTodos(newTodos);
  }

  return (
    <>
      <Header />
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Container>
          {todos.columnOrder.map((columnId) => {
            const column = todos.columns[columnId];
            const tasks = column.taskIds.map((taskId) => todos.tasks[taskId]);
    
            return <Column key={column.id} column={column} tasks={tasks} />
          })}
        </Container>
      </DragDropContext>
    </>
  )
}

export default App


const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;