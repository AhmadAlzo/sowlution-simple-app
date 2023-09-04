import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, Platform, ActivityIndicator, View } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { StackParamList } from "../types";

import SplahAnimationScreen from "../screen/splashAnimation/SplahAnimationScreen";
import LiquidScreen from "../screen/LiquidSlider/LiquidScreen";
import Main from "../screen/main/Main.js"


const Stack = createNativeStackNavigator<StackParamList>();
function StackNavigation() {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const getLocalUser = async () => {
            try {
                setLoading(true);
                // AsyncStorage.removeItem("@user")
                // const userJSON = await AsyncStorage.getItem("@user");
                // const userData = userJSON ? JSON.parse(userJSON) : null;
                // setUserInfo(userData);
            } catch (e) {
            }
            finally {
                setTimeout(() => setLoading(false), 4700)
                // setLoading(false)
            }
        };
        getLocalUser();
    }, []);
    if (loading) {
        return (
            <SplahAnimationScreen />
        );
    }
    return (
        <NavigationContainer >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
            >
                <Stack.Navigator>
                    <Stack.Screen
                        name="LiquidScreen"
                        component={LiquidScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Main"
                        component={Main}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </KeyboardAvoidingView>
        </NavigationContainer>
    );
}
export default StackNavigation;