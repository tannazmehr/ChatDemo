import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Start from './components/Start';
import Chat from './components/Chat';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

 const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDoj-jS8QvB-2Bf6_FTml_fklDRAzPVp2c",
    authDomain: "chatapp-c0823.firebaseapp.com",
    projectId: "chatapp-c0823",
    storageBucket: "chatapp-c0823.firebasestorage.app",
    messagingSenderId: "492465600070",
    appId: "1:492465600070:web:ba80ca162b59d78b1a3c47"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat"
        >
          {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
  </NavigationContainer>
  );
}


export default App;