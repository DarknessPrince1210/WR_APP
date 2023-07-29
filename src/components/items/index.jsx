import { Button, Text, TouchableOpacity, View } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React from "react";
import colors from "../../constants/colors";
import {styles} from "./style"

const Items=({item,estadoModal,delWater})=>{
    return (
        <View style={styles.waterItems}>
            <TouchableOpacity>
                <MaterialIcons name="local-drink" size={24} color={colors.background} />
            </TouchableOpacity>
            <Text>{item.value} mL</Text>
            <TouchableOpacity onPress={()=>delWater(item.id)}>
                <AntDesign name="closecircleo" size={24} color={colors.customYellow} />
            </TouchableOpacity>
        </View>
    )
}

export default Items;
