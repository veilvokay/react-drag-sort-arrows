import React from 'react';
import View from './View';

interface ContainerProps {
    className?: string;
    children?: any;
    divRef?: any;
}

export default function Container(props: ContainerProps) {
    return (
        <View className={`container ${props.className || ''}`} divRef={props.divRef || null}>
            {props.children}
        </View>
    );
}
