import 'firebase/database'; // Importa el módulo de la base de datos que deseas utilizar (Realtime Database o Firestore)

import { Button, FlatList, Image, ImageBackground, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CustomInput, CustomModal, DownMenu, Items } from '../../components';
import React, {useState}  from 'react';

import { AntDesign } from '@expo/vector-icons';
import CustomButton from '../../components/button';
import CustomInput2 from '../../components/input2';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import colors from "../../constants/colors";
import firebase from 'firebase/app';
import {styles} from "./style"

const LoginPage=({goHome})=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[isVisible, setIsVisible] = useState(true);
    
  
    const onChangeEmail=(text)=>{
      setEmail(text);
    }

    const onChangePassword=(text)=>{
      setPassword(text);
    }

    const vista1=false

    

    const onChangeVisible = () => {
      setIsVisible(prevState => !prevState);
    };

    const abrirPaginaWeb = async () => {
          const url = 'https://waterreminderdeploy2-production.up.railway.app/registrarse';
          try {
            await Linking.openURL(url);
          } catch (error) {
            console.error('Error al abrir la página web:', error);
          }
        };

    const checkIds=()=>{
      if (email!=[''] && password!=['']) {
        if (email==='nidia@gmail.com' && password==='id060704') {
          goHome()
        }else{
          console.log('Credenciales incorrectas')
        }
      }else{
        console.log('Ingresa las credenciales')
      }
    }
        
  
    

    return(
        <View >
            <Text style={styles.company}>Water Reminder</Text>
            <Text style={styles.welcome}>Iniciar Sesion</Text>
            {/* <Image source={require('../../../assets/agua.gif')} style={styles.vaso}/> */}
            <FontAwesome5 name="user-circle" size={120} color="white" style={styles.user} />
            
            <CustomInput2
            texto={email}
            onChangeText={onChangeEmail}
            textPlaceHolder='E-mail'
            keyboardType='email-address'
            vista={vista1}
            />
            <View style={styles.inputContainer}>
              <CustomInput2
              texto={password}
              onChangeText={onChangePassword}
              textPlaceHolder='Password'
              vista={isVisible}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={onChangeVisible}>
                <SimpleLineIcons name="eye" size={35} color="white" />
              </TouchableOpacity>

            </View>

            <CustomButton
              text='LOG-IN'
              color={colors.button}
              onPress={checkIds}
              valId={checkIds}
            />

            <Text style={styles.other}>O</Text>

            <CustomButton
              text='REGISTRARSE'
              color={colors.noSelected}
              onPress={abrirPaginaWeb}
            />
            
        </View>
    )   
}


export default LoginPage;
