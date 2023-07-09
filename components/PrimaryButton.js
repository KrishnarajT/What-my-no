import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const PrimaryButton = (props) => {
    return (
        <View>
            <Text>
                {props.children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default PrimaryButton;
