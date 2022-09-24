import { View, Text, Button } from 'react-native'
import { useState } from 'react'

const VotacaoCidades = () => {

    const [fortaleza,setFortal] = useState(0)
    const [quixada,setQuixada] = useState(0)
    const [banabuiu,setBanabuiu] = useState(0)
    const [itapipoca,setItapipoca] = useState(0)

    const [resultado,setResultado] = useState()
    

    const fortal = () =>{
        setFortal(fortaleza+1)
      }
    const quixas = () =>{
      setQuixada(quixada+1)
     }
     const banabas = () =>{
      setBanabuiu(banabuiu+1)
    }
    const eitapipoca = () =>{
        setItapipoca(itapipoca+1)
    }
     

    const ResultadoVotacao = () => {
        if(fortaleza > quixada && fortaleza > banabuiu && fortaleza > itapipoca){ 
            setResultado("Fortal venceu")
          }
        else if(quixada > fortaleza && quixada > banabuiu && quixada > itapipoca){ 
            setResultado("Quixas venceu")
        }
        else if(banabuiu > quixada && banabuiu > fortaleza && banabuiu > itapipoca){
            setResultado("Banabasbuiu Venceu")
        }
        else if(itapipoca > fortaleza && itapipoca > quixada && itapipoca > banabuiu){
            setResultado("EitaPipoca Venceu")
        }
        else{
            setResultado("empatou")
        }
    }
    

  
    return (
        <View>
            <View>
                <Text style={{fontSize:14,fontWeight:'bold'}}>Fortaleza:{fortaleza} </Text>
                <Text style={{fontSize:14,fontWeight:'bold'}}>Quixadá: {quixada} </Text>
                <Text style={{fontSize:14,fontWeight:'bold'}}>Banabuiu:{banabuiu}</Text>
                <Text style={{fontSize:14,fontWeight:'bold'}}>Itapipoca:{itapipoca}</Text>
            </View>
            <View
                style={{
                    flex:1,
                    flexDirection:'row'
                }}
            >
                <View style={{margin:5}}>
                    <Button title='Fortaleza' onPress={fortal}/> 
                </View>
                <View style={{margin:5}}>
                    <Button title='Quixadá' onPress={quixas}/> 
                </View>
                <View style={{margin:5}}>
                    <Button title='Banabuiu' onPress={banabas}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Itapipoca' onPress={eitapipoca}/>
                </View>
            </View>
            <View style={{margin:1}}>
                    <Button title='Mostrar Resultado' onPress={ResultadoVotacao}/>
                </View>
                <Text style={{fontSize:25,fontWeight:'bold'}}>Resultado:{resultado}   </Text>
        </View>
    )
}
export default VotacaoCidades