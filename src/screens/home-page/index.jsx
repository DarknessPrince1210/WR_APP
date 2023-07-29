import { Button, FlatList, Image, ImageBackground, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CustomInput, CustomModal, DownMenu, Items } from '../../components';
import React, {useState}  from 'react';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import colors from "../../constants/colors";
import {styles} from "./style"

const HomePage=({goLogin,goAlarm})=>{
    const[water,setWater]=useState('');
    const[waterList,setWaterList]=useState([]);
    const[waterSelected,setWaterSelected]=useState('');
    const[modalVisible,setModalVisible]=useState(false)
  
    const onChangeText=(text)=>{
      setWater(text);
    }
  
    const addWater=()=>{
      const value=water.trim()
      if(value.length>0){
        setWaterList([
          ...waterList,
          {
            id:waterList.length+1,
            value:water
          }
        ])
        setWater('');
        console.log(water)
      }
    }

    const abrirPaginaWeb = async () => {
      const url = 'https://waterreminderdeploy2-production.up.railway.app/login'; // Aquí debes proporcionar la URL de la página web a la que deseas redirigir
    
      try {
        await Linking.openURL(url);
      } catch (error) {
        console.error('Error al abrir la página web:', error);
      }
    };
    
  
    const onDeletItem=(id)=>{
      setWaterList(currentItems=>currentItems.filter(item=>item.id!=id));
      setWaterSelected({});
    }
  
    const onHandleModal=(id)=>{
      setWaterSelected(waterList.find(water=>water.id===id));
      setModalVisible(!modalVisible)
  
    }
  
    const renderItem=({item})=>(  //Como funciona
      <Items 
      item={item} 
      estadoModal={onHandleModal} 
      delWater={onDeletItem}
      />
    )

    const calculateSum = () => {
      const sum = waterList.reduce((total, item) => total + parseInt(item.value), 0);
      return sum;
    }

    return(
        <View >
            <Text style={styles.company}>Water Reminder</Text>
            <Text style={styles.welcome}>Bienvenido</Text>
            <Text style={styles.name}>{calculateSum()} mL</Text>
            <Image source={require('../../../assets/agua.gif')} style={styles.vaso}/>
            <CustomInput
            water={water}
            onChangeText={onChangeText}
            textPlaceHolder='Cant. mL'
            onPressButton={addWater}
            keyboardType='numeric'
            />
            <DownMenu
            home={colors.selectedColor}
            alarms={colors.noSelected}
            web={colors.noSelected}
            login={colors.noSelected}
            onPressConfig={abrirPaginaWeb}
            goBack={goLogin}
            goAlarm={goAlarm}
            />
            <View style={styles.listContainer}>
                <FlatList
                data={waterList}
                renderItem={renderItem}
                keyExtractor={(water)=>water.id}
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


export default HomePage;
