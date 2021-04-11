/* eslint-disable prettier/prettier */
import React from 'react';
import { Container } from 'native-base';
import HelpList from '../components/HelpList';
import { getAllRequest } from '../api/RequestAPI';
import { RequestContext } from '../context/RequestContext';

const Helper = () => {
    const { requests, setRequests } = React.useContext(RequestContext);
    React.useEffect(() => {
        const getRequestList = async () => {
            try {
                let data = await getAllRequest();
                console.log('data', data);
                setRequests(data.reverse());
            } catch (e) {
                console.log(e.message);
            }
        };
        getRequestList();
    }, [setRequests]);

    return (
        <Container>
            <HelpList
                itemList={requests} />
        </Container>
    );
};
export default Helper;

