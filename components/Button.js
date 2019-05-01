import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements'

import styles from '../main/CalculadoraStyle'

export default function(props){
    return (
        <Button
        raised={true}
        title={props.titulo}
        buttonStyle={{height: '100%'}}
        >
        </Button>
    )
}