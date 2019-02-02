import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const ChatlistItem = props => {
    return (
        <View style={styles.container}>
            <Image
                 style={styles.image}
                 source={{uri: props.uri}}
            />
            <View style={styles.chatcontainer}>
                <View style={styles.textcontainer}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.time}>{props.time}</Text>    
                </View>
                <View>
                    <Text
                        style={styles.last_message}
                        numberOfLines={1}
                    >
                        {props.last_message}
                    </Text>
                </View>
            </View>
        </View>
    );
}
 
export default ChatlistItem;