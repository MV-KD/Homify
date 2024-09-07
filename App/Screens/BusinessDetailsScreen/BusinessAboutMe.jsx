import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function BusinessAboutMe({business}) {
    const [isReadMore , setIsReadMore]=useState(false);
    //const navigation = useNavigation();


  return business&&(
    <View>
          
          <Heading text ={'About Me'} />
          <Text style={{fontFamily:'Outfit',
          color:Colors.GRAY,fontSize:16 , lineHeight:28
            }} numberOfLines={isReadMore ? 20 : 5}>
            {business.about}</Text>
          <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
          <Text style={{color:Colors.PRIMARY,fontSize:16 , fontFamily:'Outfit'}}>
            {isReadMore?'Read Less' : 'Read More'}
          </Text>
          </TouchableOpacity>
          
          

        </View>
  )
}