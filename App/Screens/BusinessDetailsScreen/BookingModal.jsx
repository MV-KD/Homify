import { View, Text, TouchableOpacity ,StyleSheet, FlatList, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import moment from 'moment'

export default function BookingModal({businessId, hideModal }) {

  const [timeList , setTimeList] = useState();
  const [selectedTime , setSelectedTime] = useState();
  const [selectedDate , setSelectedDate] = useState();
  const [note , setNote] = useState();
  const {user} =useState();
  useEffect(()=>{
    getTime();
  } , [])
  
  const getTime=()=>{
    const timeList = [];
    for(let i = 8 ; i<=12 ; i++){
      timeList.push({
        time:i+':00 AM'
      })
      timeList.push({
        time:i+':30 AM'
      })
    }
    for(let i = 1 ; i<=7 ; i++){
      timeList.push({
        time:i+':00 PM'
      })
      timeList.push({
        time:i+':30 PM'
      })
    }
    setTimeList(timeList);
  }

  const createNewBooking = () => {
    if (!selectedTime || !selectedDate) {
      ToastAndroid.show('Please select Date and Time ', ToastAndroid.LONG);
      return;
    }
    const data = {
      userName: 'Reshmika',
      userEmail: 'reshmikaks19@gmail.com',
      time: selectedTime,
      date: moment(selectedDate).format('DD-MMM-YYY'),
      note: note, // Should be note: note, not note: text
      businessId: businessId
    };
    GlobalApi.createBooking(data)
      .then(resp => {
        console.log("Resp", resp);
        ToastAndroid.show('Booking Created Successfully!', ToastAndroid.LONG);
        hideModal();
      })
      .catch(error => {
        console.error('Error creating booking:', error);
        // Handle error
      });
  };

  return (
    <ScrollView>
    <KeyboardAvoidingView style={{ padding: 20  }}>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={hideModal}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text style={{ fontSize: 25, fontFamily: 'Outfit-medium' , marginBottom : 20 }}> Booking</Text>
      </TouchableOpacity>
      <Heading text = {'Select Date'}/>

      <View style={styles.calenderContainer}>
      
      <CalendarPicker 
      onDateChange={setSelectedDate} 
      width={340}
      minDate={Date.now()}
      todayBackgroundColor={Colors.BLACK}
      todayTextStyle={{color:Colors.WHITE}}
      selectedDayColor = {Colors.PRIMARY}
      selectedDayTextColor={Colors.WHITE}
      selectedBackgroundColor={Colors.PRIMARY}
      />
      </View>

      <View style={{ marginTop: 20 }}>
        <Heading text = {'Select Time Slot'}/>
        <FlatList
        data ={timeList}
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        renderItem={({item , index})=>(
          <TouchableOpacity style={{marginRight : 10}}
          onPress={()=>setSelectedTime(item.time)}
          >
            <Text style={[selectedTime==item.time ? styles.selectedTime : styles.unSelectedTime]}>{item.time}</Text>
          </TouchableOpacity>
        )}
        />
      </View>

      <View style={{paddingTop : 20}}>
        <Heading text = {'Any Suggestion Note'}/>
        <TextInput placeholder='Note' 
        numberOfLines={4} multiline = {true}
        style={styles.noteTextArea} 
        onChange={(text)=>setNote(text)}/>

      </View>

      <TouchableOpacity onPress={()=>createNewBooking()}>
        <Text style = {styles.confirmBtn}>
          Confirm & Book
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calenderContainer :{
    backgroundColor : Colors.PRIMARY_LIGHT,
    padding : 20,
    borderRadius : 10
  },
  unSelectedTime : {
    padding : 10 ,
    borderWidth : 1,
    borderColor : Colors.PRIMARY,
    borderRadius : 99,
    paddingHorizontal : 18 ,
    color: Colors.PRIMARY
  },
  selectedTime :{
    padding : 10 ,
    borderWidth : 1,
    borderColor : Colors.PRIMARY,
    borderRadius : 99,
    paddingHorizontal : 18 ,
    backgroundColor : Colors.PRIMARY,
    color: Colors.WHITE
  
    
  },
  noteTextArea:{
    borderWidth : 1,
    borderRadius : 15,
    textAlignVertical : 'top',
    padding : 20 ,
    fontSize : 16 ,
    fontFamily : 'Outfit',
    borderColor : Colors.PRIMARY,
  },
  confirmBtn : {
    marginTop : 15,
    textAlign : 'center',
    fontFamily : 'Outfit-medium',
    fontSize : 17,
    backgroundColor : Colors.PRIMARY,
    color : Colors.WHITE,
    padding : 15,
    borderRadius : 99 ,
    elevation:2
  }
})
