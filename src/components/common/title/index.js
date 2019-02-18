import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'

const Title = props => {
    const { title } = props
    return (
        <View
            style={Styles.container}
        >
            <Text
                style={Styles.text}
            >
                {title}
            </Text>
        </View>
    )
}

export default Title
