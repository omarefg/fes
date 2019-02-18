import React, { Component } from 'react'
import { Image } from 'react-native'
import { IMAGE_ROUTE } from '../lib/constants'
import { Title, EpisodeLayout, Description } from './common'
class Episode extends Component {
    render () {
        const { still_path, name, overview } = this.props.episode
        return (
            <EpisodeLayout>
                <Title
                    title={name}
                />
                <Image
                    source={{ uri: `${IMAGE_ROUTE}${still_path}` }}
                    style={{ width: '100%', height: 300 }}
                />
                <Description
                    description={overview}
                />
            </EpisodeLayout>
        )
    }
}

export default Episode
