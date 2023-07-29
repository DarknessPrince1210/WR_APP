import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles=StyleSheet.create({
    inputContainer:{

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:0,
        paddingHorizontal:20,
      },
    input:{
    borderBottomWidth:1,
    borderBottomColor:'white',
    width:'35%',
    color:colors.wprimary,
    textAlign:'center'
    }
})

