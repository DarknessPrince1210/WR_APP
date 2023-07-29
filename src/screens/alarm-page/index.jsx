import { Button, FlatList, Image, ImageBackground, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CustomModal, DownMenu } from '../../components';
import React, {useEffect, useState}  from 'react';
import { requestPermissionsAsync, scheduleNotificationAsync } from 'expo-notifications';

import AlarmInput from '../../components/input3';
import Alarms from '../../components/alarms';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import colors from "../../constants/colors";
import {styles} from "./style"

const AlarmPage=({goLogin,goHome})=>{
  
    const[water,setWater]=useState('');
    const[waterList,setWaterList]=useState([]);
    const[clockSelected,setClockSelected]=useState('');
    const[waterSelected,setWaterSelected]=useState('');
    const[modalVisible,setModalVisible]=useState(false)
    const [date, setDate] = useState(new Date());
    const [clockList, setClockList] = useState([]);
    const [showPicker, setShowPicker] = useState(false);

    useEffect(() => {
      getStoredAlarms();
    }, []);
    
    const getStoredAlarms = async () => {
      try {
        const storedAlarms = await AsyncStorage.getItem('alarms');
        if (storedAlarms) {
          setClockList(JSON.parse(storedAlarms));
        }
      } catch (error) {
        console.error('Error al obtener las alarmas almacenadas:', error);
      }
    };
    
  
    const registerForPushNotificationsAsync = async () => {
      const { status: existingStatus } = await requestPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        console.error('Permiso de notificación no otorgado');
        return;
      }
      // Resto del código para obtener el token de notificación
    };

    const handleDateChange = (event, selectedDate) => {
      setShowPicker(false);
  
      if (selectedDate) {
        setDate(selectedDate);
      }
    };

    

    const showDatePicker = () => {
      setShowPicker(true);
    };
    
    const formatTime = (date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
  
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };

    const abrirPaginaWeb = async () => {
      const url = 'https://waterreminderdeploy2-production.up.railway.app/login'; // Aquí debes proporcionar la URL de la página web a la que deseas redirigir
    
      try {
        await Linking.openURL(url);
      } catch (error) {
        console.error('Error al abrir la página web:', error);
      }
    };
    
  
    const onDeletItem=(id)=>{
      setClockList(currentItems=>currentItems.filter(item=>item.id!=id));
      setClockSelected({});
    }
  
    const onHandleModal=(id)=>{
      setWaterSelected(waterList.find(water=>water.id===id));
      setModalVisible(!modalVisible)
  
    }

    const addAlarm = async () => {
      const newClock = {
        id: clockList.length + 1,
        value: formatTime(date)
      };
      const updatedAlarms = [...clockList, newClock];
      setClockList(updatedAlarms);

      
      await scheduleNotificationAsync({
        content: {
          title: 'Recordatorio',
          body: 'Es hora de tomar agua',
          sound: true,
        },
        trigger: {
          hour: date.getHours(),
          minute: date.getMinutes(),
          repeats: true, // Para repetir la notificación diariamente, cambia a `false` si solo deseas una notificación única
        },
      });
    };
  
    const renderItem = ({ item }) => (
      <Alarms 
      item={item} 
      delAlarm={onDeletItem}
      />
    );
    

    return(
        <View >
            <Text style={styles.company}>Water Reminder</Text>
            <Text style={styles.welcome}>Alarmas</Text>
            <Text style={styles.name}>No lo olvides...</Text>
            <TouchableOpacity onPress={registerForPushNotificationsAsync}>
              <AntDesign name="clockcircleo" size={130} color="white" style={styles.vaso} />
            </TouchableOpacity>
            <AlarmInput
            showClock={showDatePicker}
            cambiarFecha={formatTime}
            handleDateChange={handleDateChange}
            hora={date}
            showPicker={showPicker}
            addAlarm={addAlarm}
            
            />



        
            <DownMenu
            home={colors.noSelected}
            alarms={colors.selectedColor}
            web={colors.noSelected}
            login={colors.noSelected}
            onPressConfig={abrirPaginaWeb}
            goBack={goLogin}
            goHome={goHome}


            />
            <View style={styles.listContainer}>
                <FlatList
                data={clockList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                />

            
            </View>
            
            

            <CustomModal animationType='fade' estadoModal={modalVisible}>
            <View style={styles.modal}>
                    <View style={styles.modalContentContainer}>
                        <Text style={styles.modalTitle}>Detalle del consumo</Text>
                    </View>
                    <View style={styles.modalContentContainer}>
                        <Text style={styles.modalItem}>{waterSelected.value}</Text>
                    </View>
                    <View style={styles.modalButton}>
                        <Button title="ACEPTAR" onPress={()=>onHandleModal(!modalVisible)} color='#ECBD3D'/>
                    </View>
            </View>
            </CustomModal>
            
        </View>
    )   
}


export default AlarmPage;
