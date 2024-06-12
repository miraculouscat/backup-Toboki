import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import { Link, useRouter } from "expo-router";

const PersonalisasiKomunitasScreen = () => {
  const router = useRouter();

  const handleSave = () => {
    router.push('/homePage');
  }

  const handleBack = () => {
    router.push('/personalisasi')
  }

  return (
    <ImageBackground source={require('../assets/personalisasi.png')} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.greeting}>Bergabung dengan Komunitas</Text>
          <Text style={styles.description}>
            Pilih komunitas favoritmu atau buat sendiri!
          </Text>
          
          <View style={styles.communityContainer}>
            <Image
              source={require('../assets/komunitas1.png')}
              style={styles.communityImage}
            />
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Gabung</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.communityContainer}>
            <Image
              source={require('../assets/komunitas2.png')}
              style={styles.communityImage}
            />
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Buat Komunitas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={handleBack}>
                <Text style={styles.skipText}>Sebelumnya</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSave}>
              <Text style={styles.skipText}>Lewati</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    width: '90%',
    marginTop: 25,
    marginBottom: 25
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A5C9C',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#6678B7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  skipText: {
    color: '#4A5C9C',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: "underline",
    marginHorizontal: 72
  },
  communityContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  communityImage: {
    width: 300,
    height: 160,
    resizeMode: 'contain',
  },
  joinButton: {
    backgroundColor: '#4A5C9C',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 10,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default PersonalisasiKomunitasScreen;
