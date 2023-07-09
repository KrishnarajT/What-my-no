import React from 'react';
import {View, StyleSheet, TextInput, Pressable} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
    return (
        <View className="p-4 bg-green-600 mt-16 shadow-3xl mx-16 rounded-3xl shadow-red-300">
            <TextInput />
            <PrimaryButton>
                Start Game
            </PrimaryButton>
            <PrimaryButton>
                Confirm
            </PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({})

export default StartGameScreen;
