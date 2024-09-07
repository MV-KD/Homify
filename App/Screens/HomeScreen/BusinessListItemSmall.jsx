import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItemSmall({business}) {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.push('business-detail' , {
      business : business
    })}>
      <Image source={{uri:business?.images[0]?.url}}
      style={styles.image} 
      />
      <View style={styles.infoContainer}>
        <Text style={{fontSize : 17,
        fontFamily:'Outfit-medium'}}>{business?.name}</Text>
        <Text style={{fontSize : 13,
        fontFamily:'Outfit' ,
        color:Colors.GRAY
        }}>{business?.contactPerson}</Text>

        <Text style={{fontSize : 10,
        fontFamily:'Outfit',padding:3,color:Colors.PRIMARY,
        backgroundColor:Colors.PRIMARY_LIGHT,
        borderRadius:3,
        alignSelf:'flex-start',
        paddingHorizontal:7
        
        }}>{business?.category.name}</Text>

        
      </View>
    </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
    container :{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10
    },
    image:{
        width:160,
        height:100,
        borderRadius:10
    },
    infoContainer:{
        padding:1,
        display :'flex',
        
    }
})