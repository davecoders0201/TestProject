import * as React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
class Home extends React.Component {
  render() {
    const description =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ';
    return (
      <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={require('../../asset/HomeLogo.jpg')}
          />
          <Text style={styles.mainHeader}>Welcome to</Text>
          <Text style={styles.mainHeaderChild}>MD Technical</Text>
          <Text style={styles.paraStyle}>{description}</Text>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#344055',
    marginTop: 15,
  },

  mainHeaderChild: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#4c5dab',
    marginTop: 0,
  },

  paraStyle: {
    textAlign: 'left',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
});
