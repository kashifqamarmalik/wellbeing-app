/* eslint-disable prettier/prettier */
import React from 'react';
import {Form, Textarea } from 'native-base';
import CustomButton from '../components/CustomButton';

const HelpSeeker = () => {
    const [input, setInput] = React.useState('');

    return (
        <Form style={{ margin: 10 }}>
                    <Textarea
                        rowSpan={5}
                        bordered
                        placeholder="Short description of your problem"
                        maxLength={500}
                        onChangeText={text=>setInput(text)}
                        />
                    <CustomButton title="Request" />
                </Form>
    );
};

export default HelpSeeker;
