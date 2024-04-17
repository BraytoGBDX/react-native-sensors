import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AccountScreen() {
    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.navigate('App');
    };

    const handleHome = () => {
        navigation.navigate('HomeScreen');
    };

    const handleTemperature = () => {
        navigation.navigate('Temperature')
    }

    const handleBinnacle = () => {
        navigation.navigate('DataScreen')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity style={styles.iconButton} onPress={handleBinnacle}>
                    <Icon.FontAwesome5 name="clipboard-list" size={40} color="#486EEB" />
                </TouchableOpacity>
                <Text style={styles.title}>ACCOUNT</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon.Ionicons name="settings-sharp" size={40} color="#486EEB" />
                </TouchableOpacity>
            </View>

            

            <View style={styles.settingsContainer}>
                <View style={styles.userContainer}>
                    <Icon.FontAwesome name="user-circle" size={70} color="#F2636F" style={styles.userIcon} />
                    <Text style={styles.username}>Casa</Text>
                </View>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.settingButton}>
                    <Icon.MaterialCommunityIcons name="account-edit-outline" size={40} color="#486EEB" />
                    <Text style={styles.settingText}>Edit Profile</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.settingButton}>
                    <Icon.MaterialCommunityIcons name="lock-outline" size={40} color="#486EEB" />
                    <Text style={styles.settingText}>Change Password</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity style={styles.settingButton}>
                    <Icon.MaterialCommunityIcons name="account-check-outline" size={40} color="#486EEB" />
                    <Text style={styles.settingText}>Privacy Settings</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <Text style={styles.footer}>Powered by Pixies Inc.®</Text>
            </View>

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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: '8%',
    },
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: '#486EEB',
        padding: 20,
    },
    iconButton: {
        padding: 20,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:10,
        marginBottom:'5%'
    },
    userIcon: {
        marginRight: 10,
    },
    username: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#F2636F',
        marginTop: 10,
        
    },
    settingsContainer: {
        marginTop: 50,
        position:'absolute',
        left:0
    },
    settingButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
    },
    settingText: {
        fontSize: 24,
        marginLeft: 10,
    },
    separator: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '220%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        marginBottom: 20,
    },
    bottomIcon: {
        padding: 40,
        paddingBottom: 20,
    },
    footer:{
        color:'gray',
        marginTop:'10%',
        marginLeft:'41%'
    }
});
