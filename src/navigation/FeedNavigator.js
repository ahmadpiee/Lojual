import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListingScreen from '../screens/ListingScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    headerMode="float"
    mode="modal"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetail" component={ListingDetailScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
