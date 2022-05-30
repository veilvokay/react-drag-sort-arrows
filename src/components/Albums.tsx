import React, { useState } from 'react'
import _ from 'lodash'
import { v4 } from 'uuid';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import View from './layout/View';
import { IAlbums } from '../types/AlbumTypes';
import Album from './Album';
import { toCamelCaseString } from '../helpers/TextHelpers';
import { useXarrow } from 'react-xarrows';


interface IAlbumsProps {
    albums: IAlbums,
}

const Albums = (props: IAlbumsProps) => {
    const { albums } = props;
    const [reorderedAlbums, setReorderedAlbums] = useState<IAlbums>(albums);

    const handleDragEnd = (destination: DropResult['destination'], source: DropResult['source'], debug?: boolean) => {
        console.log('from :', source);
        console.log('to :', destination);
        
        if (!destination) return
        if (destination.index === source.index && destination.droppableId === source.droppableId) return

        
        // Copy object of a dragged item
        const itemCopy = {...reorderedAlbums[source.droppableId].photos[source.index]}

        setReorderedAlbums(prev => {
            // Copy item itself
            prev = {...prev};

            // Remove item from the old list
            prev[source.droppableId].photos.splice(source.index, 1);

            // Put it into the new list
            prev[destination.droppableId].photos.splice(destination.index, 0, itemCopy)

            return prev;
        })
    }

    const addAlbum = () => {
        const newAlbumName = prompt('Please enter album\'s name below:');

        if (!newAlbumName) return;

        const newAlbumKey = toCamelCaseString(newAlbumName) as string;

        setReorderedAlbums((prev: IAlbums) => {
            return {
                ...prev,
                [newAlbumKey]: {
                    id: v4(),
                    name: newAlbumName as string,
                    photos: [],
                }
            }
        });
        
    }

    let updateArrows = useXarrow();

    return (
        <View className="albums-wrap" onMouseMove={updateArrows}>
            <DragDropContext onDragEnd={e => handleDragEnd(e.destination, e.source)}>
                    {_.map(reorderedAlbums, (album, key) => (
                        <Album albumKey={key} currentAlbum={album} key={key} />
                    ))}
            </DragDropContext>
            <button className="empty-album" onClick={addAlbum}>
                <h2 className="title-h2">ADD ALBUM</h2>
            </button>
        </View>
    )
}

export default Albums