import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #111;
  
`;

export const ContainerHeader = styled(LinearGradient).attrs({
    colors:['#111','transparent','transparent','#111']
})`
    height: 50%;
    justify-content: space-between;
`;

export const Photo = styled.Image`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 7%;
   
`;

export const ContainerNavBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    
    align-items: center;
`;

export const GroupItemNavBar = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonFollow = styled.Text`
    margin-right: 10px;
    color: #fff;
    border-color: #fff;
    border-width: 1px;
    border-radius: 6px;
    padding: 6px 10px;

`;

export const ContainerInfoBand = styled.View`
    justify-content: center;
    align-items: center;
    padding: 20px;

`;

export const BandName = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    padding: 15px;
`;

export const BandFooter = styled.Text`
    color: #e6e6e6;
    font-size: 12px;
    text-transform: uppercase;

`;


export const Content = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 10px;

`;
export const ButtonRandomOrder = styled.TouchableOpacity`
    background-color: #1dd15d;
    padding: 19px 60px;
    border-radius: 30px;
   

`;

export const ButtonRondomOrderText = styled.Text`
    color: #fff;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;

`;

export const InfoCategory = styled.Text`
    color: #fff;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;


`;

export const ContainerMusic = styled.ScrollView`
    flex: 1;
    width: 100%;
`;
export const MusicScroll = styled.ScrollView`

`;
export const  Music = styled.View`
    flex-direction: row;
    height: 60px;
    align-items: center;
    justify-content: space-between;
`;

export const MusicGroupAllItens = styled.View`
    flex-direction: row;

`;

export const MusicNumber= styled.Text`
    color: #e6e6e6;
    padding: 20px;

`;

export const MusicGroupItens = styled.View`

`;

export const MusicName = styled.Text`
    color: #fff;
    padding: 5px 0px;
    font-size: 16px;

`;
export const MusicListening = styled.Text`
    color: #aaa;
    font-size: 12px;

`;
