import React from 'react';
import {TextInput} from 'react-native-paper';
import {useFormikContext} from 'formik';

interface Props {
  name: string;
  label: string;
}
const Input: React.FC<Props> = ({name, label}) => {
  const {values, errors, touched, setFieldValue} =
    useFormikContext<{[key: string]: string}>();
  const showError = touched[name] && errors[name];
  return (
    <TextInput
      mode="outlined"
      placeholder={label}
      value={values[name]}
      onChangeText={value => {
        setFieldValue(name, value);
      }}
      error={!!showError}
    />
  );
};

export default Input;
