import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Inicio from '../scenes/Inicio';
import Apresentacao from '../scenes/Apresentacao';
import Menu from '../scenes/Menu';
import Masp from '../scenes/Masp';

export default class Nav extends Component {
    render() {
        return (
            <Router>
                <Stack key='root'>
                    <Scene key='inicio' component={Inicio}  hideNavBar={true} initial/>
                    <Scene key='apresentacao' component={Apresentacao} hideNavBar={true} />
                    <Scene key='menu' component={Menu} hideNavBar={true} />
                    <Scene key='masp' component={Masp} hideNavBar={true} />
                </Stack>
            </Router>
        );
    }
}
