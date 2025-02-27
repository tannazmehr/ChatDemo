import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Screen2 = ({ route, navigation }) => {

    const { name, color } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: name });
    }, []);
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={{ color: '#fff', fontSize: 30 }}>Hello!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Screen2;