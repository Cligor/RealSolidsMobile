import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import next from '../images/icons/next.png';
import conversa from '../images/mascote/conversa.png';
import masp from '../images/monumentos/masp.png';

let falas = [];

export default class Apresentacao extends Component {

    constructor(props) {
        super(props);
        falas = [
            'Conhecido como MASP,',
            'o museu de arte de São Paulo Assis Chateaubriand está instalado em uma obra arquitetonica',
            'planejada por Lina Bo Bardi e levou 10 anos para ser construída.'
        ];
        this.state = { indice: 0 };
    }

    proximo() {
        if (this.state.indice < 2) {
            const i = this.state.indice;
            this.setState({ indice: i + 1 });
        } else {
            alert('Próximas sessões em desenvolvimento')
            Actions.menu();
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View style={[style.innerContainer, { alignItems: 'center', paddingTop: 60 }]}>
                    <Text style={style.titulo}>Real Solids</Text>
                    <Image source={masp} size={20} />
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
        marginLeft: '25%',
        marginTop: '5%',
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
