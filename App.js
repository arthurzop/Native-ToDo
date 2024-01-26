import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './pages/splash-screen';
import Home from './pages/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={Splash} options={{title: null}} />
        <Stack.Screen name="home" component={Home} options={{title: null}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

