import React,{useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';
import Cep from './components/Cep';
import Api from './components/Api';

const image = {uri: "https://st.depositphotos.com/1001564/2470/i/600/depositphotos_24704059-stock-photo-background.jpg"}


export default function App() {
  const [cep, setCep] = useState("");
  const [inputCep, setInputCep] = useState(0);

  
  async function buscaCep(){
    const response = await Api.get('ws/'+inputCep+'/json/');
    setCep(response.data);
  }

  return (
    <View style={styles.container}>

<ImageBackground style={{
position: "absolute",
height: '100%',
width: '100%'
}}source={image}>

</ImageBackground>
      <View style={styles.bloco}>
      <Text style={styles.txt}>Digite seu CEP: </Text>

      <TextInput
        placeholder='ex: 11740000'
        keyboardType='numeric'
        style={styles.input}
        onChangeText={(data)=>setInputCep(data)}
        />
        
      <TouchableOpacity
      style={styles.botao}
      onPress={buscaCep}
      >
        <Text style={styles.txtBotao}> Buscar </Text>
      </TouchableOpacity>

      <Cep data={cep} />
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco:{
    width:'100%',
    alignItens: 'center',
  },
  texto:{
    fontSize: 20,
  },
  input:{
    width: '80%',
    marginLeft:'5%',
    borderBottomWidth: 2,
    marginTop: 20,
    fontSize: 30
  },
  botao:{
    width:'80%',
    fontSize: 30,
    marginTop: 30,
    borderBottonColor: 	'	#7CFC00'
  },
  txtBotao:{
    fontSize:20,
    textAlign: 'center'
  },
  txt:{
     fontSize: 20,
     textAlign: 'center'
  },
    image: {
      flex: 1,
      justifyContent: "center"
    }