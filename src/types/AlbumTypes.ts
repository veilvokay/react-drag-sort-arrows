import { refType } from "react-xarrows"
import { ISinglePhoto } from "./PhotoTypes"

export interface IAlbum {
    id: string,
    name: string,
    photos: ISinglePhoto[],
    arrowEnd: refType | null,
}

export interface IAlbums {
    [key: string]: IAlbum
};
