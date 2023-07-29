import { Button, TextInput, View } from "react-native";

import React from "react";
import colors from "../../constants/colors";
import {styles} from "./style"

const CustomButton=({valId,text,color,onPress})=>{
    return(
        <View style={styles.buttonContainer}>
            <Button 
            title={text} 
            color={color}
            style={styles.btn}
            onPress={()=>{
                onPress();
                valId();


            }
                }
            />

        </View>
    )
}

export default CustomButton
