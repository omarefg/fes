import React from 'react'
import { ScrollView } from 'react-native'

const EpisodeLayout = props => {
    const { children } = props
    return (
        <ScrollView>{children}</ScrollView>
    )
}

export default EpisodeLayout
