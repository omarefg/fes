import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    touchable: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: 110,
        height: 110,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 100
    },
    container: {
        borderWidth: 1,
        borderColor: '#454955',
        alignItems: 'center',
        backgroundColor: '#454955',
        borderRadius: 100,
        width: 110,
        height: 110,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Styles
