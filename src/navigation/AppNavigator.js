import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {color, size} from '../config';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import AddListingButton from './AddListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: color.white,
          position: 'absolute',
          height: size.ms60,
          borderRadius: 10,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MCIcon name="home-search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({navigation}) => ({
          tabBarButton: () => (
            <AddListingButton
              onPress={() => navigation.navigate('ListingEdit')}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MCIcon name="account-cog-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
