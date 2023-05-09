import * as React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
class Home extends React.Component {
  render() {
    const description =
      'The MD Technical Education app is a user-friendly and comprehensive mobile application designed to enhance technical education and skills development. It provides a convenient platform for students, professionals, and enthusiasts to access a wide range of technical courses, tutorials, and resources. ';
    return (
      <ScrollView>
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
      </ScrollView>
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
    textAlign: 'justify',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
});
