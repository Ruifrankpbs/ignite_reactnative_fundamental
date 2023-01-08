
import { Text, View } from "react-native";

export default function App(){
  return(
    <View style={{
      flex:1,
      backgroundColor: '#131016',
      padding:24,
    }}>
    <Text style={{
      color:'#fdfcfe',
      fontSize: 24,
      fontWeight:'bold',
      marginTop: 48,
      alignContent: 'center',
    }}>
      Nome do Evento
    </Text>

    <Text style={{
      color: '#6B6B6B',
      fontSize:16,
    }}>
      I Love
    </Text>
    </View>
    
  )
}
/*O padrão para se criar funcionalidades especificas ou seja componentes devemos utilizar Letra maiuscula em seguida a extensão tsx*/