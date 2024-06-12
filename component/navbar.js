import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../assets/home.png')} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../assets/community.png')} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../assets/books.png')} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../assets/profile.png')} style={styles.navIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default Navbar;
