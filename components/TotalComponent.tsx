import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'

export default function TotalComponent() {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.goodsStyle}>
                <Icon name="ios-cart" size={20} style={{marginRight:8}} />
                <Text>8 Goods</Text>
            </View>
            <View style={styles.totalStyle}>
                <Text>Total -</Text>
                <Text>INR 300</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:15
    },
    goodsStyle:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    totalStyle:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})
