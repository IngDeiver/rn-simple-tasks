import React from 'react';
import { View, StyleSheet } from 'react-native';


const CloseSwipeModalArea = () => {
     return (
        <View style={styles.container}>
        <View style={styles.area}/>
      </View>
     )
 }
 
 const styles = StyleSheet.create({
     container:{
        display:"flex", justifyContent:"center", flexDirection:"row"
     },
     area:{
        width:50, height:5, backgroundColor:'grey', borderRadius:20, margin:10
     }
 })
 export default CloseSwipeModalArea