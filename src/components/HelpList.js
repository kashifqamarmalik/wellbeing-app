/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View } from 'react-native';
import HelpListItem from './HelpListItem';

const HelpList = (props) => {
    return (
        <View>
            <FlatList
                data={props.itemList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <HelpListItem
                    description={item.description}
                    time={item.date}
                />}
            />
        </View>
    );
};

export default HelpList;
