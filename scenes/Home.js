import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import { Menu } from '../realSolids';

export default class Home extends Component {
    render() {
        return(
            <View style={style.Container}>
                <StatusBar backgroundColor='#5cb85c' barStyle="light-content" />
                <View style={style.Conteudo}>
                    <Text>Funfou</Text>
                </View>

                <View style={style.Menu}>
                    <Menu />
                </View>
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
});
