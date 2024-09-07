import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation , useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import { FontAwesome6 } from '@expo/vector-icons';
import BusinessPhotos from './BusinessPhotos';
import BusinessAboutMe from './BusinessAboutMe';
import BookingModal from './BookingModal';


export default function BusinessDetailsScreen() {

  const param = useRoute().params;
  const [business , setBusiness] = useState(param.business);
  const [showModal,setShowModal]=useState(false);
  
  const navigation = useNavigation();

  useEffect(()=>{

    param&&setBusiness(param.business)
    console.log(param?.business)
  },[param])

  const onMessageBtnClick = () => {
    const email = business?.email;
    if (email) {
      Linking.openURL(`mailto:${email}?subject=I am looking for your service&body=Hi There`);
    } else {
      console.error('No email address provided');
    }
  };

 
  return (
    <View>
      <ScrollView style={{height:'91.5%'}}>
        
        <TouchableOpacity style={styles.backBtnContainer} 
        onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Image source={{uri:business?.images[0]?.url}}
        style={{width:'100%',height:300}}
        />
        <View style={styles.infoContainer}>

          <Text style={{fontFamily:'Outfit-bold',fontSize:25}}>
            {business?.name}</Text>

          <View style={styles.subContainer}>
            <Text style={{
              fontFamily : 'Outfit-medium',color:Colors.PRIMARY ,  fontSize : 20
            }}>{business?.contactPerson} 🌟</Text>
            <Text style={{
              color:Colors.PRIMARY, backgroundColor:Colors.PRIMARY_LIGHT,padding:5,borderRadius:8 , fontSize:14
            }}>{business?.category.name}</Text>
          </View>

          <Text style={{fontSize:17,fontFamily:'Outfit',color:Colors.GRAY}}>
            <FontAwesome6 name="location-dot" size={22} color={Colors.PRIMARY} /> 
                { business?.address}
          </Text>
          
          <View style={{borderWidth:0.4,borderColor:Colors.GRAY,marginTop:20,marginBottom:20}}></View>
        
          <BusinessAboutMe business={business}/>

          <View style={{borderWidth:0.4,borderColor:Colors.GRAY,marginTop:20,marginBottom:20}}></View>
         
          <BusinessPhotos business={business}/>
        </View>
        
      </ScrollView>
      <View style={{
        display:'flex', flexDirection:'row' , gap : 8 , margin : 5 ,marginBottom : 15
      }}>
        <TouchableOpacity style={styles.messagebtn}
        onPress={()=>onMessageBtnClick()}>
          <Text style={{textAlign:'center' , fontFamily:'Outfit-medium ',color:Colors.PRIMARY , fontSize:18}}>
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingbtn}
        onPress={()=>setShowModal(true)}>
          <Text style={{textAlign:'center' , fontFamily:'Outfit-medium ',color:Colors.WHITE , fontSize:18}}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    
      <Modal animationType='slide' visible={showModal}>
        <BookingModal 
        business={business.id}
        hideModal={()=>setShowModal(false)} />
      </Modal>

    </View>
  )
}
const styles = StyleSheet.create({
  backBtnContainer:{
    position:'absolute',
    zIndex : 10,
    padding:20
  },
  infoContainer : {
    padding : 20 ,
    display : 'flex',
    gap : 7
  },
  subContainer:{
    display:'flex',
    flexDirection:'row',
    gap: 5,
    alignItems:'center'
  },
  messagebtn :{
    padding:15,
    backgroundColor:Colors.WHITE,
    borderWidth:1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex : 1
  },
  bookingbtn :{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderWidth:1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex : 1
  },
  
})