import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Items from './Items'

export default function ItemsContainer() {
    return (
        <View style={styles.containerStyle}>
            <Items/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:4,
        backgroundColor: '#DCDCDC'
    }
})
