/* eslint-disable prettier/prettier */
import React from 'react';
import { ListItem as BaseListItem, Left, Right, Text } from 'native-base';
import { StyleSheet, Modal, View } from 'react-native';
import CustomButton from './CustomButton';
import { putRequest, getAllRequest, getSpecificRequest } from '../api/RequestAPI';
import { RequestContext } from '../context/RequestContext';
import AsyncStorage from '@react-native-community/async-storage';


const HelpListItem = (props) => {
    const { requests, setRequests } = React.useContext(RequestContext);
    const { userRequests, setUserRequests} = React.useContext(RequestContext);
    const [press, setPress] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);

    const getUserRequests = async () => {
        try {
            const userId = await AsyncStorage.getItem('userid');
            let data = await getSpecificRequest(userId);
            console.log('data', data);
            setUserRequests(data.reverse());
        } catch (e) {
            console.log(e.message);
        }
    };

    const getRequestList = async () => {
        try {
            let data = await getAllRequest();
            console.log('data', data);
            setRequests(data.reverse());
        } catch (e) {
            console.log(e.message);
        }
    };


    const updateRequest = async () => {
        try {
            const helper = await AsyncStorage.getItem('userid');
            //const helper = '607c4785c6ef43520495f51c'; //TODO: load current user id
            const data = { 'helper_id': helper, 'request_id': props.requestId };
            console.log('line16 listitem', data);
            const res = await putRequest(data);
            console.log('line18 listitem', res);
            getRequestList();
            getUserRequests();
            setModalVisible(!modalVisible);
        } catch (e) {
            throw new Error(e);
        }
    };

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={{ fontSize: 30, color: '#183693' }}>Confirmation</Text>
                        <View style ={{display: 'flex', flexDirection: 'row'}}>
                            <CustomButton
                                title="Close"
                                onPress={() => setModalVisible(!modalVisible)}
                                style={{marginRight: 10}}
                            />
                            <CustomButton
                                title="Help"
                                onPress={() => updateRequest()}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
            <BaseListItem onPress={() => { setPress(!press) }}>
                <Left>
                    <Left>
                        {press ?
                            <Text style={styles.desc}>{props.description}</Text>
                            :
                            <Text numberOfLines={1} style={styles.desc}>{props.description}</Text>
                        }
                        <Text style={{ color: '#A9A9A9' }}>{props.time}</Text>
                    </Left>
                </Left>

                <Right>
                    <CustomButton title="Help" onPress={() => setModalVisible(!modalVisible)} />
                </Right>
            </BaseListItem>
        </View>
    );
};

const styles = StyleSheet.create({
    desc: {
        fontSize: 20,
        textAlign: 'justify',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modal: {
        margin: 20,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});


export default HelpListItem;
