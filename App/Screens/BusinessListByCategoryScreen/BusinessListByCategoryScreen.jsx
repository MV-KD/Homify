import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import Colors from '../../Utils/Colors';
import PageHeading from '../../Components/PageHeading';

export default function BusinessListByCategoryScreen({ navigation }) {
   
    const param = useRoute().params;
    const [businessList , setBusinessList] = useState([]);
   
    useEffect(() => {
        console.log("Category", param.category);
        param && getBusinessByCategory();
    }, [param]);

    const getBusinessByCategory = () => {
        GlobalApi.getBusinessListByCategory(param.category)
        .then(resp => {
            console.log(resp.businessLists);
            setBusinessList(resp.businessLists);
        });
    };
    
    return (
        <View style={{padding: 20, paddingTop: 30}}>
            <PageHeading title={param.category} navigation={navigation} />
            {businessList?.length > 0 ? (
                <FlatList
                    data={businessList}
                    style={{marginTop: 15}}
                    renderItem={({item, index}) => (
                        <BusinessListItem business={item} />
                    )}
                />
            ) : (
                <Text style={{
                    fontFamily: 'Outfit-bold',
                    color: Colors.GRAY,
                    textAlign: 'center',
                    marginTop: '20%',
                    fontSize: 20
                }}>No Business Found</Text>
            )}
        </View>
    );
}
