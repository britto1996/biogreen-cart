import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TotalComponent from './TotalComponent'

export default function Footer() {
    return (
        <View style={styles.containerStyle}>
            <TotalComponent/>
            <View style={styles.buttonContainerStyle}>
                <View style={styles.closeButtonStyle}>
                    <Text style={{ color: '#fff' }}>Cancel</Text>
                </View>
                <View style={styles.checkOutButtonStyle}>
                    <Text style={{ color: '#fff' }}>Checkout</Text>
                </View>
            </View>
           
        </View>
    )
}


const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        paddingRight:15,
        paddingLeft:15,
        borderTopWidth:1,
        borderColor: '#e2e2e2',
    },
    buttonContainerStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:15
    },
    closeButtonStyle:{
         backgroundColor: '#7f8c8d',
         padding:10,
         paddingRight:30,
         paddingLeft:30,
         borderRadius:3
    },
    checkOutButtonStyle:{
        backgroundColor:"green",
        padding:10,
        paddingRight:60,
        paddingLeft:60,
        borderRadius:3
    },
  
})