import { Button, Text, TouchableOpacity, View } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React from "react";
import colors from "../../constants/colors";
import {styles} from "./style"

const Alarms=({item,estadoModal,delAlarm})=>{
    return (
        <View style={styles.waterItems}>
            <TouchableOpacity>
            <Ionicons name="timer-outline" size={24} color={colors.background} />
            </TouchableOpacity>
            <Text>{item.value}</Text>
            <TouchableOpacity onPress={()=>delAlarm(item.id)}>
                <AntDesign name="closecircleo" size={24} color={colors.customYellow} />
            </TouchableOpacity>
        </View>
    )
}

export default Alarms;
