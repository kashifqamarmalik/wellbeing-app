/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Header, Content, Left, Body, Segment, Button, Right, Text } from 'native-base';
import {StyleSheet} from 'react-native';
import Helper from '../components/Helper';
import HelpSeeker from '../components/HelpSeeker';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const Reach = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleSingleIndexSelect = (index) => {
        setSelectedIndex(index);
    };
    return (
        <Container>
            <SegmentedControlTab
                values={['Seeker', 'Helper']}
                selectedIndex={selectedIndex}
                tabStyle={styles.tabStyle}
                activeTabStyle={styles.activeTabStyle}
                onTabPress={handleSingleIndexSelect}
                tabTextStyle={styles.text}
                tabsContainerStyle={styles.container}
            />
            {selectedIndex === 0 && (
                <HelpSeeker />
            )}
            {selectedIndex === 1 && (
                <Helper />)}
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#183693',
    },
    tabStyle: {
        borderColor: '#183693',
        marginTop: 15,
      },
      activeTabStyle: {
        backgroundColor: '#183693',
        color: '#ffffff',
      },
})

export default Reach;

