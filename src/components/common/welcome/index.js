import React from 'react'
import { View } from 'react-native'

const Welcome = props => {
    return (
        <View>
            {props.children}
        </View>
    )
}

export default Welcome
