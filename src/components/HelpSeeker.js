/* eslint-disable prettier/prettier */
import React from 'react';
import { Form, Textarea, Text, ListItem as BaseListItem, Left, Right } from 'native-base';
import CustomButton from '../components/CustomButton';
import { postRequest, deleteRequest, getSpecificRequest } from '../api/RequestAPI';
import UserAPI from '../api/UserAPI.js';
import { FlatList, View, StyleSheet, Modal } from 'react-native';
import { RequestContext } from '../context/RequestContext';
import AsyncStorage from '@react-native-community/async-storage';

const HelpSeeker = () => {
    const { userRequests, setUserRequests } = React.useContext(RequestContext);

    React.useEffect(() => {
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
        getUserRequests();
    }, [setUserRequests]);

    return (
        <RequestList
            itemList={userRequests}
        />

    );
};

export default HelpSeeker;

const RequestList = (props) => {
    const { userRequests, setUserRequests } = React.useContext(RequestContext);
    const [input, setInput] = React.useState('');

    const getUserRequests = async () => {
        try {
            //let userId = '606580fd2842935724b087b2';
            const userId = await AsyncStorage.getItem('userid');
            let data = await getSpecificRequest(userId);
            console.log('data', data);
            setUserRequests(data.reverse());
        } catch (e) {
            console.log(e.message);
        }
    };

    const submitRequest = async () => {
        try {
            //const userId = '606580fd2842935724b087b2'; //TODO: load current user id
            const userId = await AsyncStorage.getItem('userid');
            console.log('userid', userId);
            if (input.length > 0) {
                const data = { 'user_id': userId, 'description': input };
                const res = await postRequest(data);
                console.log('line15', res);
                setInput('');
                getUserRequests();
            } else {
                alert('Request is empty!');
            }

        } catch (e) {
            throw new Error(e);
        }
    };

    return (
        <View style={{ marginBottom: 63 }}>
            <FlatList
                ListHeaderComponent={
                    <Form style={{ margin: 10 }}>
                        <Textarea
                            rowSpan={5}
                            bordered
                            autoFocus
                            required
                            value={input}
                            placeholder="Short description of your problem"
                            maxLength={500}
                            onChangeText={text => setInput(text)}
                        />
                        <CustomButton title="Request" onPress={() => submitRequest()} />
                    </Form>
                }
                data={props.itemList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <RequestListItem
                    description={item.description}
                    time={item.date}
                    requestId={item._id}
                    helperId={item.helper}
                />}
            />
        </View>
    );
};

const RequestListItem = (props) => {
    const { userRequests, setUserRequests } = React.useContext(RequestContext);
    const [press, setPress] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [helperName, setHelperName] = React.useState('');

    React.useEffect(() => {
        const getHelperUsername = async () => {
            try {
                const helper = await UserAPI().findUserByID(props.helperId);
                setHelperName(helper.username);
                console.log('line110', helper.username);
            } catch (e) {
                throw new Error(e);
            }
        };
        getHelperUsername();
    },[props.helperId]);

    const getUserRequests = async () => {
        try {
            //let userId = '606580fd2842935724b087b2';
            const userId = await AsyncStorage.getItem('userid');
            let data = await getSpecificRequest(userId);
            console.log('data', data);
            setUserRequests(data.reverse());
        } catch (e) {
            console.log(e.message);
        }
    };

        const userDeleteRequest = async () => {
            try {
                const requestId = props.requestId;
                const response = await deleteRequest(requestId);
                console.log('line94,', response);
                setUserRequests(userRequests.filter((p) => p._id !== props.requestId));
                getUserRequests();
            } catch (e) {
                throw new Error(e);
            }
            setModalVisible(!modalVisible);
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
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <CustomButton
                                    title="Close"
                                    onPress={() => setModalVisible(!modalVisible)}
                                    style={{ marginRight: 10 }}
                                />
                                <CustomButton
                                    title="Delete"
                                    onPress={() => userDeleteRequest()}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
                <BaseListItem style={props.helperId ? styles.helped : styles.normal} onPress={() => { setPress(!press); }}>
                    <Left>
                        <Left>
                            {press ?
                                <Text style={styles.desc}>{props.description}</Text>
                                :
                                <Text numberOfLines={1} style={styles.desc}>{props.description}</Text>
                            }
                            <Text style={{ color: '#A9A9A9' }}>{props.time}</Text>
                            {props.helperId &&
                                <Text>Contact: {helperName} </Text>
                            }
                        </Left>
                    </Left>

                    <Right>
                        <CustomButton title="Delete" onPress={() => setModalVisible(!modalVisible)} />
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
        helped: {
            backgroundColor:'#dbf0fd',
            paddingLeft: 10,
            borderColor:'#183693',
        },
        normal: {
            paddingLeft:10,
        }
    });

