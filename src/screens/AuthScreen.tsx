import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../constants/colors';
import {Button} from 'react-native-paper';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

const AuthScreen: React.FC = () => {
  const [signupMethod, setSignupMethod] = useState<string>('Email');
  const users = useSelector<RootState>(state => state.users);

  useEffect(() => {
    console.log('USERS => ', users);
  }, []);

  const isEmailMethod = signupMethod === 'Email';
  const renderEmailSignupForm = (
    <Formik
      initialValues={{email: ''}}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
      })}
      onSubmit={() => {}}>
      <>
        <Input name={'email'} label={'Email Address'} />
        <SubmitButton>Get Started</SubmitButton>
      </>
    </Formik>
  );
  const renderPhoneSignupForm = (
    <Formik
      initialValues={{phone: ''}}
      validationSchema={Yup.object().shape({
        phone: Yup.string().required('Required'),
      })}
      onSubmit={() => {}}>
      <>
        <Input name={'phone'} label={'Phone Number'} />
        <SubmitButton>Get Started</SubmitButton>
      </>
    </Formik>
  );
  return (
    <View style={styles.screenContainer}>
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <View style={styles.methodButtonContainer}>
            {['Email', 'Phone'].map(method => {
              return (
                <Button
                  key={method}
                  style={styles.methodButton}
                  labelStyle={styles.methodButtonText}
                  onPress={() => setSignupMethod(method)}>
                  {method}
                </Button>
              );
            })}
          </View>
          <View>
            {isEmailMethod ? renderEmailSignupForm : renderPhoneSignupForm}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    padding: wp('3%'),
    backgroundColor: colors.WHITE,
  },
  methodButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  methodButton: {
    backgroundColor: colors.LIGHT_GREY,
    margin: wp('1%'),
  },
  methodButtonText: {
    color: colors.DARK_GREY,
  },
});

export default AuthScreen;
