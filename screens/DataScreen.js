import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import * as Icon from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getAllSensors, deleteData } from '../Api'; 

const DataScreen = () => {
    const navigation = useNavigation();
    const [temperatureData, setTemperatureData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const sensors = await getAllSensors();
            setTemperatureData(sensors); 
            setLoading(false);
        } catch (error) {
            console.error('Error fetching sensor data:', error);
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>Temperature: {item.temperatura}°C</Text>
            <Text style={styles.itemText}>Humidity: {item.humedad}%</Text>
            <Text style={styles.itemText}>Heat Index: {item.sensacionTermica}°</Text>
            <Text style={styles.itemText}>Date: {item.fechaRegistro}°</Text>
        </View>
    );

    const handleLogout = () => {
        navigation.navigate('App');
    };

    const handleHome = () => {
        navigation.navigate('HomeScreen');
    };

    const handleTemperature = () => {
        navigation.navigate('Temperature');
    };

    const handleAccount = () => {
        navigation.navigate('AccountScreen');
    };

    const handleDeleteAll = async () => {
        try {
            await deleteData();
            setTemperatureData([]); 
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const handleRefresh = () => {
        setLoading(true);
        fetchData(); 
    };

    return (
        <View style={styles.container}>
            {/* Iconos en la parte superior */}
            <View style={styles.topSection}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon.FontAwesome5 name="clipboard-list" size={40} color="#486EEB" />
                </TouchableOpacity>
                <Text style={styles.title}>DATA</Text>
                <TouchableOpacity style={styles.iconButton} onPress={handleAccount}>
                    <Icon.Ionicons name="settings-sharp" size={40} color="#486EEB" />
                </TouchableOpacity>
            </View>

            {/* Indicador de carga */}
            {loading ? (
                <ActivityIndicator size="large" color="#486EEB" style={{ marginTop: 20 }} />
            ) : (
                <FlatList
                    data={temperatureData}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    style={styles.list}
                />
            )}

            {/* Botones en la parte inferior */}
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.bottomIcon} onPress={handleHome}>
                    <Icon.Entypo name="home" size={50} color="#486EEB" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomIcon} onPress={handleTemperature}>
                    <Icon.FontAwesome6 name="temperature-half" size={50} color="#486EEB" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomIcon} onPress={handleLogout}>
                    <Icon.MaterialCommunityIcons name="logout" size={50} color="#486EEB" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomIcon} onPress={handleDeleteAll}>
                    <Icon.MaterialCommunityIcons name="delete" size={50} color="#486EEB" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: '#486EEB'
    },
    iconButton: {
        padding: 10,
        alignItems: 'center',
    },
    list: {
        flex: 1,
        width: '100%',
    },
    item: {
        backgroundColor: '#729DF2',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 18,
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
    bottomIcon: {
        alignItems: 'center',
        padding: 20,
        paddingBottom: 20,
    },
    iconText: {
        fontSize: 16,
        color: '#486EEB',
    },
});

export default DataScreen;
