import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { RootStackParamList } from './RootStackParamList';
import alert from '../tools/alert';

type AdminScreenProp = StackNavigationProp<RootStackParamList, 'Admin'>;

const AdminScreen: React.FC = () => {
    const navigation = useNavigation<AdminScreenProp>();
    const route = useRoute();

    return (
        <SafeAreaView>
            <StatusBar />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24 }}>AdminScreen</Text>
                <Button onPress={() => {
                    navigation.navigate('Home', {});
                }} title='Home' />
                <Button onPress={() => {
                    alert(JSON.stringify(route.params));
                }} title='params' />
            </View>
        </SafeAreaView>
    );
};

export default AdminScreen;