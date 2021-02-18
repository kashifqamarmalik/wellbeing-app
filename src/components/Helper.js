/* eslint-disable prettier/prettier */
import React from 'react';
import { Container } from 'native-base';
import HelpList from '../components/HelpList';

const Helper = () => {
    const getData = () => {
        return [
            {
                key: '1',
                description: "Lorem ipsum on 1500-luvulta lähtien olemassa ollut teksti, jota käytetään usein täytetekstinä ulkoasun testaamiseen graafisessa suunnittelussa, kun oikeata tekstisisältöä ei vielä ole. Lorem ipsumia käytetään näyttämään, miltä esimerkiksi kirjasin tai julkaisun tekstin asettelu näyttävät",
                date: "27-11-1333",
            },
            {
                key: '2',
                description: "metropolia university of applied sciences",
                date: "27-13-1333",
            },
            {
                key: '3',
                description: "kapteeninkatu 7 eira",
                date: "27-13-1333",
            },
        ];
    };
    return (
        <Container>
        <HelpList
            itemList={getData()} />
        </Container>
    );
};
export default Helper;

