import React, { useState } from 'react';
// Importamos los componentes fundamentales del motor de React Native
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity, 
  Alert 
} from 'react-native';

export default function App() {
  // --- ESTADOS (Hooks) ---
  // Guardamos lo que el usuario escribe en el input
  const [nombre, setNombre] = useState('');

  // --- LÓGICA DE INTERACCIÓN ---
  const manejarPresion = () => {
    if (nombre.trim() === '') {
      Alert.alert("Atención", "Por favor, escribe tu nombre primero.");
    } else {
      Alert.alert("Tarea Completada", `¡Hola ${nombre}! Has interactuado con un Core Component.`);
    }
  };

  return (
    // SafeAreaView: El "contenedor de seguridad". 
    // Evita que el texto se tape con el notch (cámara) o la barra de señal.
    <SafeAreaView style={styles.container}>
      
      {/* View es como el <div> de la web: un contenedor genérico */}
      <View style={styles.content}>
        
        {/* Image: Requiere una fuente (uri para web o require para local) */}
        <Image 
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
          style={styles.logo} 
        />

        <Text style={styles.titulo}>Fundamentos de React Native</Text>
        <Text style={styles.subtitulo}>Ingeniería en Desarrollo de Software</Text>

        {/* TextInput: El input de texto nativo */}
        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre..."
          placeholderTextColor="#999"
          value={nombre}
          // En RN recibimos el texto directamente, no el evento 'e'
          onChangeText={(texto) => setNombre(texto)} 
        />

        {/* TouchableOpacity: Un botón que brilla/se opaca al tocarlo */}
        <TouchableOpacity 
          style={styles.boton} 
          onPress={manejarPresion}
          activeOpacity={0.7}
        >
          <Text style={styles.textoBoton}>Enviar Datos</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

// --- ESTILOS (StyleSheet) ---
// Usamos camelCase (fontSize en vez de font-size) y valores numéricos para píxeles.
const styles = StyleSheet.create({
  container: {
    flex: 1, // Hace que el contenedor use toda la pantalla
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',    // Alineación horizontal (eje secundario)
    justifyContent: 'center', // Alineación vertical (eje principal)
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
    borderRadius: 15, // Bordes redondeados solicitados
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  subtitulo: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  boton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});