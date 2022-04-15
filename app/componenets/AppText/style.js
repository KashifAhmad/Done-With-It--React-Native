import { StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';
const styles = StyleSheet.create({
    text: {
     color:colors.black,  
    
  ...Platform.select({
      ios:{
          fontFamily: 'AvenirNext-DemiBold', 
          fontSize: 20
      }, 
      android:{
          fontFamily: 'Roboto',
          fontSize: 18
      }
  })
    },
  });
  export default styles;