import React from 'react';

import {
    Container,
    Photo,
    ContainerSubTitle,
    SubtitleTitle,
    SubtitleDescription
} from './styles';

export default function Card({item}){
    return (
        <Container>
            <Photo source={{uri: item.photo}}/>
            <ContainerSubTitle>
                <SubtitleTitle> {item.subtitle.title}</SubtitleTitle>
                <SubtitleDescription>{item.subtitle.description}</SubtitleDescription>
            </ContainerSubTitle>
        </Container>
    )
}