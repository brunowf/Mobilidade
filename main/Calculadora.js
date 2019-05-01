import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button'
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
                    <Button titulo="AC"/>
                </View>
                <View style={styles.botao}>
                    <Button titulo="/"/>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.botao}>
                    <Button titulo="7"/>
                </View>
                <View style={styles.botao}>
                    <Button titulo="8"/>
                </View>
                <View style={styles.botao}>
                    <Button titulo="9"/>
                </View>
                <View style={styles.botao}>
                    <Button titulo="*"/>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.botao}>
                    <Button titulo="4"/>
                </View>
                <View style={styles.botao}>
                    <Button titulo="5"/>
                </View>
                <View style={styles.botao}>
                    <Button titulo="6"/>
                </View>
                <View style={styles.botao}>
                    <Button titulo="-"/>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.botao}>
                    <Button titulo="1"/>
                </View>
                <View style={styles.botao}>
                    <Button titulo="2"/>
                </View>
                <View style={styles.botao}>
                    <Button titulo="3"/>
                </View>
                <View style={styles.botao}>
                    <Button titulo="+"/>
                </View>
            </View>
            <View style={styles.container}>
                <View style={[styles.botao ,styles.botao2]}>
                    <Button titulo="0"
                    />
                </View>
                <View style={styles.botao}>
                    <Button titulo="."/>
                </View>
                <View style={styles.botao}>
                    <Button titulo="="/>
                </View>
            </View>
        </View>
        );
    }
}
