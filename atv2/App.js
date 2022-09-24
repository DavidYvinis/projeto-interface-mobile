import { StyleSheet, View } from 'react-native';

import Vota from './components/estados/votar.jsx'


//import OlaMundo from './components/OlaMundo'
//import Estudante from './components/Estudante'
//import Professor from './components/Professor';
//import Cena from './components/strangerthings/Cena';
//import Personagem from './components/strangerthings/Personagem';
//import Contador from './components/estados/Contador';
//import VariosEstilos from './components/estilos/VariosEstilos';
//import TamanhoFixo from './components/flex/TamanhoFixo';
//import TamanhoDinamico from './components/flex/TamanhoDinamico';
//import BotaoPegaTexto from './components/evento/BotaoPegaTexto';


export default function App() {
  return (
    <View style={styles.container}>
      
      <Vota/>
    </View>
  );
}


/*export default function App() {
  return (
      <BotaoPegaTexto />
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <Cena cena='Mundo Invertido'>
        <Personagem nome='Eleven' />
        <Personagem nome='Vecna' />
        <Personagem nome='Max'  />
        <Personagem nome='Dustin' />
      </Cena>
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <Cena titulo='Mundo Invertido'/>
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <Professor 
        nome='Wladimir' 
        titulacao='Doutor'
        universidade='UFC'
      />
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});