import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useCallback, useEffect } from "react"
import * as SplashScreen from 'expo-splash-screen';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import { AuthProvider } from './src/contexts/Auth';
import StackNavigation from "./src/navigation/stackNavigation";
// import { FriendContext } from "./src/contexts/FriendContext";
import vectorFonts from './src/data/Fonts';
import { cacheImages, cacheFonts } from "./src/methode/caching";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    loadAssetsAsync();
  }, []);
  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('./assets/images/iPhone-wallpaper.jpeg'),
    ]);
    const fontAssets = cacheFonts([
      ...vectorFonts,
      // { georgia: require('./assets/fonts/Georgia.ttf') },
      // { regular: require('./assets/fonts/Montserrat-Regular.ttf') },
      // { light: require('./assets/fonts/Montserrat-Light.ttf') },
      { bold: require('./assets/fonts/Montserrat-Bold.ttf') },
      { UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf') },
      { 'SFProDisplay-Bold': require('./assets/fonts/Ubuntu-Bold.ttf') },
      { "SFProDisplay-Regular": require('./assets/fonts/Ubuntu-Light-Italic.ttf') },
    ]);
    await Promise.all([...imageAssets, ...fontAssets]);
    setIsReady(true);
  };
  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <AuthProvider>
            <StackNavigation />
          </AuthProvider>
        <StatusBar backgroundColor="#110134" style="light" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}