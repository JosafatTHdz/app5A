import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Header from './app/components/header';
import Footer from './app/components/footer';
import Propinas from './app/components/propinas';

export default function App() {
  return (
    <View style={styles.container}>
      <Header Titulo='Calculadora de Propinas'
      nombre='Josafat Hernandez'
      imagen={require('')} />

      {/* <Boton titulo='Hola' 
      onPress={()=>{Alert.alert('Hola soy un boton')}}
      icono={<Fontisto name="coffeescript" size={24} color="white"/>}
      posicionIcono='Derecha'/>

      <Caja label="User" icono={<Fontisto name='user-secret' size={24} color='#fff'/>} color='red'/> */}
      <Propinas />
        

      <Footer grupo='5A' fecha='18/02/2025'/>
    </View>
  );
}

const coffeePalette = {
  primary: "#4B2E1E", // Café oscuro - Ideal para encabezados, botones principales y branding.
  secondary: "#A67B5B", // Caramelo - Útil para resaltar elementos secundarios o fondos de secciones.
  background: "#EDE0D4", // Beige crema - Para el fondo general de la app, mantiene claridad y elegancia.
  accent: "#3F704D", // Verde hoja - Para resaltar elementos naturales y generar confianza.
  highlight: "#C0A16B" // Dorado suave - Perfecto para detalles llamativos como íconos o bordes de botones.
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: coffeePalette.background,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});