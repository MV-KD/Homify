import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const navigation = useNavigation()
    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        GlobalApi.getCategories().then(resp => {
            //console.log(resp);
            setCategories(resp?.categories);
        });
    }

    return (
        <View style={{ marginTop: 10 ,  }}>
            <Heading text={'Categories'} isViewAll={true} />
            <FlatList
                data={categories}
                numColumns={5}
                renderItem={({ item, index }) =>index<=3&& (
                    <View style={{flex: 1}}>
                    <TouchableOpacity style={styles.container}
                    onPress={()=>navigation.push('business-list',{
                        category:item.name
                    })}>
                        <View style={styles.iconContainer}> 
                            <Image source={{uri:item?.icon?.url}}
                            style={{width:30,height:30}}/>
                        </View>
                        <Text style={{fontFamily:'Outfit-medium' , marginTop:5}}>{item.name}</Text>
                    </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>


    );
}

const styles=StyleSheet.create({
    iconContainer:{
        backgroundColor : Colors.LIGHT_GRAY,
        padding  : 10,
        borderRadius : 99,

    },
    container:{
        flex : 1,
        alignItems:'center',
        justifyContent: 'center'
    }
})