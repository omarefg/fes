import React, { Component } from 'react'
import { Welcome, Searcher, Instructions } from './common'
import Utils from '../utils'
import { Actions } from 'react-native-router-flux'

class Home extends Component {
    state = {
        data: null
    }

    searchEpisode = async () => {
        const { seasons } = this.state.data
        const season = Utils.getRandomInt(10)
        const episode = Utils.getRandomInt(seasons[season].episode_count)
        const wtw = await Utils.getEpisodeData(season, episode)
        const episodeTitle = `Temporada ${wtw.season_number} / Episodio ${wtw.episode_number}`
        this.props.changeTitle(episodeTitle)
        Actions.Episode({
            episode: wtw
        })
    }

    async componentDidMount () {
        const data = await Utils.getFriendsData()
        this.setState({ data })
    }

    render () {
        if (this.state.data) {
            return (
                <Welcome>
                    <Instructions
                        text='Buscar un episodio'
                    />
                    <Searcher
                        title='Buscar'
                        onPress={this.searchEpisode}
                    />
                </Welcome>
            )
        }
        return null
    }
}

export default Home
