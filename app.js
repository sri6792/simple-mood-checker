import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, Button } from 'react-native';
export default function App()
{
  const [name, setName] = useState("");
  const [mood, setMood] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    if(name.trim() !== "" && mood.trim() !== ""){
      setSubmitted(true);
    }
  };
 
  
  return(
    <View style = {styles.container}>
      <Text style = {styles.heading}>Enter Your Name:</Text>
      <TextInput
      style={styles.input}
      placeholder="type here.."
      value={name}
      onChangeText={(text)=>{
        setName(text);
        setSubmitted(false);
      }}
      />
      <Text style = {styles.heading}>how is your mood ?:</Text>
      <TextInput
      style={styles.input}
      placeholder="enter your mood.."
      value={mood}
      onChangeText={(text)=>{
        setMood(text);
        setSubmitted(false);
      }}
      />
      <Button title = "submit" onPress = {handleSubmit}/>
      {submitted && (
         <Text style={styles.output}>Thank You, {name}! 
         you're feeling {mood} today!</Text>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading:{
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    borderRadius: 8,
    width:'100%',
    marginBottom: 20,
    fontSize: 16,
  },
  output: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3c3c3c',
    marginTop: 20,
    textAlign: 'center',
  },
});
