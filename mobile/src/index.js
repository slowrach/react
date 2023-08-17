import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import api from './services/api';

export default function App() {
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      api.get('projects').then(response => {
         setProjects(response.data);
      });
   }, []);

   async function handleAddProject() {
      const response = await api.post('projects', {
         name: `Guitarist n° ${Date.now()}`,
         career: 'Guitarist'
      });

      const newProject = response.data;

      setProjects([...projects, newProject]);
   }

   return (
      <>
         <StatusBar barStyle={'dark-content'} backgroundColor={'#7159c1'}/>

         <SafeAreaView style={styles.container}>
            <FlatList
               data={projects}
               keyExtractor={project => project.id}
               renderItem={({item: project}) => (
                  <Text style= {styles.project}>{project.name}</Text>
               )}
            />

            <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
               <Text style={styles.buttonText}>Adicionar projeto</Text>
            </TouchableOpacity>
         </SafeAreaView>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#7159c1',
   },

   project: {
      color: '#FFF',
      fontSize: 30,
   },

   button: {
      backgroundColor: '#FFF',
      margin: 20,
      height: 50,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center'
   },

   buttonText: {
      fontWeight: 'bold',
      fontSize: 16,
   },
});

// tags do react-native:
// View = div, footer, header, main, aside, section (html)
// Text = p, span, strong, h1, h2, h3 (html)