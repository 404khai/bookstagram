import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useFonts, HennyPenny_400Regular } from '@expo-google-fonts/henny-penny';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ActivityIndicator } from 'react-native';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

    let [fontsLoaded] = useFonts({
      HennyPenny_400Regular,
    });

    if (!fontsLoaded) {
      return <ActivityIndicator size="large" color="#FF6B6B" />;
    }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Tabs (Home, Profile, etc.) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Settings screen */}
        <Stack.Screen name="screens/settings" options={{ title: 'Settings' }} />

        {/* Modal example */}
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
