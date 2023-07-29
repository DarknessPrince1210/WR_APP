import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      backgroundColor: 'transparent'
    },
    listContainer:{
      marginVertical:20,
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
      marginTop:-10,
      textAlign:'center',
      color:colors.wprimary,
      fontSize:36
    },
    user:{
      marginLeft:138,
      height:226,
      width:226,
      marginTop:60,
      marginBottom:-60    },
    miniVaso:{
      height:70,
      width:70
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
      marginTop: 10,
      marginBottom: 20,
    },
    eyeIcon: {
      marginLeft: -50,
    },
    other:{
      color:'white',
      textAlign:'center',
      marginBottom:20

    }
  });