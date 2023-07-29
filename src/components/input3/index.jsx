import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import React from "react";
import colors from "../../constants/colors";
import {styles} from "./style"

const AlarmInput=({permisoAlarma,addAlarm,showPicker,handleDateChange,cambiarFecha,showClock,hora})=>{
    return(
        <View style={styles.inputContainer}>
          {/* <TextInput 
            style={styles.input} 
            placeholderTextColor={colors.placeholder}
            placeholder={textPlaceHolder}
            value={water}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            enabled={false}
          /> */}
          <TouchableOpacity>
            <MaterialIcons name="add-alarm" size={43} color="white" onPress={showClock} />
          </TouchableOpacity>
          <Text style={styles.texto1}>
            Alarma a las: {cambiarFecha(hora)}
          </Text>
          {showPicker && (
                    <DateTimePicker
                      value={hora}
                      mode="time"
                      display="default"
                      onChange={handleDateChange}
                    />
                  )}
          <Button 
            title='Confirmar' 
            color={colors.button}
            style={styles.btn}
            onPress={addAlarm}
            />
        </View>
    )
}

export default AlarmInput
