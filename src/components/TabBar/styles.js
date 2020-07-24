import styled from 'styled-components/native';

export const Container = styled.View`
    height: 80px;
    background-color: #222;
    border-top-color: #000;
    border-width: 1px
`;

export const SubContainer = styled.View`
    height: 70px;
    flex-direction: row;
    
`;

export const GroupAction =  styled.View`
    justify-content: center;
    flex: 1;
    align-items: center;

`;

export const ActionName = styled.Text`
    color: #fff;
    font-size: 11px;
    padding: 5px;

`;
