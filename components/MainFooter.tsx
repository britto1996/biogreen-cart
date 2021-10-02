import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function MainFooter() {
    return (
        <View style={styles.mainFooterContainer}>
            <Text>Add your footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainFooterContainer:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"green",
        padding:25
    }
})
