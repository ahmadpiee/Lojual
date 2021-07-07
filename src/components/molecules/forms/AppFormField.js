import React from 'react';
import {useFormikContext} from 'formik';

import {AppTextInput, ErrorMessage} from '../..';

const AppFormField = ({name, width, ...otherProps}) => {
  const {setFieldTouched, setFieldValue, values, errors, touched} =
    useFormikContext();

  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
