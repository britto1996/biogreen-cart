import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'



export default function Header() {
    return (
        <View style={styles.headerStyle}>
            <Icon name="ios-close" size={35} color="#a8a9ad" />
            <Image style={styles.logo} source={require("../images/bioGreen.jpg")} />
            <Icon name="ios-trash" size={35} color="#a8a9ad" />
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle:{
        flex:0.4,
        marginTop:35,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingLeft:15,
        paddingRight:15,
        borderBottomWidth:1,
        borderColor:"#e2e2e2"
    },
    logo:{
        width:75,
        height:50
    }
})