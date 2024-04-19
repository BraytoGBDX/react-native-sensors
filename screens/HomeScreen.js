import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native';
import * as Icon from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [buttonPressed, setButtonPressed] = useState({
        door: false,
        window: false,
        windowClosed: false,
        fan: false,
        light:false
    });

    const ventilador = async () => {
            const response = await fetch('http://192.168.137.248/ventilador');
    };

    const puerta = async () => {
            const response = await fetch('http://192.168.137.248/puerta');
    };

    const ventana1 = async () => {
            const response = await fetch('http://192.168.137.248/ventana1');
    };

    const ventana2 = async () => {
            const response = await fetch('http://192.168.137.248/ventana2');
    };

    const luz = async () => {
            const response = await fetch('http://192.168.137.248/luz');
    };

    const handleBinnacle = () => {
        navigation.navigate('DataScreen');
    };

    const handleLogout = () => {
        navigation.navigate('App');
    };

    const handleTemperature = () => {
        navigation.navigate('Temperature');
    };

    const handleAccount = () =>{
        navigation.navigate('AccountScreen')
    }

    const handleButtonPress = (buttonName) => {
        setButtonPressed((prevState) => ({
            ...prevState,
            [buttonName]: !prevState[buttonName],
        }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity style={styles.iconButton} onPress={handleBinnacle}>
                    <Icon.FontAwesome5 name="clipboard-list" size={40} color="#486EEB" />
                </TouchableOpacity>
                <Text style={styles.title}>DEVICES</Text>
                <TouchableOpacity style={styles.iconButton} onPress={handleAccount}>
                    <Icon.Ionicons name="settings-sharp" size={40} color="#486EEB" />
                </TouchableOpacity>
            </View>

            <View style={styles.gridContainer}>
                <View style={styles.gridRow}>
                    <TouchableOpacity
                        style={[styles.gridItem, buttonPressed.door ? styles.buttonPressed : null]}
                        onPress={() => {handleButtonPress('door');puerta()}}
                    >
                        <Icon.MaterialCommunityIcons name="door" size={85} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.gridItem, buttonPressed.window ? styles.buttonPressed : null]}
                        onPress={() => {handleButtonPress('window');ventana1()}}
                    >
                        <Icon.MaterialIcons name="window" size={80} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.gridRow}>
                    <TouchableOpacity
                        style={[styles.gridItem, buttonPressed.windowClosed ? styles.buttonPressed : null]}
                        onPress={() => {handleButtonPress('windowClosed'),ventana2()}}
                    >
                        <Icon.MaterialCommunityIcons name="window-closed-variant" size={80} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.gridItem, buttonPressed.fan ? styles.buttonPressed : null]}
                        onPress={() => {handleButtonPress('fan'); ventilador()}}
                    >
                        <Icon.MaterialCommunityIcons name="fan" size={80} color="white" />
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.gridRow}>
                <TouchableOpacity
                        style={[styles.gridItem, buttonPressed.light ? styles.buttonPressed : null]}
                        onPress={() => {handleButtonPress('light');luz()}}
                    >
                        <Icon.MaterialCommunityIcons name="lightbulb-on-outline" size={80} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.bottomIcon}>
                    <Icon.Entypo name="home" size={50} color="#486EEB" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomIcon} onPress={handleTemperature}>
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
        backgroundColor: 'white',
    },
    topSection: {
        position: 'absolute',
        top: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: '#486EEB',
    },
    iconButton: {
        padding: 50,
    },
    gridContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    gridItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        backgroundColor: '#F2636F',
        padding: 30,
        margin: 20,
        marginTop: 0,
        borderRadius: 10,
    },
    bottomSection: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomIcon: {
        padding: 40,
        paddingBottom: 20,
    },
    drawer: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    drawerItem: {
        fontSize: 30,
        marginTop: 20,
        color: '#486EEB',
    },
    separator: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    buttonPressed: {
        backgroundColor: '#00D147',
    },
});
