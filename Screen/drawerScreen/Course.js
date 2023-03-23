import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

// import the Course Api which is created in the API folder
import Courseapi from '../apiCourse/Courseapi';

const Course = ({navigation}) => {
  const courseCard = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.mainHeader}>{item.title}</Text>

          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate('CourseDetails', {
                  courseId: item.id,
                })
              }>
              <Text style={styles.buttonText}> course Details </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    // Flatlist is a Prop which is use for the Scrolling the Items 
    <FlatList
      keyExtractor={item => item.id}
      data={Courseapi}
      renderItem={courseCard}
    />
  );
};


// This is One type of css in the React Native File
const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    textAlign: 'center',
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: '#344055',
    textTransform: 'uppercase',
    // fontWeight: 500,
    paddingBottom: 15,
    textAlign: 'center',
    fontFamily: 'Nunito_700Bold',
  },
  description: {
    textAlign: 'left',
    fontFamily: 'WorkSans_400Regular',
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: '#7d7d7d',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#ff5435',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#eee',
    fontFamily: 'WorkSans_400Regular',
    textTransform: 'capitalize',
  },
});

export default Course;
