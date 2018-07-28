import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Home from '../scenes/Home';

export default class Nav extends Component {
    render() {

        return(
            <Router navigationBarStyle={{ backgroundColor: '#5cb85c'}} titleStyle={{ color: '#FFF' }}>
                <Stack key='root'>
                    <Scene key='Home' component={ Home } title='Real Solids' initial />
                </Stack>
            </Router>
        );
    }
}
