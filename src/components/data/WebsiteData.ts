import { useRef } from "react";
import { v4 } from "uuid";
import { toCamelCaseString } from "../../helpers/TextHelpers";
import { IAlbums } from "../../types/AlbumTypes"
import { ISinglePhoto } from "../../types/PhotoTypes";

export const photosData: ISinglePhoto[] = [
    {
        id: v4(),
        name: 'Photo 1',
        arrowTargetId: 'photo1'
    },
    {
        id: v4(),
        name: 'Photo 2',
        arrowTargetId: 'photo2'
    },
    {
        id: v4(),
        name: 'Photo 3',
        arrowTargetId: 'photo3'
    },
    {
        id: v4(),
        name: 'Photo 4',
        arrowTargetId: 'photo4'
    },
    {
        id: v4(),
        name: 'Photo 5',
        arrowTargetId: 'photo5'
    },
];

export const albumsData: IAlbums = {
    "album1": {
        id: v4(),
        name: "Album 1",
        photos: [photosData[0], photosData[1]],
        arrowEnd: null,
    },
    "album2": {
        id: v4(),
        name: "Album 2",
        photos: [photosData[2]],
        arrowEnd: null,
    },
    "album3": {
        id: v4(),
        name: "Album 3",
        photos: [photosData[3], photosData[4]],
        arrowEnd: null,
    }
}