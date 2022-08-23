import React from 'react'

// NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// SCREENS
import HomeScreen from './screens/home'

const Stack = createNativeStackNavigator()
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
