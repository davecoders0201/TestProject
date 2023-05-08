import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const AboutUs = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Manav Dave </Text>
      <Text style={styles.paraStyle}> I am a React Native developer 😀 </Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={require('../../asset/IMG-20211105-WA00101.jpg')}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          I am Manav Dave a React-Native Developer, Currently Working in the
          Techavidus I am Doing Internship for 3 Months.
        </Text>
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> Skills </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          React-Native, HTML, CSS, JavaScript, Node Js, Git
        </Text>
      </View>

      <View style={styles.menuContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  mainHeader: {
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 40,
    marginBottom: 10,
    fontFamily: 'Nunito_700Bold',
  },

  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 30,
    fontFamily: 'WorkSans_400Regular',
  },

  aboutLayout: {
    backgroundColor: '#4c5dab',
    paddingHorizontal: 30,
    marginTop: 20,
  },

  aboutSubHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    fontFamily: 'Nunito_700Bold',
    alignSelf: 'center',
  },

  aboutPara: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'WorkSans_400Regular',
    lineHeight: 26,
  },

  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});

export default AboutUs;
