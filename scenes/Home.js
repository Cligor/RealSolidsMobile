import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';

import { Menu } from '../realSolids';
import logo from '../images/logo/opacity-500x500.png';

export default class Home extends Component {
    render() {
        return (
            <View style={style.Container}>
                <StatusBar backgroundColor='#5cb85c' barStyle="light-content" />

                <ImageBackground source={logo} style={style.backgroundImage}>
                    <View style={style.Conteudo}>
                        <Text>Funfou</Text>
                    </View>

                    <View style={style.Menu}>
                        <Menu />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const style = StyleSheet.create({
    Menu: {
        height: '10%',
    },

    Conteudo: {
        height: '90%',
    },

    Container: {
        flex: 1,
    },
    
    backgroundImage: {
        flex: 1,
        // width: undefined,
        // height: undefined,
        // flexDirection: 'column',
        // backgroundColor:'transparent',
        // justifyContent: 'flex-start',
    },
    
});
