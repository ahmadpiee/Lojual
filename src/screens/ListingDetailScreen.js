import React from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Platform} from 'react-native';
import FastImage from 'react-native-fast-image';

import {color, size} from '../config';
import {AppText, ListItem, Screen} from '../components';

const assets = [require('../assets/images/avatar.png')];

const ListingDetailScreen = ({route}) => {
  const {user} = useAuth();

  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={styles.image}
        source={{uri: listing.images[0].url}}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} title={listing.title} />
        <AppText style={styles.subTitle} title={'Rp ' + listing.price} />
        <View style={{marginVertical: size.ms30}}>
          <ListItem image={assets[0]} title={user.name} subTitle="5 Listings" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: size.ms15,
  },
  image: {
    width: size.up100,
    height: size.ms300,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.secondary,
    marginVertical: size.ms10,
  },
});
