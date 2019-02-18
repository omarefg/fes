import React, { Component } from 'react'
import { Stack, Scene, Router } from 'react-native-router-flux'
import { Home, Episode } from './components'

class App extends Component {
    state = {
        episodeTitle: ''
    }
    changeTitle = episodeTitle => this.setState({ episodeTitle })
    render () {
        return (
            <Router>
                <Stack key='root'>
                    <Scene
                        key='Home'
                        component={Home}
                        changeTitle={this.changeTitle}
                        title='Encuentra un episodio para ver'
                    />
                    <Scene
                        key='Episode'
                        component={Episode}
                        title={this.state.episodeTitle}
                    />
                </Stack>
            </Router>
        )
    }
}

export default App
