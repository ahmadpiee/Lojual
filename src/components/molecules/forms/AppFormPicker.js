import React from 'react';
import {useFormikContext} from 'formik';

import {AppPicker, ErrorMessage} from '../..';

const AppFormPicker = ({
  items,
  name,
  numberOfColumns = 1,
  PickerItemComponent,
  placeholder,
  width,
  style,
  ...otherProps
}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  return (
    <>
      <AppPicker
        {...otherProps}
        style={style}
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={item => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
