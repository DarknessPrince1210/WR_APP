import { Button, FlatList, Image, ImageBackground, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState}  from 'react';

import AlarmPage from './screens/alarm-page';
import HomePage from './screens/home-page';
import LoginPage from './screens/login-page';
import colors from './constants/colors';

export default function App() {
  
  const[screen, setScreen]=useState('login');
  
  const goHome=()=>{
    setScreen('home');
  }

  const goLogin=()=>{
    setScreen('login');
  }

  const goAlarm=()=>{
    setScreen('alarm');
  }

  let content;

  if (screen==='login') {
    content=<LoginPage goHome={goHome} />
  }else if(screen==='home'){
    content=<HomePage goLogin={goLogin} goAlarm={goAlarm} />
  }else if(screen==='alarm'){
    content=<AlarmPage goLogin={goLogin} goHome={goHome}  />
  }
  return <View style={styles.container}>{content}</View>
}
//{content}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background
  }
});
