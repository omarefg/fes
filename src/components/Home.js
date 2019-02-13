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
        console.log(wtw)
        Actions.Episode()
    }

    async componentDidMount () {
        const data = await Utils.getFriendsData()
        this.setState({ data })
    }

    render () {
        return (
            <Welcome>
                <Instructions
                    text='¿Qué episodio de Friends debería ver?'
                />
                <Searcher
                    title='Buscar'
                    onPress={this.searchEpisode}
                />
            </Welcome>
        )
    }
}

export default Home
