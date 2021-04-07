import React, { useState } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import data from './data'
import Column from './components/Column'
import Header from './components/Header'

const App = () => {
  const [todos, setTodos] = useState(data)

  const onDragEnd = (result) => {
    // console.log(result);
    const { destination, source, draggableId, type } = result;
    if(!destination) {
      return
    }
    if(destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    if(type === 'column') {
      const newColumnOrder = Array.from(todos.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newTodos = {
        ...todos,
        columnOrder: newColumnOrder
      };
      setTodos(newTodos);
      return;
    }

    const start = todos.columns[source.droppableId];
    const finish = todos.columns[destination.droppableId];

    if(start === finish) {
      const newTaskIds = Array.from(start.taskIds);
  
      // Switch the order
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
  
      const newColumn = {
        ...start,
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
      return;
    }

    // Moving from one list to another column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newTodos = {
      ...todos,
      columns: {
        ...todos.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setTodos(newTodos);
  }

  return (
    <>
      <Header />
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <Container
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.columnOrder.map((columnId, index) => {
                const column = todos.columns[columnId];
                const tasks = column.taskIds.map((taskId) => todos.tasks[taskId]);
        
                return <Column key={column.id} column={column} tasks={tasks} index={index} />
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default App


const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;