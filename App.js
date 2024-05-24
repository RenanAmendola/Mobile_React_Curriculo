import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

  const App = () => {
  const [currentSection, setCurrentSection] = useState('Informações Pessoais');

  const renderSection = () => {
    switch (currentSection) {
      case 'Formação Acadêmica':
        return (
          <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          <View style={styles.item}>
            <Text style={styles.itemTitle}>Analise e desenvolvimento de Sistemas</Text>
            <Text>Faculdade Senac Pernambuco</Text>
            <Text>Cursando: 3° Periodo</Text>
            <Text>Ano da Conclusão: 2025</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemTitle}>Desenvolvedor Web Fullsatck - Bootcamp</Text>
            <Text>Generation Brazil</Text>
            <Text>Ano de Conclusão: 2022</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemTitle}>Jogos Digitais</Text>
            <Text>Escola SAGA de Artes</Text>
            <Text>Ano de Conclusão: 2021</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemTitle}>Ciencia da Computação</Text>
            <Text>Faculdade Mauricio de Nassau</Text>
            <Text>Incompleto: 4 Periodos</Text>
          </View>
        </View>
        );
      case 'Experiência Profissional':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experiência Profissional</Text>
            <View style={styles.item}>
              <Text style={styles.itemTitle}>Desenvolvedor web front-end</Text>
              <Text>Metodo Ambiental</Text>
              <Text>Período 01/2023 – Até – 08/2023</Text>
              <Text>Principal atividades: Responsável pela manutenção e suporte do site e também auxiliei no desenvolvimento de novas ferramentas.</Text>
              <Text>Tecnologias aprendidas: JavaScript, PHP, Laravel, MySQL.</Text>
            </View>
            {/* Adicione mais experiências aqui */}
          </View>
        );
      case 'Habilidades':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Habilidades</Text>

            <Text style={styles.sectionTitleHabilidades}>Back-End</Text>
            <Text>- PHP - Básico  </Text>
            <Text>- Python - Básico </Text>
            <Text>- MySQL - Avançado</Text>
            <Text>- Java - Intermediário </Text>


            <Text style={styles.sectionTitleHabilidades}>Front-End</Text>
            <Text>- Angular - Intermediário</Text>
            <Text>- CSS - Intermediário </Text>
            <Text>- JavaScript - Intermediário </Text>
            <Text>- HTML - Avançado </Text>

            <Text style={styles.sectionTitleHabilidades}>Linguas</Text>
            <Text>- Inglês - Avançado </Text>
            <Text>- Espanhol - Intermediário </Text>


            <Text style={styles.sectionTitleHabilidades}>Outros</Text>
            <Text>- Pacote Office - intermediário </Text>

          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Portfolio: Renan Amendola</Text>
        <View style={styles.photoContainer}>
          <Image
            style={styles.photo}
            source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQHpxwOPvR8OoQ/profile-displayphoto-shrink_200_200/0/1716399805518?e=1721865600&v=beta&t=oA6HBIHLuteCkEz0mxYSDb_AjLfjifwFOW3qZutF0js' }}
          />


        </View>
        <View style={styles.sectionPessoal}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>
        <Text>Nome: Renan Amendola Rodrigues</Text>
        <Text>Email: renanamendola@hotmail.com</Text>
        <Text>Telefone: (81) 99207-4458</Text>
      </View>
      </View>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => setCurrentSection('Formação Acadêmica')} style={styles.button}>
          <Text style={styles.buttonText}>Formação Acadêmica</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentSection('Experiência Profissional')} style={styles.button}>
          <Text style={styles.buttonText}>Experiência Profissional</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentSection('Habilidades')} style={styles.button}>
          <Text style={styles.buttonText}>Habilidades</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {renderSection()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  photoContainer: {
    marginBottom: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    marginBottom: 20,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionPessoal: {
    marginBottom: 10,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitleHabilidades: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    padding: 10,
  },
  item: {
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
