import React, { Component } from 'react';
import {
    View,
    Text,
    Plataform,
    StyleSheet,
} from 'react-native'

import Button from './src/components/Button'
import Display from './src/components/Display';

const initialState = {
    displayValue: '0',
    clarDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Aoo extends Component {
    state = { ...initialState }

    addDigit = n => {
        if(n === '.' && this.state.displayValue.includes('0')){
            return
        }

        const clarDisplay = this.state.displayValue === '0' || this.state.clarDisplay
        const currentDisplay = clarDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({
            displayValue,
            clearDisplay: false
        })

        if (n !== '.') {
            const newValue = parseFloat(displayValue)
            const values = [ ...this.state.values]
            values[this.state.current] = newValue
        }

    }

    clearMemory = () => {
        this.setState({ displayValue: 0 })
    }

    setOperation = operation => {

    }

    reder(){
        return(
            <View style={styles.container}>
                <Display value={this.state.displayValue} />
                <View style={styles.buttons}>
                    <Button />
                    <Button label='AC' triple onClick={this.clearMemory} />
                    <Button label='/' operation onClick={this.setOperation}/>
                    <Button label='7' onClick={this.addDigit}/>
                    <Button label='8' onClick={this.addDigit}/>
                    <Button label='9' onClick={this.addDigit}/>
                    <Button label='*' operation onClick={this.addDigit}/>
                    <Button label='4' onClick={this.addDigit}/>
                    <Button label='5' onClick={this.addDigit}/>
                    <Button label='6' onClick={this.addDigit}/>
                    <Button label='-' operation onClick={this.addDigit}/>
                    <Button label='1' onClick={this.addDigit}/>
                    <Button label='2' onClick={this.addDigit}/>
                    <Button label='3' onClick={this.addDigit}/>
                    <Button label='+' operation onClick={this.addDigit}/>
                    <Button label='0' double onClick={this.addDigit}/>
                    <Button label='.' onClick={this.addDigit}/>
                    <Button label='=' operation onClick={this.addDigit}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})