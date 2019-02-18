import React from 'react'
import { Text, View, Image } from 'react-native'
import Styles from './styles'

const Instructions = props => {
    const { text } = props
    return (
        <View>
            {/* <Text style={Styles.text}>{text}</Text> */}
            <View style={Styles.imageContainer}>
                <Image
                    source={require('../../../../assets/image.jpg')}
                    style={Styles.image}
                    resizeMode='stretch'
                />
            </View>
        </View>
    )
}

export default Instructions
