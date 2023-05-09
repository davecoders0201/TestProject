import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import CheckBox from '@react-native-community/checkbox';

const ContactUs = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPhone, setCheckValidPhone] = useState(false);
  const nameRemove = useRef(null);
  const emailRemove = useRef(null);
  const phoneRemove = useRef(null);
  const helpRemove = useRef(null);

  const submit = async () => {
    if (!name && !email && !phone && !message) {
      alert('Please enter the all field');
      return;
    } else {
      alert(`Thank You ${name}`);
      // navigation.navigate('Home');
    }
    nameRemove.current.clear();
    emailRemove.current.clear();
    phoneRemove.current.clear();
    helpRemove.current.clear();
  };

  const validateEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const validatePhone = phone => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(phone);
    if (re.test(phone) || regex.test(phone)) {
      setCheckValidPhone(false);
    } else {
      setCheckValidPhone(true);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your knowledge </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your name </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Manav Dave'}
          value={name}
          onChangeText={userdata => setName(userdata)}
          ref={nameRemove}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Email </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'demo@gmail.com'}
          // value={email}
          onChangeText={text => validateEmail(text)}
          onChange={validateEmail}
          ref={emailRemove}
        />
      </View>

      {checkValidEmail ? (
        <Text style={styles.textFailed}>Please Enter Proper Email</Text>
      ) : (
        <Text style={styles.blockText}> </Text>
      )}

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your mobile </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={'Enter Phone'}
          keyboardType="numeric"
          // value={phone}
          onChangeText={phone => validatePhone(phone)}
          onChange={validatePhone}
          ref={phoneRemove}
        />
      </View>

      {checkValidPhone ? (
        <Text style={styles.textFailed}>
          Please Enter Proper 10 digit Phone
        </Text>
      ) : (
        <Text style={styles.blockText}> </Text>
      )}

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> How can we help you? </Text>
        <TextInput
          style={[styles.inputStyle, styles.multiineStyle]}
          placeholder={'Tell us about your self'}
          value={message}
          onChangeText={msg => setMessage(msg)}
          numberOfLines={5}
          multiline={true}
          ref={helpRemove}
        />
      </View>

      {/* checkbox  */}

      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? '#ff5435' : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      {/* submit button  */}

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? '#ff5435' : 'grey',
          },
        ]}
        disabled={!agree}
        onPress={submit}>
        <Text style={styles.buttonText}> Contact Us </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },

  mainHeader: {
    fontSize: 24,
    color: '#344055',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: 'Nunito_700Bold',
    textTransform: 'capitalize',
  },

  description: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 20,
    fontFamily: 'WorkSans_400Regular',
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },

  labels: {
    fontSize: 15,
    color: '#7d7d7d',
    paddingBottom: 5,
    fontFamily: 'WorkSans_400Regular',
    lineHeight: 25,
    fontWeight: 'bold',
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
    fontSize: 15,
    fontWeight: 'bold',
  },

  multiineStyle: {
    paddingVertical: 4,
  },

  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },

  buttonText: {
    color: '#eee',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    fontFamily: 'WorkSans_400Regular',
  },

  wrapperText: {
    marginLeft: 10,
    marginTop: 5,
    color: '#7d7d7d',
    fontFamily: 'WorkSans_400Regular',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textFailed: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 16,
    marginBottom: -10,
    marginTop: 10,
  },

  blockText: {
    marginTop: -20,
  },
});

export default ContactUs;
