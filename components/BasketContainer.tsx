import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BasketContainer() {
    return (
        <View style={styles.basketContainerStyle}>
            {/* <Text style={styles.bagsTextStyle}>2 Bags</Text>
            <Text style={styles.priceTextStyle}>INR 500</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    basketContainerStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor:"#e2e2e2",
        backgroundColor:"#DCDCDC"
    },
    bagsTextStyle:{
        fontSize:12
    },
    priceTextStyle:{
        fontSize:12
    }
})
