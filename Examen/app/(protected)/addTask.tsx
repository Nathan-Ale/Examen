import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { useTasks } from '@/contexts/TaskContext';
import { router } from 'expo-router';

const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {addTask} = useTasks();

  const handleAddTask = () => {
    if (title.trim() === '' || description.trim() === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    addTask(title, description);

    setTitle('');
    setDescription('');
    
    router.replace('/inicio')

    Alert.alert('Éxito', 'La tarea se ha agregado correctamente.');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Descripción de la tarea"
        value={description}
        onChangeText={setDescription}
        multiline
      />
        <TouchableOpacity style={styles.Button}
        onPress={handleAddTask  }
        >
            <Text style={styles.ButtonText}>Agregar Tarea</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  Button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,},
    addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    },
    ButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
      },
});

export default AddTaskScreen;