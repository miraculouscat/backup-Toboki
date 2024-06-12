import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView} from 'react-native';
// import {CheckBox} from '@react-native-community/checkbox'
import { Link, useRouter } from "expo-router";

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const [isSelected, setSelection] = useState(false);

  const handleSignUp = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('nama:', nama);
    console.log('email:', email);
    console.log('isSelected:', isSelected);
    router.push('/personalisasi');
  };

  return (
    <ImageBackground source={require('../assets/login.png')} style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.title}>Buat Akun</Text>
        <Text style={styles.text}>Ayo bergabung dengan Toboki sekarang!</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan Nama"
          value={nama}
          onChangeText={setNama}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Verifikasi Password"
          secureTextEntry={true}
        />
        {/* <View style={styles.checkboxContainer}>
            <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            />
            <Text style={styles.label}>Saya telah membaca dan menyetujui kebijakan privasi</Text>
        </View> */}

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>Sudah memiliki akun? 
          <Link href="/">
            <Text style={styles.signupLink}> Log In</Text>
          </Link>
        </Text>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A5C9C'
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 25,
    borderRadius: 30,
    marginLeft: 15,
    marginRight: 15,
    marginTop:160,
    marginBottom:50,
    shadowColor:'black', 
    shadowOpacity:0.25,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 4},
    width: 314,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4A5C9C',
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#6678B7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  signupText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign:'center'
  },
  signupLink: {
    color: '#6678B7',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  }
});

export default SignUpScreen;