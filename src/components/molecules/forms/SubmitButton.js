import React from 'react';
import {useFormikContext} from 'formik';

import AppButton from '../AppButton';

const SubmitButton = ({title, backgroundColor, borderColor, titleColor}) => {
  const {handleSubmit} = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      titleColor={titleColor}
    />
  );
};

export default SubmitButton;
