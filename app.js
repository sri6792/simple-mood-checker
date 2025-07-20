import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// 🔷 Step 1: Your own custom component
function MoodCard(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>
        {props.name} is feeling {props.mood} today! 🌈
      </Text>
    </View>
  );
}

// 🔶 Step 2: Your main App component
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mood Tracker</Text>

      {/* Reuse your component like built-in */}
      <MoodCard name="Radha" mood="Happy 😊" />
      <MoodCard name="Priya" mood="Excited 🎉" />
      <MoodCard name="Anu" mood="Sleepy 😴" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '85%',
    backgroundColor: '#f0f8ff',
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
