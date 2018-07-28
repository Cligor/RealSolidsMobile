import React from 'react';
import { View, TouchableHighlight, Image, Button, StyleSheet } from 'react-native';

import home from '../images/icons/home.png';

const Menu = props => (
    <View style={style.container}>
        <View style={style.menu}>
            <TouchableHighlight onPress={() => { alert('Ok'); }}>
                <Image source={home} size={40} />
            </TouchableHighlight>
        
            <Button title='ok' />
        
            <Button title='ok' />
        
            <Button title='ok' />
       
            <Button title='ok' />
        </View>
    </View>
);

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderTopWidth: 2,
        borderRadius: 3,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '95%',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
});

export { Menu };
