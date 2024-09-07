import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function BusinessListItem({business , booking}) {
  if (!business) {
    // Handle the case where business data is null
    return (
      <View style={{ padding: 20 }}>
        
      </View>
    );
  }
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} 
    onPress={()=>navigation.push('business-detail',{
      business:business}
      )}
    >
      <Image source={{uri:business?.images[0]?.url}}
      style={styles.image}/>
      <View style ={styles.subContainer}>
        <Text style={{fontFamily:'Outfit',
      color:Colors.GRAY,fontSize:16}}>{business.contactPerson}</Text>
        <Text style={{fontFamily:'Outfit-bold',
      fontSize:20}}>{business.name}</Text>
        <Text style={{fontFamily:'Outfit',
      color:Colors.GRAY,fontSize:17}}>
        <FontAwesome6 name="location-dot" size={24} color={Colors.PRIMARY} />
        {business.address}</Text>

        {booking?.id?<Text style={{
          fontFamily:'Outfit' , color:Colors.GRAY , fontSize: 16
        }}><AntDesign name="calendar" size={24} color={Colors.PRIMARY} 
        style={{marginRight: 15}}
        />
          {booking.date} at {booking.time} </Text>:null}
      </View>
    </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
  container:{
      padding :10,
      backgroundColor: Colors.WHITE,
      borderRadius:15,
      marginBottom:15,
      display:'flex',
      flexDirection:'row',
      gap:10
      
  },
  image:{
    width:100,
    height : 100,
    borderRadius : 15
  },
  subContainer:{
    display:'flex',
    gap:7
  }
})