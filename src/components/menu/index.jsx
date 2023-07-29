import { Button, Text, TouchableOpacity, View } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React from "react";
import colors from "../../constants/colors";
import {styles} from "./style"

const DownMenu=({home,alarms,web,login,onPressConfig,goBack,goAlarm,goHome})=>{
    return(
        <View style={styles.menu}>
          <TouchableOpacity onPress={goHome} ><Ionicons name="water-outline" size={43} color={home} style={styles.option}/></TouchableOpacity>
          <TouchableOpacity onPress={goAlarm} ><MaterialIcons name="access-alarm" size={42} color={alarms} style={styles.option} /></TouchableOpacity>
          {/* <TouchableOpacity><AntDesign name="addusergroup" size={35} color={colors.noSelected} style={styles.option}/></TouchableOpacity> */}
          <TouchableOpacity onPress={onPressConfig}><MaterialCommunityIcons name="web-plus" size={42} color={web} style={styles.option} /></TouchableOpacity>
          <TouchableOpacity onPress={goBack} ><AntDesign name="logout" size={37} color={login} style={styles.option} /></TouchableOpacity>
        </View>
    )
}

export default DownMenu;
