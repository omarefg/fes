import React, { Component } from 'react';
import { Stack, Scene, Router } from "react-native-router-flux";
import { Home } from './Components';

class Routes extends Component {
    render() { 
        return (
            <Router>
                <Stack key='root'>
                    <Scene key='Home' component={Home}/>
                </Stack>
            </Router>
        );
    }
}

export default Routes;