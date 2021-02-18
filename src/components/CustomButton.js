/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={{...styles.buttonText, ...props.textStyle}}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#183693',
        borderRadius: 10,
        alignSelf: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    },
});

export default CustomButton;
