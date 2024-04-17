import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TemperatureScreen() {
    const navigation = useNavigation();
    const [temperature, setTemperature] = useState(30.5); 
    const [humidity, Humidity] = useState(30);
    const [heat, Heat] = useState(43);



    // Función para simular un cambio en la temperatura (puedes reemplazar esto con tus datos en tiempo real)
    const updateTemperature = () => {
        const newTemperature = Math.floor(Math.random() * 51); // Genera un número aleatorio entre 0 y 50 (temperatura máxima)
        setTemperature(newTemperature);
    };

    const handleLogout = () => {
        navigation.navigate('App');
    };

    const handleHome = () => {
        navigation.navigate('HomeScreen');
    };

    const handleBinnacle =()=>{
        navigation.navigate('DataScreen')
    }

    const handleAccount = () =>{
        navigation.navigate('AccountScreen')
    }
    return (
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <TouchableOpacity style={styles.iconButton} onPress={handleBinnacle}>
                    <Icon.FontAwesome5 name="clipboard-list" size={40} color="#486EEB" />
                    </TouchableOpacity>
                    <Text style={styles.title}>DEGREES</Text>
                    <TouchableOpacity style={styles.iconButton} onPress={handleAccount}>
                        <Icon.Ionicons name="settings-sharp" size={40} color="#486EEB" />
                    </TouchableOpacity>
                </View>

                <View style={styles.temperatureContainer}>
                    <Text style={styles.temperature}>{temperature}°</Text>
                    <View style={styles.barContainer}>
                        {[...Array(50)].map((_, index) => (
                            <View key={index} style={[styles.bar, { backgroundColor: index < temperature ? '#F2636F' : '#DDD' }]} />
                        ))}
                    </View>

                    <View style={styles.bottomSection2}>
                        <View style={styles.iconContainer}>
                            <Icon.MaterialCommunityIcons name="air-humidifier" size={50} color="#486EEB" />
                            <Text style={styles.iconText}>Humidity</Text>
                            <Text style={styles.humidity}>{humidity}%</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon.MaterialIcons name="whatshot" size={50} color="#486EEB" />
                            <Text style={styles.iconText}>Thermal sensation</Text>
                            <Text style={styles.humidity}>{heat}°</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.bottomSection}>
                    <TouchableOpacity style={styles.bottomIcon} onPress={handleHome}>
                        <Icon.Entypo name="home" size={50} color="#486EEB" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomIcon}>
                        <Icon.FontAwesome6 name="temperature-half" size={50} color="#486EEB" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomIcon} onPress={handleLogout}>
                        <Icon.MaterialCommunityIcons name="logout" size={50} color="#486EEB" />
                    </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:'10%',
        marginBottom: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: '#486EEB',
        padding:40
    },
    iconButton: {
        padding: 10,
        alignItems: 'center',
    },
    iconText: {
        fontSize: 16,
        color: '#486EEB',
    },
    temperatureContainer: {
        alignItems: 'center',
        marginTop:'20%',
        marginBottom: 20,
    },
    temperature: {
        fontSize: 120,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#486EEB'
    },
    barContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: 'auto',
        marginBottom: 10,
    },
    bar: {
        width: 2,
        height: 30,
        marginHorizontal: 2,
        borderRadius: 5,
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
    bottomIcon: {
        padding: 40,
        paddingBottom: 20,
    },
    drawer: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 50,
        paddingHorizontal: 20
    },
    drawerItem: {
        fontSize: 30,
        marginTop: 20,
        color:'#486EEB'
    },
    separator: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    humidity:{
        color:'#F2636F'
    },
    bottomSection2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '10%',
    },
    iconContainer: {
        alignItems: 'center',
        padding:'10%'
    },
});
