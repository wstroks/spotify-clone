import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'

import {
    Container,
    SubContainer,
    GroupAction,
    ActionName,
} from './styles';

export default function TabBar() {

    const [iconConfigure] = useState({
        color: "#fff",
        size:25
    });

    return (
        <Container>
            <SubContainer>
                <GroupAction>
                    <FontAwesome5 name="home" {...iconConfigure} />
                    <ActionName>Inicio</ActionName>
                </GroupAction>

                <GroupAction>
                    <FontAwesome5 name="search" {...iconConfigure} />
                    <ActionName>Buscar</ActionName>
                </GroupAction>

                <GroupAction>
                    <FontAwesome5 name="book" {...iconConfigure} />
                    <ActionName>Sua Biblioteca</ActionName>
                </GroupAction>
            </SubContainer>
        </Container>
    );
}