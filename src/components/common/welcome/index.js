import React from 'react'
import { ScrollView } from 'react-native'
import Styles from './styles'

const Welcome = props => {
    return (
        <ScrollView
            contentContainerStyle={Styles.container}
        >
            {props.children}
        </ScrollView>
    )
}

export default Welcome
