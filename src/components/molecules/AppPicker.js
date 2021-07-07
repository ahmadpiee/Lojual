import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {color, size} from '../../config';
import {AppText} from '..';
import {PickerItem} from '..';

const AppPicker = ({
  icon,
  items,
  style,
  placeholder,
  onSelectItem,
  selectedItem,
  width = '100%',
  PickerItemComponent = PickerItem,
  numberOfColumns,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <SafeAreaView style={[styles.container, style, {width}]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={size.ms22}
              color={color.mediumGrey}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text} title={selectedItem.label} />
          ) : (
            <AppText style={styles.placeholder} title={placeholder} />
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={size.ms22}
            color={color.mediumGrey}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            style={style}
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: size.ms20,
    flexDirection: 'row',
    padding: size.ms15,
  },
  icon: {
    alignSelf: 'center',
    marginRight: size.ms10,
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'Proxima Nova Regular',
    fontSize: size.ms16,
  },
  placeholder: {
    flex: 1,
    alignSelf: 'center',
    fontFamily: 'Proxima Nova Regular',
    fontSize: size.ms17,
    color: color.mediumGrey,
  },
});
