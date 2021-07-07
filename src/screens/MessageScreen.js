import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import {ListItem, ListItemDeleteAction, ListItemSeparator} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  };
  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({item}) => (
          <ListItem
            style={{justifyContent: 'space-evenly'}}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('pressed', item)}
            IconComponentEnd={
              <Icon
                name="chevron-right"
                size={22}
                style={{alignSelf: 'center'}}
              />
            }
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: 'Amazing',
              description:
                'you are really amazing, Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              image: require('../assets/images/FemaleAvatar.png'),
            },
          ]);
        }}
      />
    </SafeAreaView>
  );
};

export default MessageScreen;

const initialMessages = [
  {
    id: 1,
    title: 'Awesome',
    description:
      'you are really awesome, Lorem Ipsum is simply dummy text of the printing ',
    image: require('../assets/images/FemaleAvatar.png'),
  },
  {
    id: 2,
    title: 'Amazing',
    description:
      'you are really amazing, Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require('../assets/images/MaleAvatar.png'),
  },
  {
    id: 3,
    title: 'Amazing',
    description:
      'you are really amazing, Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: require('../assets/images/avatar.png'),
  },
];
