import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const BookClubCard = ({ title, members }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text>{members} Members</Text>
  </View>
);

const BookClubApp = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.header}>Klub Buku</Text>
    <ScrollView horizontal>
      <BookClubCard title="Pecinta Fiksi" members="20" />
      <BookClubCard title="Bandung Book Lovers" members="20" />
      <BookClubCard title="Good Reads" members="20" />
    </ScrollView>
    <Text style={styles.header}>Populer</Text>
    {/* Add more BookClubCard components here */}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookClubApp;
