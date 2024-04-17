import React from 'react';
import { StyleSheet, View, Text, FlatList,TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';


const DataScreen = () => {
    const navigation = useNavigation();
    const temperatureData = [
        { id: '1', temperature: 23.5, humidity: 60 },
        { id: '2', temperature: 24.0, humidity: 55 },
        { id: '3', temperature: 22.8, humidity: 58 },
        { id: '4', temperature: 25.2, humidity: 50 },
        { id: '5', temperature: 26.5, humidity: 45 },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>Temperature: {item.temperature}°C</Text>
            <Text style={styles.itemText}>Humidity: {item.humidity}%</Text>
        </View>
    );

    const handleLogout = () => {
        navigation.navigate('App');
    };

    const handleHome = () => {
        navigation.navigate('HomeScreen');
    };

    const handleTemperature = () => {
        navigation.navigate('Temperature')
    }

    const handleAccount = () =>{
        navigation.navigate('AccountScreen')
    }
    return (
        <View style={styles.container}>
            {/* Iconos de arriba */}
            <View style={styles.topSection}>
                <TouchableOpacity style={styles.iconButton}>
                <Icon.FontAwesome5 name="clipboard-list" size={40} color="#486EEB" />
                </TouchableOpacity>
                <Text style={styles.title}>DATA</Text>
                <TouchableOpacity style={styles.iconButton} onPress={handleAccount}>
                    <Icon.Ionicons name="settings-sharp" size={40} color="#486EEB" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={temperatureData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />

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
        marginTop:20,

    },
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: '#486EEB'
    },
    iconButton: {
        padding: 50,
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
        padding: 40,
        paddingBottom: 20,
    },
});

export default DataScreen;
