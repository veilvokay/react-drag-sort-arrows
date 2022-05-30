import React, { useRef } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import Xarrow, { refType, useXarrow } from 'react-xarrows'
import { IAlbum } from '../types/AlbumTypes'

interface IAlbumProps {
    albumKey: string,
    currentAlbum: IAlbum,
}

const Album = (props: IAlbumProps) => {
    const {albumKey, currentAlbum} = props;
    
    return (
        <>
            <Droppable droppableId={albumKey}>
                {(provided, snapshot) => {
                    return (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={'single-album'}
                        >
                            <h3 className='title-h3 single-album__title'>{currentAlbum.name}</h3>
                            {currentAlbum.photos.map((photo, index) => {
                                return (
                                    <Draggable key={photo.id} index={index} draggableId={photo.id}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    className={`photo-target`}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <div className="arrow-pointer" id={photo.id}></div>
                                                </div>

                                            )
                                        }}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
            {/* {currentAlbum.photos.map((photo, index) => {
                return (
                 <Xarrow start={photo.arrowTargetId} end={photo.id} key={index} />
                )
            })} */}
        </>
    )
}

export default Album