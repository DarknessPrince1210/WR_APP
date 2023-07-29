import { Button, TextInput, View } from "react-native";

import React from "react";
import colors from "../../constants/colors";
import {styles} from "./style"

const CustomInput=({water,onChangeText,textPlaceHolder,onPressButton,keyboardType})=>{
    return(
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholderTextColor={colors.placeholder}
            placeholder={textPlaceHolder}
            value={water}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            enabled={false}
          />
          <Button 
            title='Confirmar' 
            color={colors.button}
            style={styles.btn}
            onPress={onPressButton}
            disabled={water.trim()===''}
            />
        </View>
    )
}

export default CustomInput
