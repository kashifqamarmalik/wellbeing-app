/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import CustomButton from '../components/CustomButton';
// import {Chart, VerticalAxis, HorizontalAxis, Line} from 'react-native-responsive-linechart'
import {Chart} from 'react-native-responsive-linechart/lib/Chart';
import {VerticalAxis} from 'react-native-responsive-linechart/lib/VerticalAxis';
import {HorizontalAxis} from 'react-native-responsive-linechart/lib/HorizontalAxis';
import {Line} from 'react-native-responsive-linechart/lib/Line';

import {AuthContext} from '../components/context';

const data1 = [
  {x: 0, y: 1},
  {x: 1, y: 7},
  {x: 8, y: 13},
  {x: 9, y: 11.5},
  {x: 10, y: 12},
];

const data2 = [
  {x: 0, y: 15},
  {x: 1, y: 10},
  {x: 2, y: 12},
  {x: 3, y: 7},
  {x: 8, y: 12},
  {x: 9, y: 13.5},
  {x: 10, y: 18},
];

const Profile = (props) => {
  const goToUsePoint = () => {
    props.navigation.navigate('UsePoint');
  };

  const {signOut} = React.useContext(AuthContext);

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
          <Text style={styles.name}>John Doe</Text>

          <View style={styles.statistics}>
            <View style={styles.statisticsItem}>
              <Text style={styles.text}>Current Points</Text>
              <Text style={styles.text}>150</Text>
            </View>
            <View style={styles.statisticsItem}>
              <Text style={styles.text}>Surveys Taken</Text>
              <Text style={styles.text}>7</Text>
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
          <View style={{marginTop: '10%'}}>
            <Chart
              style={{height: '50%', width: '100%', backgroundColor: '#eee'}}
              xDomain={{min: 0, max: 10}}
              yDomain={{min: 0, max: 20}}
              padding={{left: 20, top: 20, bottom: 20, right: 20}}>
              <VerticalAxis tickValues={[0, 4, 8, 12, 16, 20]} />
              <HorizontalAxis tickCount={3} />
              <Line
                data={data1}
                smoothing="none"
                theme={{stroke: {color: 'red', width: 1.5}}}
              />
              <Line
                data={data2}
                smoothing="none"
                theme={{stroke: {color: 'blue', width: 1.5}}}
              />
            </Chart>
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
    height: '20%',
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
});

export default Profile;
