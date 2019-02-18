import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Styles from './styles'

const Searcher = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={Styles.touchable}
        >
            <View style={Styles.container}>
                <Text style={Styles.text}>Buscar</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Searcher
