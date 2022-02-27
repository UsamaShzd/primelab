import React from 'react';
import {Button} from 'react-native-paper';

import {useFormikContext} from 'formik';

const SubmitButton: React.FC = ({children}) => {
  const {isSubmitting, submitForm, errors} = useFormikContext();
  const hasErrors = Object.keys(errors).length > 0;
  return (
    <Button
      mode="contained"
      disabled={hasErrors || isSubmitting}
      onPress={submitForm}>
      {children}
    </Button>
  );
};

export default SubmitButton;
