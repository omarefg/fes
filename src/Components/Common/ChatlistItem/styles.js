import { StyleSheet, Dimensions } from 'react-native';

let width = Dimensions.get('window').width;

export default Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        padding: 5,
        flex: 1
    },
    chatcontainer: {
        flex: 1
        
    },
    textcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    time: {
        // justifyContent: 'flex-end'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 50
    },
    last_message: {
        flex: 1
    }
});
   