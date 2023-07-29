import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:30,
        paddingHorizontal:20,
        paddingLeft:90

      },
    input:{
    borderBottomWidth:1,
    borderBottomColor:'white',
    width:'80%',
    color:colors.wprimary,
    textAlign:'left',
    paddingLeft:6,
    fontSize:20
    
    }
})

