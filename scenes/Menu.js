import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    Button 
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Menu extends Component {
    render() {
        return (
            <View style={style.container}>

                { /*Separando os botões em duas colunas (se precisar fazer uma terceira */}

                { /* Coluna 1 */ }
                <View style={style.containerButtons} >
                    <Button 
                        title='MASP' 
                        style={{ backgroundColor: 'red' }} 
                        onPress={() => Actions.masp()} 
                    />
                    
                    <Button 
                        title='Catedral' 
                        style={{ backgroundColor: 'green' }} 
                        onPress={() => alert('catedral')} 
                    />
                    { /* adicionar outros botões mais botões */}
                </View>

                { /* Coluna 2 */ }
                <View style={style.containerButtons}>
                    <Button title='monumento 1' />
                    <Button title='monumento 2' />
                </View>

            </View>        
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },

    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    buttons: {
        //styles
    },

    viewButtons: {
        //styles
    },
});
