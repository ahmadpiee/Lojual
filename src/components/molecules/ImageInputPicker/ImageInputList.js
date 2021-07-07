import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {ImageInput} from '../..';
import {size} from '../../../config';

const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}) => {
  const scrollView = useRef();

  return (
    <View style={{height: size.ms110}}>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() =>
          scrollView.current.scrollToEnd({animated: true, duration: 600})
        }
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {imageUris.map(uri => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={uri => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});
