import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Entypo, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../../Styles';

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <View style={Styles.navBar}>
      <View style={Styles.flex}>
        <TouchableOpacity
          style={Styles.menuIcon}
          onPress={() => navigation.navigate('Home')}>
          <Entypo name="home" size={24} color="#7939CB" />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.menuIcon}
          onPress={() => navigation.navigate('Applications')}>
          <FontAwesome name="wpforms" size={24} color="#7939CB" />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.menuIcon}
          onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="ios-notifications" size={24} color="#7939CB" />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.menuIcon}
          onPress={() => navigation.navigate('Profile')}>
          <Feather name="user" size={24} color="#7939CB" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
