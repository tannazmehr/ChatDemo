import React, { useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { Bubble, GiftedChat, SystemMessage } from "react-native-gifted-chat";
import { addDoc, collection, onSnapshot, query, orderBy } from "firebase/firestore";

const Chat = ({ db, route, navigation }) => {
    const [messages, setMessages] = useState([]);
    const { userID, name, color } = route.params;
    let unsubMessages;

    useEffect(() => {
        navigation.setOptions({ title: name });
        const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));

        unsubMessages = onSnapshot(q, (documentsSnapshot) => {
            let newMessages = [];
            documentsSnapshot.forEach((doc) => {
              newMessages.push({
                id: doc.id,
                ...doc.data(),
                createdAt: new Date(doc.data().createdAt.toMillis()),
              });
            });
            setMessages(newMessages);
          });
          return () => {
            if (unsubMessages) unsubMessages();
          }

      }, []);

    const onSend = (newMessages) => {
        addDoc(collection(db, "messages"), newMessages[0])
    }

    const renderBubble = (props) => {
        return <Bubble
            {...props}
            wrapperStyle={{
            right: {
                    backgroundColor: "#000"
                },
                left: {
                    backgroundColor: "#FFF"
                }
            }}
        />
    };

    const renderSystemMessage = (props) => {
        return (
          <SystemMessage
            {...props}
            textStyle={{
              color: "white",
            }}
          />
        );
      };


    return (
        <View style={[styles.container, { backgroundColor: color }]}
            accessible={true}
            accessibilityLabel="Chat Screen"
            accessibilityHint="Shows messages"
            >
            <GiftedChat
                messages={messages}
                renderBubble={renderBubble}
                renderSystemMessage={renderSystemMessage}
                onSend={(messages) => onSend(messages)}
                user={{ _id: userID, name: name }}
            />
            {Platform.OS === "android" ? ( <KeyboardAvoidingView behavior="height" /> ) : null}
            {Platform.OS === "ios" ? ( <KeyboardAvoidingView behavior="padding" /> ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Chat;
