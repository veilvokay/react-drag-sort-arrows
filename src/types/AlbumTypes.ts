import { ISinglePhoto } from "./PhotoTypes"

export interface IAlbum {
    id: string,
    name: string,
    photos: ISinglePhoto[],
}

export interface IAlbums {
    [key: string]: IAlbum
};
