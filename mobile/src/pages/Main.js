import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {
    const [currentRegion, setCurrentRegion] = useState(null); // o null para definir o inicial como nulo

    useEffect(() => {
        async function loadInitPosition(){
            const {granted} = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync ( {
                   enableHighAccuracy: true, // pegar a posição mais proxima, utilizando a posição pelo GPS ( so funciona com o gps ligado )
                });

                const {latitude, longitude} = coords;

                setCurrentRegion({ // latitude de longitude Delta, é para obter o zoom inicial no map
                    latitude,
                    longitude,
                    latitudeDelta: 0.04 ,
                    longitudeDelta: 0.04 
                })
            }
        }

        loadInitPosition();
    }, []);

    if (!currentRegion){ // para retornar nulo enquanto nao tem a localização inicial, o mapa nao ira renderizar
        return null;
    };

    //return <MapView style={{ flex: 1 }}/> //duas chaves para incluir um objeto do javascript dentro, o primeiro para delcarar que é codigo js e o segundo para declarar que é variavel
    return <MapView initialRegion={currentRegion} style={styles.map} /> // igual o de cima porem chamando um style e não definindo diretamente, initialRegial para o lugar inicial do map
};

const styles = StyleSheet.create({
    map : {
        flex : 1
    },
});
s
export default Main;