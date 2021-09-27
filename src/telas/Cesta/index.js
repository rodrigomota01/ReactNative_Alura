import React from "react";
import { StyleSheet, Dimensions, View } from 'react-native';

import Detalhes from "./componentes/Detalhes";

import Topo from './componentes/Topo';


const width = Dimensions.get('screen').width;
export default function Cesta() {
    return <> 
   
    <Topo />

    <View style={estilos.cesta}>
        <Detalhes/>
    </View>
    </>
}

const estilos = StyleSheet.create({
  
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});