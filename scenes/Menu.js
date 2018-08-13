import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity,
    Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Menu extends Component {
    render() {
        return (
            <View style={style.container}>

                { /*Separando os botões em duas colunas (se precisar fazer uma terceira */}

                { /* Coluna 1 */ }
                <View style={style.containerButtons} >
                    <TouchableOpacity style={[style.buttons, { backgroundColor: 'red' }]} onPress={() => Actions.masp()}>
                        <Text style={style.textButton}>Museu de Arte em São Paulo</Text>   
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[style.buttons, { backgroundColor: 'green' }]} onPress={() => Actions.masp()}>
                        <Text>Catedral em Maringá</Text> 
                         
                    </TouchableOpacity>
                    { /* adicionar outros botões mais botões */}
                </View>

                { /* Coluna 2 */ }
                <View style={style.containerButtons}>
                <TouchableOpacity style={[style.buttons, { backgroundColor: 'yellow' }]} onPress={() => Actions.masp()}>
                        <Text>Praça da Ribeira em Portugal</Text> 
                         
                    </TouchableOpacity>

                     <TouchableOpacity style={[style.buttons, { backgroundColor: 'blue' }]} onPress={() => Actions.masp()}>
                        <Text>Ópera de Arame em Curitiba</Text> 
                         
                    </TouchableOpacity>
                </View>

            </View>        
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between', 
        flexDirection: 'row',
    },

    containerButtons: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
    },

    buttons: {
        width: 150,
        height: 80,
        alignItems: 'center'
    },

    textButton: {
        color: 'white',
    },

    viewButtons: {
        //styles
    },
});
