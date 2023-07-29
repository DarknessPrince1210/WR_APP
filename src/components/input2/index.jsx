import { Button, TextInput, View } from "react-native";

import React from "react";
import colors from "../../constants/colors";
import {styles} from "./style"

const CustomInput2=({vista,texto,onChangeText,textPlaceHolder,onPressButton,keyboardType})=>{
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                placeholderTextColor={colors.placeholder}
                placeholder={textPlaceHolder}
                value={texto}
                onChangeText={onChangeText}
                secureTextEntry={vista}
                keyboardType={keyboardType}
            />

        </View>
    )
}

export default CustomInput2
