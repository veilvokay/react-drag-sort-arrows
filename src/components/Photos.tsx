import React from 'react'
import { ISinglePhoto } from '../types/PhotoTypes'
import View from './layout/View';

interface IPhotosProps {
    photos: ISinglePhoto[],
}

const Photos = (props: IPhotosProps) => {
    const { photos } = props;

    return (
        <View className='photos-wrap'>
            {photos.map((photo, index) => {
                return (
                    <div className="single-photo" key={photo.id} id={photo.arrowTargetId}>
                        <h3 className='title-h3 single-photo__title'>
                            {photo.name}
                        </h3>
                    </div>
                )
            })}
        </View>
    )
}

export default Photos