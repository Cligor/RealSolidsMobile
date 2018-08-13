import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import next from '../images/icons/next.png';
import conversa from '../images/mascote/conversa.png';
import { Actions } from 'react-native-router-flux';

const falas = [
    'Olá, sou o Tales. Serei seu parceiro nessa aventura aqui no RealSolids.',
    'Minha missão é levar você para um passeio por alguns lugares muito bonitos e importantes.',
    'Vou aproveitar para te mostrar como a matemática aparece no nosso dia-a-dia e nem sempre percebemos.',
    'Vamos lá, escolha um desses lugares para visitarmos...'
];

export default class Apresentacao extends Component {
    

    constructor(props) {
        super(props);
        this.state = { indice: 0 }
    }

    proximo() {
        if (this.state.indice < 3) {
            let i = this.state.indice;
            this.setState({ indice: i+1 });
        }
        else {
            Actions.menu();
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View style={[style.innerContainer, { alignItems: 'center', paddingTop: 60 }]}>
                    <Text style={style.titulo}>Real Solids</Text>
                </View>

                <View style={style.innerContainer}>
                    <ImageBackground source={conversa} style={{ flex: 1 }}>
                        <View style={style.texto}>
                            <Text style={style.fala}>
                                {falas[this.state.indice]}
                            </Text>
                        </View>

                        <View style={style.button}>
                            <TouchableOpacity onPress={() => this.proximo()}>
                                <Image source={next} size={32} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                   
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
        height: '50%',
        width: '100%',
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5cb85c',
        textAlign: 'center',
    },

    texto: {
        // borderWidth: 1,
        width: '66%',
        height: 70,
        marginLeft: '29%',
        marginTop: 25,
    },

    fala: {
        fontSize: 18,
    },

    button: {
        alignItems: 'center',
        paddingTop: '46%',
        marginLeft: '85%',
        borderRadius: 20,
    },
});
