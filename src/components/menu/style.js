import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles=StyleSheet.create({
    
  
  menu:{
    backgroundColor: colors.wprimary,
    flexDirection: 'row',
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'center', // Centrar los elementos horizontalmente
    height: 68,
    marginBottom: -50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: -52
  },
  option:{
    paddingLeft: 35,
    alignItems: 'center',
    
    

  },
})

