/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View,} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CustomButton from '../components/CustomButton';
import {Chart} from 'react-native-responsive-linechart/lib/Chart';
import {VerticalAxis} from 'react-native-responsive-linechart/lib/VerticalAxis';
import {HorizontalAxis} from 'react-native-responsive-linechart/lib/HorizontalAxis';
import {Line} from 'react-native-responsive-linechart/lib/Line';
import AssessmentAPI from '../api/AssessmentAPI';
import {capitalize, jsonArrayToData} from '../utils/Utility';
import {AuthContext} from '../components/context';
import UserAPI from "../api/UserAPI";
import {useFocusEffect} from "@react-navigation/native";

const Profile = (props) => {
    const goToUsePoint = () => {
        props.navigation.navigate('UsePoint');
    };

    const [username, setUsername] = useState(undefined);
    const [userId, setUserId] = useState(undefined);
    const [dataFeel, setDataFeel] = useState([{x: 0, y: 0}]);
    const [dataWork, setDataWork] = useState([{x: 0, y: 0}]);
    const [userPoints, setUserPoints] = useState(0);
    const [assAmount, setAssAmount] = useState(0);

    const {signOut} = React.useContext(AuthContext);

    const getUserId = async () => {
        try {
            return await AsyncStorage.getItem('userid');
        } catch (err) {
            console.log('Error in Profile: ', err);
        }
    };

    const getUsername = async () => {
        try {
            return await AsyncStorage.getItem('userName');
        } catch (err) {
            console.log('Error in Profile: ', err);
        }
    };

    useEffect(() => {
        getUsername().then((name) => setUsername(capitalize(name)));
        getUserId().then((id) => {
            setUserId(id);
        });
    }, []);

    useFocusEffect(React.useCallback(() => {
        try {
            if (userId !== undefined) {
                UserAPI().findUserByID(userId).then(res => {
                    if (res.points !== undefined) {
                        setUserPoints(res.points);
                    }
                });
            }
        } catch (e) {
            console.log('error: ', e);
        }
    }, [userId])
);

    useFocusEffect(React.useCallback(() => {
            if (userId !== undefined) {
                AssessmentAPI()
                    .getUserAssessments(userId, '6026848f720e2f5db8c09ca9')
                    .then((res) => {
                        setAssAmount(res.length);
                        let datas = jsonArrayToData(res);
                        if (datas.dataWorkload.length > 0) {
                            setDataWork(datas.dataWorkload);
                        }
                        if (datas.dataFeeling.length > 0) {
                            setDataFeel(datas.dataFeeling);
                        }
                    })
                    .catch((e) => console.log(e));
            }
        }, [userId])
    );
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <ScrollView>
                <View style={styles.wrapContainer}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
                        }}
                    />
                    {username ? (
                        <Text style={styles.name}>{username}</Text>
                    ) : (
                        <Text style={styles.name}>Loading username</Text>
                    )}
                    <View style={styles.statistics}>
                        <View style={styles.statisticsItem}>
                            <Text style={styles.text}>Current Points</Text>
                            <Text style={styles.text}>{userPoints}</Text>
                        </View>
                        <View style={styles.statisticsItem}>
                            <Text style={styles.text}>Surveys Taken</Text>
                            <Text style={styles.text}>{assAmount}</Text>
                        </View>
                    </View>
                    <View>
                        <CustomButton
                            title="         Use Points         "
                            onPress={() => {
                                goToUsePoint();
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>
                            Below is your assessment results for the current week, from Sunday
                            to Saturday
                        </Text>
                    </View>
                    <View style={{marginTop: '10%'}}>
                        <Chart
                            style={{height: '50%', width: '100%', backgroundColor: '#eee'}}
                            xDomain={{min: 0, max: 6}}
                            yDomain={{min: 0, max: 10}}
                            padding={{left: 20, top: 20, bottom: 20, right: 20}}>
                            <VerticalAxis tickValues={[0, 2, 4, 6, 8, 10]}/>
                            <HorizontalAxis tickCount={7}/>
                            <Line
                                data={dataWork}
                                smoothing="none"
                                theme={{stroke: {color: 'green', width: 1.5}}}
                            />
                            <Line
                                data={dataFeel}
                                smoothing="none"
                                theme={{stroke: {color: 'blue', width: 1.5}}}
                            />
                        </Chart>
                        <View>
                            <Text style={styles.textGreen}>Red: workload</Text>
                            <Text style={styles.textBlue}>Blue: feeling</Text>
                        </View>
                        <CustomButton
                            style={{backgroundColor: 'red', marginTop: '10%'}}
                            title="           Sign Out           "
                            onPress={() => {
                                signOut();
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapContainer: {
        marginHorizontal: 20,
        marginVertical: '5%',
    },
    avatar: {
        width: '53%',
        height: '17%',
        borderRadius: 500,
        borderWidth: 4,
        borderColor: 'white',
        position: 'absolute',
        marginTop: '7%',
        zIndex: 2,
    },
    name: {
        color: '#023e8a',
        fontWeight: 'bold',
        fontSize: 30,
        position: 'absolute',
        marginTop: '35%',
        zIndex: 2,
        right: '5%',
    },
    statistics: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
        marginTop: '50%',
    },
    statisticsItem: {
        width: '50%',
        paddingVertical: '10%',
    },
    text: {
        textAlign: 'center',
        color: '#023e8a',
        fontSize: 20,
    },
    textGreen: {
        textAlign: 'center',
        color: 'green',
        fontSize: 20,
    },
    textBlue: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 20,
    },
});

export default Profile;
