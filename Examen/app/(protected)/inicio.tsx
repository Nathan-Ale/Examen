import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TaskCard from '../../components/TaskCard';
import { useAuth } from '../../contexts/AuthContext'; 
import { router } from 'expo-router';
import { useTasks } from '@/contexts/TaskContext';

const InicioScreen = () => {
  const { logout } = useAuth();
  const { tasks } = useTasks();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Lista de Tareas Pendintes</Text>

      <ScrollView>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
        </TouchableOpacity>
{/* 
        <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/addTask')}
      >
        <Text style={styles.addButtonText}>Agregar Tarea</Text>
      </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  logoutButton: {
    backgroundColor: '#ff4444', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  title:{
    textAlign:"center",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default InicioScreen;