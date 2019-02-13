import React, { Component } from 'react'
import { Stack, Scene, Router } from 'react-native-router-flux'
import { Home, Episode } from './components'

class App extends Component {
    render () {
        return (
            <Router>
                <Stack key='root'>
                    <Scene key='Home' component={Home}/>
                    <Scene key='Episode' component={Episode}/>
                </Stack>
            </Router>
        )
    }
}

export default App
