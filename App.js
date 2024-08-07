import ConnectionScreen from "./screens/ConnectionScreen";
import DatePicker from "./screens/DatePicker";
import SignUpScreen from "./screens/SignUpScreen";
import SignUpProScreen from "./screens/SignUpProScreen";
import FormuleScreen from "./screens/FormuleScreen";
import MesRDVScreen from "./screens/MesRDVScreen";
import ChooseBarberScreen from "./screens/ChooseBarberScreen";
import HomeScreen from "./screens/HomeScreen";
import PayScreen from "./screens/PayScreen";
import FinRDVScreen from "./screens/FinRDVScreen";
import CompareFormulesScreen from "./screens/CompareFormulesScreen";
import { StyleSheet, View } from "react-native";
import ConceptScreen from "./screens/ConceptScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="CompareFormules"
          component={CompareFormulesScreen}
        />
        <Stack.Screen name="Formules" component={FormuleScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DatePicker" component={DatePicker} />
        <Stack.Screen name="Concept" component={ConceptScreen} />
        <Stack.Screen name="Connection" component={ConnectionScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignUpPro" component={SignUpProScreen} />
        <Stack.Screen name="ChooseBarber" component={ChooseBarberScreen} />
        <Stack.Screen name="RDVs" component={MesRDVScreen} />
        <Stack.Screen name="Pay" component={PayScreen} />
        <Stack.Screen name="FinRdvs" component={FinRDVScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});
