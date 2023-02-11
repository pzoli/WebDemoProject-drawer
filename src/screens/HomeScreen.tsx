import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { Button, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { RootStackParamList } from './RootStackParamList';

type HomeScreenProp = DrawerNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenProp>();
    return (
        <SafeAreaView>
            <StatusBar />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, width: '100%', textAlign: 'center' }}>HomeScreen</Text>
                <Button onPress={() => {
                    navigation.navigate('Admin', { teszt: 'valami' });
                }} title='Admin' />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;