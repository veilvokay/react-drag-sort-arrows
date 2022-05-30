import React, { useState } from 'react'
import _, { isObject } from 'lodash'
import Container from './layout/Container'
import View from './layout/View'

import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import {v4} from 'uuid'

const item: IItem = {
    id: v4(),
    name: 'Item one'
}

const item2: IItem = {
    id: v4(),
    name: 'Item two'
}

interface IItem {
    id: string,
    name: string,
}
interface IList {
    [key: string]: {
        title: string,
        items: IItem[],
    }
}

const Test = () => {
    const [text, setText] = useState<string>('');
    const [state, setState] = useState<IList>({
        'todo': {
            title: 'Todo',
            items: [item, item2],
        },
        'in-progress': {
            title: 'In Progress',
            items: [], 
        },
        'done': {
            title: 'Done',
            items: [],
        },
    })

    const handleDragEnd = (destination: DropResult['destination'], source: DropResult['source']) => {
        console.log('from :', source);
        console.log('to :', destination);
        
        if (!destination) return
        if (destination.index === source.index && destination.droppableId === source.droppableId) return

        
        // Copy object of a dragged item
        const itemCopy = {...state[source.droppableId].items[source.index]}

        setState(prev => {
            // Copy item itself
            prev = {...prev};

            // Remove item from the old list
            prev[source.droppableId].items.splice(source.index, 1);

            // Put it into the new list
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

            return prev;
        })
    }

    const addItem = () => {
        setState(prev => {
            return {
                ...prev,
                todo: {
                    title: 'Todo',
                    items: [
                        {
                            id: v4(),
                            name: text,
                        },
                        ...prev.todo.items]
                }
            }
        })

        setText('');
    }

  return (
      <Container>
          <View className='columns-wrapper'>
              <View>
                  <input type="text" name="Create Task" id="createTask" value={text} onChange={e => setText(e.target.value)} />
                  <button onClick={addItem}>Add</button>
              </View>
              <DragDropContext onDragEnd={dropEvent => handleDragEnd(dropEvent.destination, dropEvent.source)}>
                    {_.map(state, (data, key) => (
                        <View className="column"  key={key}>
                            <h3>{data.title}</h3>
                            <Droppable droppableId={key}>
                                {(provided, snapshot) => (
                                    <div 
                                        ref={provided.innerRef} 
                                        {...provided.droppableProps}
                                        className={'droppable-col'}
                                    >
                                        {data.items.map((el, index) => (
                                            <Draggable key={el.id} index={index} draggableId={el.id}>
                                                {(provided) => (
                                                    <div
                                                        className='item'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        {el.name}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </View>
                        )
                    )}
              </DragDropContext>
          </View>
      </Container>
  )
}

export default Test