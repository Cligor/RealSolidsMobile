import React from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    StyleSheet 
} from 'react-native';

const botao = props => (
    <View>
        <TouchableOpacity style={[style.buttons, props.style]} onPress={props.onPress}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    </View>
);

const style = StyleSheet.create({
    buttons: {
        width: 150,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },

    textButton: {
        color: 'white',
    },
});

export { botao };
