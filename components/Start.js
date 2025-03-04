import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground } from "react-native";

const Start = ({ navigation }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('#B9C6AE');
    const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE']
    
    return (
        <ImageBackground 
            source={require("../assets/BG-Image.png")}
            resizeMode="cover"
            style={styles.BGImage}>
            <Text style={styles.title}>Let Us Chat</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    onChangeText={setName}
                    placeholder="Your Name"
                    />
                <View>
                    <Text style={styles.colorText}>Tap To Choose Background Color:</Text>
                    <View style= {styles.colorButtonContainer}>
                        {colors.map((item, index) => (
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel="More options"
                                accessibilityHint="Choose a background color for the chat."
                                accessibilityRole="button"
                                key={index}
                                style={[styles.colorButton, { backgroundColor: item },
                                    color === item && { borderWidth: 4, borderColor: '#e9e9e9'}]}
                                onPress={() => setColor(item)}
                            />
                        ))}
                    </View>
                </View>
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="More options"
                    accessibilityHint="Go to the chat screen"
                    accessibilityRole="button"
                    style={styles.ChatButton}
                    title="Start Chatting"
                    onPress={() => navigation.navigate('Chat', { name: name, color: color })}
                    >
                        <Text style={styles.ChatButtonText}>Start Chatting</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '44%',
        width: '88%',
        backgroundColor: 'white',
        padding: 15
    },
    textInput: {
        width: "88%",
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
        fontSize: 16,
        fontWeight: '300',
        opacity: 0.5
      },
    BGImage: {
        flex: 1,
        alignItems: 'center',
        resizeMode: 'cover',
        justifyContent: 'space-between',
        paddingBottom: 30
    },
    title: {
        fontSize: 45,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    ChatButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#757083',
        width: '88%',
        padding: 10,
        height: 50
    },
    ChatButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    colorText: {
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
        padding: 20

    },
    colorButton: {
        width: 50,
        height: 50,
        borderRadius: 25

    },
    colorButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '88%',
        justifyContent: 'space-evenly',
        marginBottom: 20
    }
})

export default Start;