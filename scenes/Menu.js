import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableHighlight, 
    Text, 
    Image 
} from 'react-native';

import { Actions } from 'react-native-router-flux';

//adicionar miniatura do masp na pasta monumentos a criar
import Masp from '../images/monumentos/masp.png';
import Catedral from '../images/monumentos/catedral.png';


export default class Menu extends Component {
    render() {
        return (
            <View style={style.container}>

                { /*Separando os botões em duas colunas (se precisar fazer uma terceira */}

                { /* Coluna 1 */ }
                <View style={style.containerButtons} >
                    <TouchableHighlight style={style.buttons} onPress={Actions.Masp} >
                        <View style={style.viewButtons} >
                            <Image source={Masp} />
                            <Text>MASP</Text>
                        </View>
                    </TouchableHighlight>

                    { /* adicionar outros botões mais botões */}
                </View>

                { /* Coluna 2 */ }
                <View style={style.containerButtons}>
                    <TouchableHighlight style={style.buttons} onPress={Actions.Catedral} >
                        <View style={style.viewButtons} >
                            <Image source={Catedral} />
                            <Text>Catedral de Maringá</Text>
                        </View>
                    </TouchableHighlight>
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
