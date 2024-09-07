import { View, Text, Image , StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


import { useFonts } from 'expo-font';
/*async function loadFonts() {
    await Font.loadAsync({
      'Outfit-bold': require('./../../../assets/fonts/Outfit-Bold.ttf'), // Replace with the actual path to your font file
    });
  }*/
export default function Header() {
    //const {user , isLoading} =useUser();
    /*useEffect(() => {
        loadFonts();
      }, []);*/
  return (
    <View style={styles.container}>
    <View  style={styles.ProfileMainContainer}>
        <View style={styles.Profilecontainer}>
            <Image source={require('./../../../assets/images/Manivelan Kalidass.jpg')}
            style={styles.userImage}
            />
            <View>
                <Text style={{color:Colors.WHITE , fontFamily:'Outfit'}}>Welcome , </Text>
                <Text style={{color:Colors.WHITE , fontSize:20 , fontFamily:'Outfit-bold'}}>Manivelan Kalidass</Text>
            </View>
            
        </View>
        <FontAwesome5 name="bookmark" size={27} color="white" />
    </View>
    <View style={styles.SearchBarContainer}>
        <TextInput placeholder='Search'
        style={styles.textInput}/>
        <FontAwesome name="search" 
        style={styles.SearchBtn}
        size={24} color={Colors.PRIMARY} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20, // Adjust padding as needed
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius : 25
    },
    ProfileMainContainer:{
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center' ,
        justifyContent : 'space-between'
    },
    userImage : {
        width: 50, // Adjust width as needed
        height: 50, // Adjust height as needed 
        borderRadius: 50,
        
    },
    Profilecontainer :{
            display : 'flex',
            flexDirection : 'row',
            alignItems : 'center' ,
            gap : 10
    },
    textInput :{
        padding : 7,
        paddingHorizontal : 16,
        backgroundColor : Colors.WHITE,
        borderRadius : 8,
        width : '85%',
        fontSize : 16
    },
    SearchBarContainer :{
        marginTop : 15,
        display : 'flex',
        flexDirection : 'row',
        gap : 10 , 
        marginBottom : 10
    },
    SearchBtn :{
        backgroundColor : Colors.WHITE,
        padding : 10,
        borderRadius : 8
    }
})




