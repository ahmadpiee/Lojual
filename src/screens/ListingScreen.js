import React, {useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {
  Card,
  Screen,
  AppButton,
  AppText,
  ActivityIndicator,
} from '../components';
import {size, color} from '../config';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import {useApi} from '../hooks';

const ListingScreen = ({navigation}) => {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={{marginBottom: size.ms20}}>
        {getListingsApi.error && (
          <>
            <AppText
              color={color.danger}
              style={{alignSelf: 'center', marginBottom: 10}}
              title="Couldn't retrieve the listings"
            />
            <AppButton title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={getListingsApi.data}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({item}) => (
            <Card
              style={styles.card}
              title={item.title}
              subTitle={'Rp ' + item.price}
              imageUrl={item.images[0].url}
              onPress={() =>
                navigation.navigate(routes.LISTING_DETAILS_SCREEN, item)
              }
            />
          )}
        />
      </Screen>
    </>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: size.ms12,
  },
});
