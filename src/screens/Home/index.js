import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import { 
    Container,
    ContainerScrollView, 
} from './styles';

import SlideCard from '../../components/SlideCard/index';
import Mock from '../../services/mock';

export default function Home(){

    const [slides, setSlides] = useState([]);

    const onFetchSlides = async ()=>{
      let response =  await Mock.fetchSlides();
      console.log('response', response);

      setSlides(response);
    }

    useEffect(()=>{
        onFetchSlides();
    }, []);

    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#111"/>
        <Container>
            <ContainerScrollView>
               {
                 slides && slides.map((slide,index)=>(
                       <SlideCard key={index} slide ={slide}/>)
                   )
               }

            </ContainerScrollView>

            
        </Container>
        </>
    );
}