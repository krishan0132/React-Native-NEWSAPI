import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import NewsScreen from './NewsScreen';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.mainview}>
      <Text style={styles.text}> Welcome to Today </Text>
      <Text style={styles.text}> NEWS </Text>
      <TouchableOpacity style={styles.gotonews}
      onPress={()=>navigation.navigate('NewsScreen')}
      >
               <Text style={styles.btntext}>Latest News</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#off',
  },
  text: {
    fontSize: responsiveFontSize(5),
    color: 'red'
  },
  gotonews:{
    height:responsiveHeight(10),
    width:responsiveWidth(40),
    backgroundColor:'blue',
    marginTop:responsiveHeight(10),
    borderRadius:responsiveWidth(5),
    justifyContent:'center',
    alignItems:'center'
  },
  btntext:{
    fontSize:responsiveFontSize(3),
    color:'white'
  }
});