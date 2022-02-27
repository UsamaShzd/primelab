import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../constants/colors';
import {Button, Divider, Text} from 'react-native-paper';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import loadUsers from '../store/thunks/loadUsers';
import User from '../interfaces/User';

const AuthScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector<RootState>(state => state.users);

  const [signupMethod, setSignupMethod] = useState<string>('Email');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showUsersList, setShowUsersList] = useState<boolean>(false);

  const isEmailMethod = signupMethod === 'Email';

  const onSignupFormSubmit = () => {
    setIsModalOpen(true);
  };

  const onNameFormSubmit = () => {
    setShowUsersList(true);
    dispatch(loadUsers());
  };

  const renderEmailSignupForm = (
    <Formik
      initialValues={{email: ''}}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
      })}
      onSubmit={onSignupFormSubmit}>
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
      onSubmit={onSignupFormSubmit}>
      <>
        <Input name={'phone'} label={'Phone Number'} />
        <SubmitButton>Get Started</SubmitButton>
      </>
    </Formik>
  );

  const userList = (
    <FlatList
      data={users.list as User[]}
      renderItem={({item}) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );

  const renderNameModal = (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}>
      <View style={styles.modalWrapper}>
        <View style={styles.modalContent}>
          {showUsersList ? (
            userList
          ) : (
            <>
              <Formik
                initialValues={{fullName: '', walletId: ''}}
                validationSchema={Yup.object().shape({
                  fullName: Yup.string().required('Required'),
                  walletId: Yup.string().required('Required'),
                })}
                onSubmit={onNameFormSubmit}>
                <>
                  <Input name={'fullName'} label={'Full Name'} />
                  <Input name={'walletId'} label={'Wallet ID'} />
                  <SubmitButton>Create Account</SubmitButton>
                </>
              </Formik>

              <View>
                <Text style={styles.signinText}>
                  Already Have Near Account?
                </Text>

                <Button mode="contained" onPress={() => setIsModalOpen(false)}>
                  Login With Near
                </Button>
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
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
            <View style={styles.signupFormWrapper}>
              {isEmailMethod ? renderEmailSignupForm : renderPhoneSignupForm}
            </View>
            <Divider />
            <View style={styles.signinFormWrapper}>
              <Text style={styles.signinText}>Already Have Near Account?</Text>

              <Formik
                initialValues={{phone: ''}}
                validationSchema={Yup.object().shape({
                  phone: Yup.string().required('Required'),
                })}
                onSubmit={() => {}}>
                <>
                  <Input name={'walletName'} label={'walletName.near'} />
                  <SubmitButton>Login</SubmitButton>
                </>
              </Formik>
            </View>
          </View>
        </SafeAreaView>
        {renderNameModal}
      </View>
    </KeyboardAvoidingView>
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
  signupFormWrapper: {
    marginBottom: wp('3%'),
  },
  signinText: {
    marginBottom: wp('3%'),
    textAlign: 'center',
  },
  signinFormWrapper: {
    marginVertical: wp('3%'),
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: colors.TRANSPARENT_BLACK,
    paddingTop: 45,
  },
  modalContent: {
    flex: 1,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: wp('5%'),
    borderTopRightRadius: wp('5%'),
    padding: wp('3%'),
  },
});

export default AuthScreen;
