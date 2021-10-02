
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import ItemsContainer from './components/ItemsContainer';
import BasketContainer from './components/BasketContainer';
import Footer from './components/Footer';
import MainFooter from './components/MainFooter';

// const Drawer = createDrawerNavigator();

// function MyDrawer(){
//   return(
//     <Drawer.Navigator>
//       {/* <Drawer.Screen name="Home" component={Home} /> */}
//     </Drawer.Navigator>
//   )
// }

export default function App() {
  return (
    
       <View style={styles.container}>
         <Header/>
         <ItemsContainer/>
         <BasketContainer/>
         <Footer/>
         <MainFooter/>
      </View>
    
   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
