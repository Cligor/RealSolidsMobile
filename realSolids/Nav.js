import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Inicio from '../scenes/Inicio';
import Apresentacao from '../scenes/Apresentacao';
import Menu from '../scenes/Menu';
import Masp from '../monumentos/Masp';
import PracaRibeira from '../monumentos/PracaRibeira';
import Catedral from '../monumentos/Catedral';
import OperaArame from '../monumentos/OperaArame';
import ExerciciosMasp from '../exercicios/ExerciciosMasp';
import ExerciciosPracaRibeira from '../exercicios/ExerciciosPracaRibeira';
import ExerciciosOperaArame from '../exercicios/ExerciciosOperaArame';
import ExerciciosCatedral from '../exercicios/ExerciciosCatedral';

import Paralelepipedo from '../animacoes/Paralelepipedo';
import Cone from '../animacoes/Cone';

export default class Nav extends Component {
    render() {
        return (
            <Router>
                <Stack key='root'>
                    <Scene 
                        key='inicio' 
                        component={Inicio} 
                        hideNavBar 
                        initial 
                    />
                    <Scene 
                        key='apresentacao' 
                        component={Apresentacao} 
                        hideNavBar 
                    />
                    <Scene 
                        key='menu' 
                        component={Menu} 
                        hideNavBar 
                    />
                    <Scene 
                        key='masp' 
                        component={Masp} 
                        hideNavBar 
                    /> 
                    <Scene 
                        key='operaArame' 
                        component={OperaArame} 
                        hideNavBar 
                    />                
                    <Scene 
                        key='pracaRibeira' 
                        component={PracaRibeira} 
                        hideNavBar 
                    />    
                    <Scene 
                        key='catedral' 
                        component={Catedral} 
                        hideNavBar 
                    />
                    <Scene 
                        key='exercicioMasp' 
                        component={ExerciciosMasp} 
                        hideNavBar 
                    />
                    <Scene 
                        key='exerciciosCatedral' 
                        component={ExerciciosCatedral} 
                        hideNavBar 
                    />
                    <Scene 
                        key='exerciciosPracaRibeira' 
                        component={ExerciciosPracaRibeira} 
                        hideNavBar 
                    />
                    <Scene 
                        key='exerciciosOperaArame' 
                        component={ExerciciosOperaArame} 
                        hideNavBar 
                    />
                    <Scene 
                        key='paralelepipedo' 
                        component={Paralelepipedo} 
                        hideNavBar 
                    />
                    <Scene 
                        key='cone' 
                        component={Cone} 
                        hideNavBar 
                    />
                </Stack>
            </Router>
        );
    }
}
