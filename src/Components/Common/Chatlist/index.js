import React from 'react';
import { FlatList, Text } from 'react-native';
import { ChatlistItem } from '../';

const props = () => {
    return (
        <FlatList
            data={[
                {
                    name: 'Luis',
                    last_message: 'Last message test and its ok the largest message ever jojo',
                    time: '5:41pm',
                    key: 'Luis',
                    uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                },
                {
                    name:'Maria',
                    last_message: 'Last message test and its ok the largest message ever jojo',
                    time: '5:41pm',
                    key: 'Maria',
                    uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                }
            ]}
            renderItem={({item}) => <ChatlistItem {...item} />}
        />
    );
}
 
export default props;