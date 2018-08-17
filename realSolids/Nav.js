import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Inicio from '../scenes/Inicio';
import Apresentacao from '../scenes/Apresentacao';
import Menu from '../scenes/Menu';
import Masp from '../monumentos/Masp';
import ExerciciosMasp from '../exercicios/ExerciciosMasp';
import Paralelepipedo from '../animacoes/Paralelepipedo';

export default class Nav extends Component {
    render() {
        return (
            <Router>
                <Stack key='root'>
                    <Scene key='inicio' component={Inicio} hideNavBar initial />
                    <Scene key='apresentacao' component={Apresentacao} hideNavBar />
                    <Scene key='menu' component={Menu} hideNavBar />
                    <Scene key='masp' component={Masp} hideNavBar />
                    <Scene key='exercicioMasp' component={ExerciciosMasp} hideNavBar />
                    <Scene key='paralelepipedo' component={Paralelepipedo} hideNavBar />
                </Stack>
            </Router>
        );
    }
}
