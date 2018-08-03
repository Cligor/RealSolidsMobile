import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Home from '../scenes/Home';
import Menu from '../scenes/Menu';
import Masp from '../scenes/Masp';
import Catedral from '../scenes/Catedral';

export default class Nav extends Component {
    render() {
        return (
            <Router 
                    navigationBarStyle={{ backgroundColor: 'transparent' }} 
                    titleStyle={{ color: '#FFF' }}
            >
                <Stack key='root'>
                    <Scene key='Home' component={Home} initial />
                    <Scene key='Menu' component={Menu} />
                    <Scene key='Masp' component={Masp} />
                    <Scene key='Catedral' component={Catedral} />
                </Stack>
            </Router>
        );
    }
}
