import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'

const Description = props => {
    const { description } = props
    return (
        <View style={Styles.container}>
            <Text
                style={Styles.text}
            >
                {description}
            </Text>
        </View>
    )
}

export default Description
