import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PostCard = ({ avatar, name, username, content }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>{username}</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Image source={require('../assets/heart.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/comment.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/share.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: 'gray',
  },
  followButton: {
    marginLeft: 'auto',
    backgroundColor: '#4A5C9C',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  followButtonText: {
    color: 'white',
    fontSize: 14,
  },
  content: {
    marginTop: 10,
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default PostCard;
