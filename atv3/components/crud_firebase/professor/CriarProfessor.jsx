import { useState } from "react";
import { View,Text,Button,TextInput } from "react-native";

import { estilos } from "../css/MeuCSS";

import { firestoreDb } from "../firebase/firebase_config"
import ProfessorService from '../service/ProfessorService'


const CriarProfessor = (props) => {

    const [nome,setNome] = useState('')
    const [salario,setSalario] = useState('')
    const [curso,setCurso] = useState('')
    

    const acaoBotaoSubmeter = ()=> {

        ProfessorService.criar(
            firestoreDb,
            (id)=> {
                alert('Professor ${id} inserido')
                props.navigation.navigate('ListarProfessor')
            },
            {nome,curso,salario}
        )
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.cabecalho}>criar professor</Text>
            <TextInput
                style={estilos.input}
                placeholder="Nome" 
                value={nome}
                onChangeText={(nome)=>setNome(nome)}
            />
            <TextInput
                style={estilos.input}
                placeholder="Curso" 
                value={curso}
                onChangeText={(curso)=>setCurso(curso)}
            />
            <TextInput
                style={estilos.input}
                placeholder="Salario"
                value={salario}
                onChangeText={(salario)=>setSalario(salario)} 
            />
            <View style={estilos.botao}>
                <Button
                    title="SUBMETER" 
                    onPress={acaoBotaoSubmeter}
                />
            </View>
        </View>
    )

}

export default CriarProfessor