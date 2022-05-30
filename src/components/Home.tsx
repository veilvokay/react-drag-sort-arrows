import React from "react";
import { IAlbums } from "../types/AlbumTypes";
import { ISinglePhoto } from "../types/PhotoTypes";
import Albums from "./Albums";
import { albumsData, photosData } from "./data/WebsiteData";
import Container from "./layout/Container";
import View from "./layout/View";
import Photos from "./Photos";

export default class Home extends React.Component {
    private _albums: IAlbums;
    private _photos: ISinglePhoto[];

    constructor(props: any) {
        super(props);
        this._albums = albumsData;
        this._photos = photosData;
    }

    render() {
        return (
            <Container>
                <View className="main">
                    <Albums albums={this._albums} />
                    <Photos photos={this._photos} />
                </View>
            </Container>
        )
    } 
}