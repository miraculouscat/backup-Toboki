import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Link, useRouter } from "expo-router";

const genres = {
  fiksi: ['Novel', 'Romantis', 'Fantasi', 'Puisi', 'Horror', 'Fiksi Sejarah'],
  nonFiksi: ['Pengembangan Diri', 'Biografi', 'Sains', 'Sejarah', 'Psikologi', 'Politik']
};

const PersonalisasiScreen = () => {
  const [selectedFiksi, setSelectedFiksi] = useState([]);
  const [selectedNonFiksi, setSelectedNonFiksi] = useState([]);
  const router = useRouter();

  const toggleSelection = (genre, category) => {
    const setSelected = category === 'fiksi' ? setSelectedFiksi : setSelectedNonFiksi;
    const selectedGenres = category === 'fiksi' ? selectedFiksi : selectedNonFiksi;

    if (selectedGenres.includes(genre)) {
      setSelected(selectedGenres.filter(item => item !== genre));
    } else if (selectedGenres.length < 3) {
      setSelected([...selectedGenres, genre]);
    }
  };

  const handleSave = () => {
    router.push('/personalisasiKomunitas');
  }

  return (
    <ImageBackground source={require('../assets/personalisasi.png')} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.greeting}>Halo, User!</Text>
          <Text style={styles.description}>
            Bantu kami untuk meningkatkan pengalaman membaca Anda dengan memilih beberapa opsi di bawah ini
          </Text>
          <Text style={styles.question}>Genre Buku Apa yang Anda Sukai?</Text>
          <Text style={styles.subText}>Pilih hingga tiga opsi untuk masing-masing kategori</Text>
          
          <Text style={styles.category}>Fiksi</Text>
          <View style={styles.genreContainer}>
            {genres.fiksi.map(genre => (
              <TouchableOpacity
                key={genre}
                style={[
                  styles.genreButton,
                  selectedFiksi.includes(genre) && styles.selectedGenreButton
                ]}
                onPress={() => toggleSelection(genre, 'fiksi')}
              >
                <Text style={[
                  styles.genreButtonText,
                  selectedFiksi.includes(genre) && styles.selectedGenreButtonText
                ]}>{genre}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.category}>Nonfiksi</Text>
          <View style={styles.genreContainer}>
            {genres.nonFiksi.map(genre => (
              <TouchableOpacity
                key={genre}
                style={[
                  styles.genreButton,
                  selectedNonFiksi.includes(genre) && styles.selectedGenreButton
                ]}
                onPress={() => toggleSelection(genre, 'nonFiksi')}
              >
                <Text style={[
                  styles.genreButtonText,
                  selectedNonFiksi.includes(genre) && styles.selectedGenreButtonText
                ]}>{genre}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Simpan</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.skipText}>Lewati</Text>
          </TouchableOpacity>
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
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    marginBottom: 8,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 8,
  },
  genreButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 8,
    margin: 6,
  },
  selectedGenreButton: {
    backgroundColor: '#4A5C9C',
    borderColor: '#4A5C9C',
  },
  genreButtonText: {
    color: '#4A5C9C',
  },
  selectedGenreButtonText: {
    color: '#fff',
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
    textDecorationLine: "underline"
  },
});

export default PersonalisasiScreen;
