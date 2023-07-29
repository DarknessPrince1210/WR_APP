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
    texto1:{
    borderBottomWidth:1,
    borderBottomColor:'white',
    width:'auto',
    color:colors.wprimary,
    textAlign:'center',
    fontSize:14.5
    }
})

