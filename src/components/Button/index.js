import React from 'react';
import './styles'
import {
    Text,
    TouchableHighlight
} from 'react-native';

export default props => {
    const stylesButton = [style.button]

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={style.button}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

