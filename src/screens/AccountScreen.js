import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {ListItem, Icon, ListItemSeparator, Screen} from '../components';
import {size, color} from '../config';
import Icons from 'react-native-vector-icons/EvilIcons';
import routes from '../navigation/routes';
import useAuth from './auth/useAuth';

const AccountScreen = ({navigation}) => {
  const {user, logOut} = useAuth();

  return (
    <Screen>
      <ListItem
        style={{justifyContent: 'space-evenly'}}
        title={user.name}
        subTitle={user.email}
        image={assets[0]}
        IconComponentEnd={
          <Icons
            name="gear"
            size={25}
            style={{alignSelf: 'center', marginLeft: 40}}
          />
        }
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItems => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponentStart={
                <Icon
                  style={{marginRight: 10}}
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.tagetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        onPress={() => logOut()}
        IconComponentStart={
          <Icon
            style={{marginRight: 10}}
            name="logout"
            backgroundColor={color.primary}
          />
        }
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: size.ms11,
  },
});

const assets = [require('../assets/images/avatar.png')];

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: color.yellow,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: color.secondary,
    },
    tagetScreen: routes.MESSAGE_SCREEN,
  },
];
