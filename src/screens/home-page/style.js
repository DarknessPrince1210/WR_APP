import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      backgroundColor: 'transparent'
    },
    listContainer:{
      marginVertical:15,
      paddingLeft:'23%',
      height: 300,
      
    },
    company:{
      color:colors.wprimary,
      fontSize:19,
      fontWeight:'bold',
      fontStyle:'normal',
      paddingLeft:20,
      paddingTop:40
    },
    welcome:{
      textAlign:'center',
      color:colors.customYellow,
      fontSize:36,
      paddingTop:30,
      fontWeight:'bold'
    },
    name:{
      marginTop:0,
      textAlign:'center',
      color:colors.wprimary,
      fontSize:36
    },
    vaso:{
      marginLeft:'19%',
      height:226,
      width:226
    },
    miniVaso:{
      height:70,
      width:70
    }
  });