import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import styles from './CalculadoraStyle'
/*
import Button from '../components/Button'
import Display from '../components/Display'*/


export default class Calculadora extends Component {
    render() {
        return (
        <View style={styles.containermain}>
            <View style={[styles.container, styles.display]}>
                <Text>0</Text>
            </View>
            <View style={styles.container}>
                <View style={[styles.botao, styles.botao3]}>
                    <Button 
                        title="AC"
                        color="gray"/>
                </View>
                <View style={styles.botao}>
                    <Button title="/"
                            color="gray"
                        />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.botao}>
                    <Button title="7"
                        color="gray"
                    />
                </View>
                <View style={styles.botao}>
                    <Button title="8"
                        color="gray"
                    />
                </View>
                <View style={styles.botao}>
                    <Button title="9"
                        color="gray"
                    />
                </View>
                <View style={styles.botao}>
                    <Button title="*"
                        color="gray"
                    />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.botao}>
                    <Button 
                        title="4"
                        color="gray"
                    />
                </View>
                <View style={styles.botao}>
                    <Button title="5"
                        color="gray"
                    />
                </View>
                <View style={styles.botao}>
                    <Button title="6"
                        color="gray"
                    />
                </View>
                <View style={styles.botao}>
                    <Button title="-"
                        color="gray"
                    />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.botao}>
                    <Button title="1"
                        color="gray"
                    />
                </View>
                <View style={styles.botao}>
                    <Button title="2"
                        color="gray"
                    />
                </View>
                <View style={styles.botao}>
                    <Button title="3"
                        color="gray"
                    />
                </View>
                <View style={styles.botao}>
                    <Button title="+"
                        color="gray"
                    />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.botao2}>
                    <Button title="0"
                        color="gray"
                    />
                </View>
                <View style={styles.botao}>
                    <Button title="."
                        color="gray"
                    />
                </View>
                <View style={styles.botao}>
                    <Button title="="
                        color="gray"
                    />
                </View>
            </View>
        </View>
        );
    }
}
