import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import masp from '../images/monumentos/masp50.png';

export default class Apresentacao extends Component {

    constructor(props) {
        super(props);
        this.state = { indice: 0 };
    }

    errado(solido) {
        alert('Errou, o Masp não é um ' + solido + '.');
    }

    certo(solido) {
        alert('Você acertou! O MASP é um ' + solido + '.');
    }

    render() {
        return (
            <View style={style.container}>
                <View 
                    style={
                            [
                                style.innerContainer, 
                                { alignItems: 'center', paddingTop: 60, height: '60%', }
                            ]
                        }
                >
                    <Text style={style.titulo}>Real Solids</Text>
                    <Image source={masp} size={20} />
                </View>

                <View style={[style.innerContainer, { height: '40%' }]}>
                        <TouchableOpacity 
                            style={[style.buttons, { backgroundColor: 'red' }]} 
                            onPress={() => this.errado()}
                        >
                            <Text style={style.textButton}>Cubo</Text>   
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={[style.buttons, { backgroundColor: 'green' }]} 
                            onPress={() => this.errado()}
                        >
                            <Text style={style.textButton}>Pirâmide</Text>   
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            style={[style.buttons, { backgroundColor: 'purple' }]} 
                            onPress={() => this.certo()}
                        >
                                <Text style={style.textButton}>Paralelepipedo</Text>   
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[style.buttons, { backgroundColor: 'blue' }]} 
                            onPress={() => this.errado()}
                        >
                            <Text style={style.textButton}>Esfera</Text>   
                        </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    innerContainer: {
        width: '100%',
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5cb85c',
        textAlign: 'center',
    },

    // texto: {
    //     // borderWidth: 1,
    //     width: '66%',
    //     height: '25%',
    //     marginLeft: '25%',
    //     marginTop: '3%',
    // },

    // fala: {
    //     fontSize: 18,
    // },

    button: {
        alignItems: 'center',
        paddingTop: '46%',
        marginLeft: '85%',
        borderRadius: 20,
    },

    textButton: {
        color: 'white',
    },

    buttons: {
        width: 150,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },

});
