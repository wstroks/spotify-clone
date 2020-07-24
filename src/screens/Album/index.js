import React, { useState } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import musics from '../../services/music.json';

import {
    Container,
    ContainerHeader,
    Photo,
    ContainerNavBar,
    GroupItemNavBar,
    ButtonFollow,
    ContainerInfoBand,
    BandName,
    BandFooter,
    Content,
    ButtonRandomOrder,
    ButtonRondomOrderText,
    InfoCategory,
    ContainerMusic,
    MusicScroll,
    Music,
    MusicGroupAllItens,
    MusicNumber,
    MusicGroupItens,
    MusicName,
    MusicListening

} from './styles';

const Musics = () => {
    return musics && musics.map((music, index) => (
       
            <Music key={index}>
                <MusicGroupAllItens>
                    <MusicNumber>{index} </MusicNumber>
                    <MusicGroupItens>
                        <MusicName>{music.name}</MusicName>
                        <MusicListening>{music.listening}</MusicListening>
                    </MusicGroupItens>
                </MusicGroupAllItens>
                <FontAwesome5 name="ellipsis-v" color="#aaa" size={16} style={{ padding: 10 }} />
            </Music>
        
    ));
}

export default function Album() {
    const [iconConfigure] = useState({
        size: 18,
        color: "#fff"
    })

    return (
        <Container>
            <ContainerHeader>
                <Photo source={{ uri: "https://i.scdn.co/image/7e121d480915d253041b6f0ab67f13c05d017b09" }} />
                <ContainerNavBar>
                    <FontAwesome5 name="arrow-left" {...iconConfigure} />
                    <GroupItemNavBar>
                        <ButtonFollow>Seguindo</ButtonFollow>
                        <FontAwesome5 name="ellipsis-v" {...iconConfigure} />
                    </GroupItemNavBar>
                </ContainerNavBar>
                <ContainerInfoBand>
                    <BandName>Racionais MC's</BandName>
                    <BandFooter>1.288.900 ouvintes mensais</BandFooter>

                </ContainerInfoBand>
            </ContainerHeader>
            <Content>
                <ButtonRandomOrder>
                    <ButtonRondomOrderText>Ordem Aleatória</ButtonRondomOrderText>
                </ButtonRandomOrder>
                <InfoCategory>Popular</InfoCategory>
                <ContainerMusic>
                    
                    <Musics />
                </ContainerMusic>


            </Content>
        </Container>
    );
}